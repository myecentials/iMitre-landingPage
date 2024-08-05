import { motion } from "framer-motion";
const Feature_Card=({classnames='',feature_image='',title='',text_info,learn_more_text,learn_more_img,item})=>{
    const location_transition={
        initial:{
            x:'-8vw',
            y:'-10vh',
        },
        animate:{
            x:'0vw',
            y:'0vh',
            transition:{
                delay:0.09,
                ease:'easeInOut',
                staggerChildren:2*item,
                duration:0.5*item
            }
        },
    }
    return(

    <motion.div
    variants={location_transition} initial='initial' whileInView='animate' transition='transition' viewport={{once:true}}
     className={`${classnames} xs:mb-[30px] md:mb-[20px] lg:mb-0 bg-white xs:w-[315px] md:w-[680px] lg:w-[370px] xs:h-[444px] md:h-[360px] lg:h-[414px] px-[40px] py-[30px] rounded-[20px] border border-bg_gray flex flex-col xs:justify-start md:justify-center items-center`}>

        <img
        src={feature_image}
        width={'82px'}
        height={'82px'}
        alt='feature_card'
        className="pl-[20px] gap-[10px] rounded-[20px] md:mb-[30px] lg:mb-0"
        />

        <h2 className="xs:mt-[30px] md:mt-0 xs:mb-[24px] md:mb-0 text-text_color poppins-semibold text-[28px] text-center">{title}</h2>
        <p className="lg:pt-[24px] text-center text-text_color text-[16px]">
            {text_info}
        </p>


        <div onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.imitre.org.gh&hl=en')} className="xs:mt-[33px] cursor-pointer lg:pt-[3px] lg:w-[50%] flex flex-row items-center justify-center">
        <p onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.imitre.org.gh&hl=en')} className="text-learn_more poppins-semibold text-[16px] text-center">{learn_more_text}</p>
        <img
        src={learn_more_img}
        alt='learn_more_img'
        width={'20px'}
        height={'20px'}
        className="xs:ml-[8px]"
        />

        </div>



    </motion.div>
);
}

export default Feature_Card