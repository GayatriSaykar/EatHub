import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AddMenu = () => {
 
  const navigate = useNavigate();
  const messSubscriptionId = localStorage.getItem("messSubId");
  const [menuData, setMenuData] = useState([]);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    console.log("mess id" + messSubscriptionId);
    fetch("http://localhost:8080/menus")
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(e);
  };

  const handleSave = (e) => {
    console.log("Clicked handle save");
    e.preventDefault();
    if (selectedMenuItems.length === 0) {
      alert("Please select at least one menu item");
      return;
    }
    selectedMenuItems.forEach((selectedMenuItem) => {
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          menu_id: selectedMenuItem.menu_id,
          quantity: quantity,
          mess_subscription_id: messSubscriptionId,
        }),
      };

      console.log(
        JSON.stringify({
          menu_id: selectedMenuItem.menu_id,
          quantity: quantity,
          mess_subscription_id: messSubscriptionId,
        })
      );

      fetch("http://localhost:8080/SaveMenuSub", reqOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          navigate("/vendor")
          console.log("Menu subscription saved:", data);
        })
        .catch((error) =>
          console.error("Error saving menu subscription:", error)
        );
    });
  };

  return (
    <div className="container mt-4">
      {JSON.stringify(menuData)}
      <h3>Add Menu</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="menuSelect">Select Menu Items</label>
          <select
            id="menuSelect"
            className="form-control"
            onChange={(e) => {
              const selectedOptions = Array.from(e.target.selectedOptions).map(
                (option) => JSON.parse(option.value)
              );
              setSelectedMenuItems(selectedOptions);
            }}
          >
            {menuData.map((menuItem) => (
              <option key={menuItem.id} value={JSON.stringify(menuItem)}>
                {`${menuItem.item}`}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantityInput">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantityInput"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => handleSave(e)}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
