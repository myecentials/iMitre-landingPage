const Plancard=({class_assigned,plan_type,price,duration,is_enterprise=false,info_after_trial_1,info_after_trial_2,isMonthly,plan_content})=>{
    return(
        <div className={`${class_assigned} cursor-pointer xs:hover:rotate-2 lg:hover:rotate-6 transition-all duration-300 ease-in-out shadow-sm `}>

            <p className="text-[21px] text-poppins-semibold xs:mb-6 md:mb-0">{plan_type}</p>
      

            <div className={`w-auto flex flex-row items-center justify-start ${is_enterprise?'text-white':''}`}>

            <p className={`${is_enterprise?'text-white':''} text-text_color poppins-bold xs:text-[32px] md:text-[50px] xs:mb-6 md:mb-0`}>{price}</p>
            <p className={`${is_enterprise?'text-white':''} text-text_color text-[16px] poppins-bold`}>/{duration}</p>
            </div>

            <div className={`${!isMonthly?'hidden':''} xs:mb-[24px] md:mb-[0px] lg:mb-[24px] lg:mt-[6px] text-text_color flex flex-row items-center justify-start`}>
                <p className={`${is_enterprise?'text-white':''} text-[16px] `}>
                {info_after_trial_1}
                </p>
                <p className={`${is_enterprise?'text-white':''} text-[16px] xs:mx-[1.7px] `}>
                    - Then
                </p>
                <p className={`${is_enterprise?'text-white':''} text-[16px] poppins-bold  `}>
                {info_after_trial_2}
                </p>
                <p className={`${is_enterprise?'text-white':''} text-[16px]`}>{isMonthly?'/month':'/year'}</p>
            </div>

            {
                Array.isArray(plan_content) && plan_content?.map((item,index)=>(
                    <div className={`w-auto flex flex-row items-center justify-start ${index >0 ?'xs:mt-[16px]':''}`}>
                        <img
                        src={is_enterprise?require('../asserts/white_tick.png') :require('../asserts/tick.png')}
                        alt='tick'
                        className='w-[13.13px] h-[8.75px] mr-[15.2px]'
                        />

                        <p className='text-[16px] poppins-regular'>{item}</p>

                    </div>
                ))
            }


            <button className={`${is_enterprise?'bg-white':'bg-bg_gray'} xs:mt-[30px]  lg:mt-[30px] lg:gap-[8px] rounded-[20px] md:mb-[40px] lg:mb-0 lg:py-[16px] lg:px-[50px] xs:w-full lg:w-[310px] h-[60px] flex flex-row items-center justify-center`}>

                <p className='text-learn_more text-[16px]'>Get Started</p>

                {is_enterprise &&<img
                src={require('../asserts/ArrowRight.png')}
                width={'20px'}
                height={'20px'}
                alt='arrow-right'
                className='xs:ml-2 xs:w-[25px] xs:h-[25px] md:w-auto md:h-auto lg:ml-0 xs:translate-y-[1.9px] md:translate-y-[2.9px] lg:translate-y-0 '
                />}


            </button>

        </div>
    )
}
export default Plancard