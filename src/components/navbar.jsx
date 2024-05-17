import { animate, motion } from 'framer-motion'
import ButtonComponent from './button_component'
const Navbar=()=>{
const Variants={
    initial:{
        y:'-10vw'
    },
    animate:{
        y:'0vw',
        transition:{
            delay:0.2,
            duration:1
        }
    }
}
return(
    <motion.div 
    variants={Variants}
    initial='initial'
    transition='transition'
    animate='animate'
    className="xs:w-full lg:ml-4 lg:w-[91%] lg:h-[100px] flex flex-row items-center xs:justify-center md:justify-between xs:py-[20px] md:px-[48px] md:py-[20px] lg:pl-[20px] lg:pt-[72px] lg:pr-[20px] lg:pb-[72px]">

        <img
        src={require('../asserts/imitre.png')}
        alt='imitre'
        width={'137px'}
        height={'60px'}
        className='object-contain object-center lg:-translate-y-2 lg:translate-x-8 '
        />

        <section className='lg:w-[559px] h-[60px] gap-[50px] flex flex-row items-center justify-center'>

            <p onClick={()=>{
                document.getElementById('form').scrollIntoView({ behavior: 'smooth' })
            }} style={{fontWeight:'600px',lineHeight:'24px',textAlign:'center'}} className='xs:hidden lg:block text-imitregreen cursor-pointer poppins-medium lg:w-[66px] lg:h-[24px]  text-[16px] leading-[24px]'>
                Contact
            </p>


          

          <section className='flex flex-row items-center justify-center gap-[20px]'>

            {/* <button className='bg-bg_gray rounded-[20px] w-[202px] h-[60px] flex flex-row items-center justify-center px-50 py-18'>
                    <p className='text-center text-imitregreen poppins-semibold'>How it works</p>
            </button> */}

            <ButtonComponent
            text={'How it works'}
            color='imitregreen'
            bgcolor='bg_gray'
            imported_class='xs:hidden md:flex'

            />
            <ButtonComponent
            text={'Get Started'}
            color='white'
            bgcolor='imitregreen'
            has_img={true}
            imported_class='xs:hidden lg:flex'
            />

            {/* <button className='bg-imitregreen rounded-[20px] w-[202px] h-[60px] flex flex-row items-center justify-center px-50 py-18'>

                <img
                src={require('../asserts/RocketLaunch.png')}
                width={'20px'}
                height={'20px'}
                className='object-contain object-center'
                alt='rocket'
                />
                    <p className='text-center text-white poppins-semibold'>Get Started</p>
            </button> */}

          </section>



        </section>

    </motion.div>

)
}

export default Navbar