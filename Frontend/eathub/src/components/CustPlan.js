import { useNavigate } from "react-router-dom";

export default function CustPlan(props) {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(`/payment`);
  };

  const goBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div>
      {/* <h1>{props.mess_id}</h1> */}
      <h3>Customer plan</h3>
      <button
        className="btn btn-success"
        onClick={onSubmit}
      >
        Payment
      </button>
      <button
        className="btn btn-secondary"
        onClick={goBack}
      >
        Back
      </button>
    </div>
  );
}
