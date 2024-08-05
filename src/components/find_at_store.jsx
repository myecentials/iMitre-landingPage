import { easeInOut, motion } from 'framer-motion'
export default function Store_Section(){
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
        variants={Variants}
        initial="initial"
        whileInView="animate"
        transition="transition"
        viewport={{once:true}}
      
        
         className="md:-translate-x-8 lg:translate-x-0 xs:mt-[60px] md:mt-[10px] lg:mt-0 md:w-[744px] lg:w-full md:h-[593px] lg:h-[690px] md:px-[100px] md:py-[32px] md:gap-[20px] lg:px-[120px] lg:py-[55px] lg:gap-[60px] bg-homepage_bg flex xs:flex-col md:flex-row xs:items-center xs:justify-between">
            <img
            src={require('../asserts/Visuals_store.png')}
            alt='visuals'
            width={'540px'}
            height={'450px'}
            className='md:-translate-y-20 lg:translate-y-0 xs:w-[320px] lg:w-[540px] xs:h-[266.67px] lg:h-[450px]'
            />

            <section className='md:-translate-y-20 lg:translate-y-0 xs:w-[315px] md:w-[340px] lg:w-[570px] xs:[h-257px] md:h-[393px] lg:h-[371px] md:gap-[40px]'>

                <h2 className='xs:my-[20px] md:my-0 text-text_color poppins-bold xs:text-[28px] xs:text-center md:text-left md:text-[38px] lg:text-[48px] tracking-tighter md:w-[316px] lg:w-auto  md:h-[196px] lg:h-auto'>
                Get The iMitre App on the App Store or Play Store  Today!
                </h2>
                <p className='xs:text-center md:text-left md:mt-[40px] md:mb-[40px] lg: mb-0 lg:mt-[20px] text-text_color xs:text-[16px] md:text-[20px] lg:text-[19px]'>
                Download the iMitre App Now for Seamless Gas Station Management Anywhere, Anytime!
                </p>

                <section className='xs:mb-[60px] md:mb-0 xs:mt-[40px] md:mt-[0px] lg:mt-[40px] xs:w-[315px] xs:h-[41px] md:w- lg:w-[400px] lg:h-[52px] lg:gap-[40px] flex flex-row items-center justify-between'>

                <img
            src={require('../asserts/Google Play.png')}
            alt='Google'
            width={'180px'}
            height={'52px'}
            className='xs:w-[139px] lg:w-[180px] xs:h-[41px] lg:h-[52px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110'
            onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.imitre.org.gh&hl=en')}
            />

            <img
            src={require('../asserts/CTAs.png')}
            alt='CTAs'
            width={'180px'}
            height={'52px'}
            className='xs:w-[139px] lg:w-[180px] xs:h-[41px] lg:h-[52px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110'
            />

                </section>

            </section>

        </motion.div>
    )
}