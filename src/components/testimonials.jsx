import { motion } from "framer-motion";
import Testimoniacard from "./testimonial_card";

const Testimonials=()=>{
    const Variants={
        initial:{
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                delay:0.8,
                ease:"easeInOut",

            }
        }
    }
return(
    <motion.div
    variants={Variants} initial='initial' whileInView='animate' transition='transition' viewport={{once:true}}
     className="lg:w-full lg:h-[776.08px] lg:px-[120px] lg:py-[55px] lg:gap-[60px] md:py-[100px] md:px-[32px] ">

        <h2 className="xs:w-[315px] xs:h-[147px] md:w-[680px] md:h-[96px] lg:w-full lg:h-auto poppins-bold xs:text-[38px] lg:text-[39px] text-center xs:mb-[20px] mx-auto">
        Real Stories from Satisfied Customers
        </h2>



        <p className="xs:w-[315px] xs:h-[42px] xs:mx-auto md:w-auto md:h-auto text-center text-text_color text-[16px] xs:mb-[30px]">
        See how iMitre is making an impact.
        </p>

        <div className="lg:mt-[60px] xs:w-full flex xs:flex-col lg:flex-row items-center xs:justify-between">

        <Testimoniacard
        testimonial_picture={require('../asserts/testimonials/sarah.png')}
        item={1}
        name={'Sarah K.'}
        title={'CEO @Rain Oil'}
        testimonial={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`}
        stars={5}
        classNames={'lg:mr-[20px] xs:mb-[30px] md:mb-[20px] lg:mb-[0px]'}
        />
        <Testimoniacard
        testimonial_picture={require('../asserts/testimonials/micheal_l.png')}
        item={3}
        name={'Michael L.'}
        title={'Manager @Grain Energies'}
        testimonial={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`}
        stars={4}
        classNames={'lg:mr-[20px] xs:mb-[30px] md:mb-[20px] lg:mb-[0px]'}
        />
        <Testimoniacard
        testimonial_picture={require('../asserts/testimonials/lauren.png')}
        item={4}
        name={'Lauren M.'}
        title={'Founder @Ango Power'}
        testimonial={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`}
        stars={5}
        classNames={'xs:mb-[60px] md:mb-0'}
        />
        </div>


    </motion.div>
);
}

export default Testimonials