import Features from "./features";
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

        </div>
    );
}
export default Homepage