import { useEffect, useState } from "react";

export default function Footerlandingpage(){
    const [current_year,setCurrentyear]=useState('2024')
    useEffect(() => {

        const new_date = new Date()
        setCurrentyear(new_date.getFullYear().toString())
    }, [])
    return(
        <div className=" md:mx-[18px] lg:mx-0 xs:w-full md:w-[744px] lg:w-full bg-text_color xs:h-[122px] md:h-[80px] xs:py-[24px] xs:px-[20px] md:px-[30px] lg:px-[60px] flex xs:flex-col-reverse md:flex-row xs:items-start md:items-center md:justify-between">
         {/* width: Fill (375px)px;
height: Hug (122px)px;
padding: 24px 20px 24px 20px;
gap: 20px;
opacity: 0px; */}



            <p className="text-white text-[14px] lg:w-[92px] xs:ml-[6.5px] md:ml-0">
            © {current_year} iMitre. 
            </p>

            <a rel="noreferrer" href="https://drive.google.com/file/d/1BvS6kPK5s0GOtccSrdXF0Dn40uwHkQst/view?usp=sharing" target="_blank" className="xs:my-1 text-white text-[14px] lg:w-[92px] xs:ml-[6.5px] md:ml-0">Privacy Policy</a>

            <div className="xs:my-[10px] md:mb-0 lg:w-[128px] lg:gap-[16px] flex lg:flex-row items-center justify-center">
            <img
            src={require('../asserts/footer/play.png')}
            alt='play'
            className='xs:w-[32px] xs:h-[32px] object-contain xs:mr-[16px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'
            />
            <img
            src={require('../asserts/footer/igg.png')}
            alt='igg'
            className='xs:w-[32px] xs:h-[32px] object-contain xs:mr-[16px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'

            />
            <img
            src={require('../asserts/footer/lin.png')}
            alt='lin'
            className='xs:w-[32px] xs:h-[32px] object-contain  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'

            />
            </div>
            {/* width: Hug (128px)px;
height: Hug (32px)px;
gap: 16px;
opacity: 0px; */}


        </div>
    );
}