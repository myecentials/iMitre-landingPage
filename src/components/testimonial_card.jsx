import { animate, motion } from "framer-motion";
const Testimoniacard=({testimonial_picture,item,classNames,name,title,testimonial,stars=1})=>{

    const star_variants={
        initial:{
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                delay:0.09,
                ease:'easeInOut',
                staggerChildren:2*item,
                duration:0.5*item
            }
        }
    }
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
         className={`bg-white flex  xs:flex-col md:flex-row lg:flex-col items-center md:justify-between lg:justify-start xs:w-[315px]  xs:h-[386.08px] md:w-[680px]  md:h-[223.08px] lg:w-[370px] lg:h-[386.08px]  xs:py-[40px] xs:px-[30px]  border border-bg_gray shadow-sm rounded-[20px] ${classNames}`}>



        <section className="md:w-[280px] lg:w-auto md:h-[127px] md:gap-[16px] lg:gap-0 lg:h-auto flex flex-col justify-center items-center xs:mb-[30px] md:mb-0">
        <img
        src={testimonial_picture}
        width={'56px'}
        height={'56px'}
        alt='testimonial_picture'
        className="mt-[10px]"
        />


        <h3 className="text-testimonial_position_name poppins-bold text-center md:text-[21px] xs:mt-[16px] md:mt-0 lg:mt-[16px] xs:mb-[6px] md:mb-0 ">{name}</h3>

        <p className="text-testimonial_position_title poppins-light text-center md:text-[14px]">
            {title}
        </p>
        </section>

        {/* 
        width: Fixed (310px)px;
height: Hug (143.08px)px;
gap: 24px;
opacity: 0px;


        */}

        <section className="md:w-[310px] lg:w-auto md:h-[143.08px] lg:h-auto flex flex-col justify-center items-center">


        <p className="lg:text-[16px] lg:mt-[6px] xs:mb-[30px] md:mb-[24px] lg:mb-[30px] lg:w-[310px] lg:h-[96px] lg:gap-[24px] text-text_color text-center">
            {testimonial}
        </p>


        <section className="flex flex-row items-center justify-center lg:w-[310px] lg:h-[23.08px] lg:gap-[5px] lg:pt-[30px] lg:pb-[40px] lg:px-[40px]">

            {Array(stars).fill(1)?.map((item,index)=>(
                <motion.img
                variants={star_variants}
                initial='initial'
                whileInView='animate'
                transition='transition'
                viewport={{once:false}}
                custom={index+1}
                src={require('../asserts/gold_star.png')}
                alt='star'
                width={'24px'}
                height={'23.08px'}
                className=""
                />
            ))}

            {5 - stars >0 && Array(5 - stars).fill(1)?.map((item,index)=>(
                <motion.img
                variants={star_variants}
                initial='initial'
                whileInView='animate'
                transition='transition'
                viewport={{once:false}}
                // custom={index+1}
                src={require('../asserts/open_star.png')}
                alt='star'
                width={'24px'}
                height={'23.08px'}
                className=""
                />
            ))}

        </section>

        </section>







        </motion.div>
    );
}
export default Testimoniacard