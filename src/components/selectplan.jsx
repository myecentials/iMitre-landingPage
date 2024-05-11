import { useState } from "react";
import { motion } from 'framer-motion';
import Plancard from "./plancard";

const Selectplan=()=>{
    const [isMonthly,setIsMonthly]=useState(true);
    const variant={
        initial:{
            x:'-80vw'
        },
        animate:{
            x:'0vw',
            transition:{
                x:{
                    // repeat: Infinity,
                    duration:1,
                    // repeatType:'reverse',
                    delay: 0.5 
                }
            }
        }
    }

let Starter_List=['1 Branch','Unlimited Staff','Email Notification','Financial Report','Export Reports to PDF','Inventory Management','Employee Management','Deposit & Discharge Reconcile'];
let Professional_List=['4 Branches','All packages under starter plan'];
let Enterprise_List=['5 or more Branches','All packages under Professional plan'];
return(
<motion.div
variants={variant}
initial='initial'
whileInView='animate'
transition='transition'
viewport={{once:true}}

 className="w-full md:h-auto lg:h-[1093px] xs:py-[60px] xs:px-[30px]  md:py-[100px] lg:py-[120px] md:px-[32px] lg:px-[55px] lg:gap-[60px] lg:mb-[120px]">




<h2 className="xs:w-[315px] xs:h-[147px] md:w-[680px] md:h-[96px] lg:w-full lg:h-auto poppins-bold xs:text-[34px] md:text-[38px] text-center xs:mb-[20px] mx-auto">
Pick Your Perfect Plan
</h2>

<p className="lg:mb-[28px] lg:text-[16px] text-center lg:w-auto text-text_color">
Find the perfect plan for your business with our flexible pricing options.
</p>


<div className="xs:mt-[20px] md:mt-0 xs:w-[240px] xs:h-[32px] mx-auto flex flex-row items-center justify-between">
    <p className="lg:text-[21px] text-text_color poppins-medium">Monthly</p>

    <div onClick={()=>setIsMonthly(!isMonthly)} className={`shadow-xl cursor-pointer xs:w-[48px] xs:h-[24px] rounded-[16px] ${isMonthly?'bg-switch_bg':'bg-swtich_color'} transition-all duration-300 ease-in-out`}>

        <div onClick={()=>setIsMonthly(!isMonthly)} className={` ${isMonthly?'translate-x-1':'translate-x-7'} transition-all duration-300 ease-in-out cursor-pointer xs:w-[20px] xs:h-[20px] translate-y-[1.9px] bg-white rounded-full`}>
   

        </div>
    </div>

    <p className="lg:text-[21px] text-text_color poppins-medium">Yearly</p>

</div>


<div className="xs:mt-[40px] lg:mt-[60px] lg:gap-[30px] flex xs:flex-col lg:flex-row items-start justify-between">


<Plancard
class_assigned='text-text_color xs:py-[40px] xs:px-[30px] lg:px-[20px] bg-white border border-homepage_bg xs:w-full md:w-[680px] lg:w-[370px] md:h-[609px] lg:h-auto rounded-[20px] lg:gap-[30px] lg:mr-[30px] xs:mb-[30px] md:mb-[20px] lg:mb-[0px]'
plan_type={'Starter'}
price={isMonthly?'GHC 150':'GHC 1500'}
duration={isMonthly?'month':'year'}
info_after_trial_1={'First 30 days free '}
info_after_trial_2={'GHC 150'}
isMonthly={isMonthly}
plan_content={Starter_List}
/>

<Plancard
class_assigned='text-text_color xs:py-[40px] xs:px-[30px] lg:px-[20px] bg-white border border-homepage_bg xs:w-full md:w-[680px] lg:w-[370px] md:h-[609px] lg:h-auto rounded-[20px] lg:gap-[30px] lg:mr-[30px] xs:mb-[30px] md:mb-[20px] lg:mb-[0px]'
plan_type={'Professional'}
price={isMonthly?'GHC 500':'GHC 5000'}
duration={isMonthly?'month':'year'}
info_after_trial_1={'First 30 days free '}
info_after_trial_2={'GHC 500'}
isMonthly={isMonthly}
plan_content={Professional_List}
/>

<Plancard
class_assigned='text-white  md:w-[680px] md:h-auto xs:py-[40px] xs:px-[30px] lg:py-[40px] lg:px-[20px] bg-learn_more xs:w-full lg:w-[370px] h-auto rounded-[20px] lg:gap-[30px]  '
plan_type={'Enterprise'}
price={isMonthly?'GHC 600':'GHC 6000'}
duration={isMonthly?'month':'year'}
is_enterprise={true}
info_after_trial_1={'First 30 days free '}
info_after_trial_2={'GHC 600'}
isMonthly={isMonthly}
plan_content={Enterprise_List}
/>
</div>

</motion.div>
);
}

export default Selectplan