import Features from "./features";
import Store_Section from "./find_at_store";
import Navbar from "./navbar";
import Sponsors from "./sponsors";
import Litre_Tracker from "./your_litre_tracker";

const Homepage=()=>{
    return(
        <div className="lg:w-full bg-homepage_bg">

            <Navbar/>
            <Litre_Tracker/>
            <Sponsors/>
            <Features/>
            <Store_Section/>

        </div>
    );
}
export default Homepage