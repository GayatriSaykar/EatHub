import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Welcome(){
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Join Us Today</h2>
                    <div className="text-center">
                        <button className="btn btn-primary me-2">Register as Customer</button>
                        <button className="btn btn-primary">Register as Mess Vendor</button>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}