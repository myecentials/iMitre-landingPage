import Features from "./features";
import Store_Section from "./find_at_store";
import Navbar from "./navbar";
import Selectplan from "./selectplan";
import Sponsors from "./sponsors";
import Testimonials from "./testimonials";
import Litre_Tracker from "./your_litre_tracker";

const Homepage=()=>{
    return(
        <div className="lg:w-full bg-homepage_bg">

            <Navbar/>
            <Litre_Tracker/>
            {/* <Sponsors/> */}
            <Features/>
            <Store_Section/>
            {/* <Testimonials/> */}
            <Selectplan/>

        </div>
    );
}
export default Homepage