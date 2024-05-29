import { motion } from 'framer-motion';
const Sponsors=()=>{
    const variant={
        initial:{
            x:'2vw'
        },
        animate:{
            x:'-2vw',
            transition:{
                x:{
                    repeat: Infinity,
                    duration:1,
                    repeatType:'reverse',
                    delay: 0.5 
                }
            }
        }
    }
return(
    <div className="w-full flex flex-row items-center justify-between lg:pl-[60px] lg:pt-[55px] lg:pr-[60px] lg:pb-[55px] lg:gap-[10px] lg:h-[270.32px]">

        <div className="overflow-hidden xs:grid xs:grid-cols-3 md:flex md:flex-row items-center justify-between w-full border-t border-b-2 border-sponsor_border h-[150.32px]">
            

            <motion.img
            variants={variant}
            animate='animate'
            initial='initial'
            transition='transition'
            src={require('../asserts/sponsors/airbnb.png')}
            alt='sponsors'
            height={'27.96px'}
            width={'90px'}
            className='xs:w-[60.9px] md:w-[70px] lg:w-[90px] xs:h-[21.76px] md:h-[21.75px] lg:h-[27.96px]'
            />
            <motion.img
            variants={variant}
            animate='animate'
            initial='initial'
            transition='transition'
            src={require('../asserts/sponsors/google.png')}
            alt='sponsors'
            height={'30.32px'}
            width={'90px'}
            className='xs:w-[70px]  lg:w-[90px] xs:h-[23.58px] lg:h-[30.32px]'
            />
            <motion.img
            variants={variant}
            animate='animate'
            initial='initial'
            transition='transition'
            src={require('../asserts/sponsors/amazon.png')}
            alt='sponsors'
            height={'27.96px'}
            width={'90px'}
            className='xs:w-[70px] lg:w-[90px] xs:h-[21.75px] lg:h-[27.96px]'
            />
             <motion.img
            variants={variant}
            animate='animate'
            initial='initial'
            transition='transition'
            src={require('../asserts/sponsors/microsoft.png')}
            alt='sponsors'
            height={'19.18px'}
            width={'90px'}
            className='xs:w-[70px] lg:w-[90px] xs:h-[14.92px] lg:h-[19.18px]'

            />
            <motion.img
            variants={variant}
            animate='animate'
            initial='initial'
            transition='transition'
            src={require('../asserts/sponsors/fedex.png')}
            alt='sponsors'
            height={'27px'}
            width={'90px'}
            className='xs:w-[70px] lg:w-[90px] xs:h-[21px] lg:h-[27px]'

            />
            <motion.img
            variants={variant}
            animate='animate'
            initial='initial'
            transition='transition'
            src={require('../asserts/sponsors/hubspot.png')}
            alt='sponsors'
            height={'25.71px'}
            width={'90px'}
            className='xs:w-[70px] lg:w-[90px] xs:h-[20px] lg:h-[25.71px]'

            />
        </div>



    </div>
);
}

export default Sponsors