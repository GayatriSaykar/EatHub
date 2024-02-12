import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import Navbar from "./Navbar";

export default function Welcome()
{
    return(
      <div>
      <div id="carouselExampleIndicators" classname="carousel slide" data-ride="carousel">
      {/* <ol classname="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" classname="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol> */}
      <div classname="carousel-inner">
        <div classname="carousel-item active">
          <img classname="d-block w-100" src={image1} alt="" />
        </div>
        <div classname="carousel-item">
          <img classname="d-block w-100" src={image2} alt="" />
        </div>
        <div classname="carousel-item">
          <img classname="d-block w-100" src={image3} alt="" />
        </div>
      </div>
      <a classname="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span classname="carousel-control-prev-icon" aria-hidden="true"></span>
        <span classname="sr-only">Previous</span>
      </a>
      <a classname="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span classname="carousel-control-next-icon" aria-hidden="true"></span>
        <span classname="sr-only">Next</span>
      </a>
    </div>
    </div>
    )
}