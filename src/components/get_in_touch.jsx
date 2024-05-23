import { motion } from 'framer-motion'
import { PulseLoader } from 'react-spinners'
import {useRef,useState} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
export default function Getintouch(){
    const full_name = useRef('')
    const email = useRef('')
    const message=useRef('')
    const [loading,setLoading] = useState(false)
    const Variants = {
        initial:{
            y:'40vh',
            opacity:0
        },
        animate:{
            y:'0vh',
            opacity:1,
            transition:{
                delay:0.6,
            }
        }
    }
    const submitEmail=(e)=>{
        e.preventDefault()
        setLoading(true)
        setTimeout(async() => {
            const {REACT_APP_BASE_URL} = process.env
            var url =''
            if(window.location.hostname ==='imitre.com'){
                url='https://imitre-backend-cn8ls.ondigitalocean.app'
            }else{
                url='http://127.0.0.1:8000'
            }
            await axios.post(`${url}/Landing_page/`,{
                user_name:full_name?.current.value,
                user_email:email?.current.value,
                user_message:message?.current.value,
            }).then((response)=>{

                Swal.fire({
                    'icon':'success',
                    'title':'details received',
                    'text':"We'll contact you shortly",
                    timerProgressBar:true,
                    timer:1000,
                    showConfirmButton:false,
                    showCancelButton:false
                })
            }).catch((e)=>{
                console.log(e)
                Swal.fire({
                    'icon':'error',
                    'title':'An errorr occurred',
                    'text':"Please try again later",
                    timerProgressBar:true,
                    timer:1000,
                    showConfirmButton:false,
                    showCancelButton:false
                })
            }).finally(()=>{

                full_name.current.value=''
                email.current.value=''
                message.current.value=''
            setLoading(false)
            })

        }, 1000);
    }

    return(
        <motion.div 
        variants={Variants}
        initial="initial"
        whileInView="animate"
        transition="transition"
        viewport={{once:true}}
        className="md:mx-[18px] bg-homepage_bg xs:py-[50px] md:px-[32px] ">

            <div className="xs:bg-white border border-bg_gray xs:p-[40px] lg:p-[60px] xs:h-[898px] md:h-[855px] lg:h-[634px] md:w-auto xs:rounded-[20px] xs:mx-[30px] md:mx-0">

                <h2 className="poppins-bold xs:text-[38px] text-text_color xs:mb-[10px]">
                Let's get in touch!
                </h2>
                <p className="text-text_color text-[16px] xs:w-[235px] md:w-[455px] lg:w-[1050px] md:mb-[40px] lg:mb-[60px]">
                Got questions about iMitre? Our team is here to help. Contact us for quick and friendly support.
                </p>

                <div className="xs:mt-[20px] md:mt-0 transition-all duration-300 ease-in-out w-full flex xs:flex-col lg:flex-row  lg:items-center lg:justify-center">

                <div className="w-full lg:h-[371px] flex flex-col items-start justify-between lg:-translate-y-[30px] transition-all duration-300 ease-in-out">

                <div className="w-full">

                    <a href='tel:0268977129' className="xs:mb-[20px] flex flex-row items-start  justify-start">
                        
                        <img
                        src={require('../asserts/PhoneCall.png')}
                        alt='PhoneCall'
                        className='w-[24px] h-[24px] mr-[20px]'
                        />
                        <p className='text-text_color text-[16px]'>+233 268 XX XX</p>


                    </a>
                    
                    <a href='mailto:support@imitre.com' className="md:mb-[20px] flex flex-row items-start justify-start">
                        
                        <img
                        src={require('../asserts/EnvelopeSimple.png')}
                        alt='Mail'
                        className='w-[24px] h-[24px] mr-[20px]'
                        />
                        <p className='text-text_color text-[16px]'>support@imitre.com</p>


                    </a>

                </div>

                <div className='xs:mt-[40px] lg:mt-0'>
                    <h2 className='text-[21px] text-text_color poppins-semibold'>Connect with us</h2>

                    <div className='xs:mt-[20px] xs:w-[128px] md:h-[32px] flex flex-row items-center justify-between gap-[16px]'>
      
                            <img
                        src={require('../asserts/ig.png')}
                        alt='ig'
                        className='w-[32px] h-[32px]  cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'
                        />


                        <img
                        src={require('../asserts/linkedin.png')}
                        alt='linkedin'
                        className='w-[32px] h-[32px] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out '
                        />


                        <img
                        src={require('../asserts/x.png')}
                        alt='x'
                        className='w-[32px] h-[32px] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out '
                        />

                    </div>

                </div>

                </div>


                <form id="form" onSubmit={submitEmail} className='xs:my-[40px] lg:my-[0px]  md:h-auto'>

                    <div className='xs:mb-[10px] flex flex-row items-center justify-start xs:w-[235px] md:w-[600px] xs:h-[60px] md:gap-[12px] rounded-[20px] border border-sponsor_border xs:py-[8px] xs:px-[20px]'>

                    <img
                    src={require('../asserts/user.png')}
                    alt='user'
                    width="29px"
                    height="20px"
                    />
                    <input
                    className=' outline-none w-full'
                     placeholder='Fullname'
                     ref={full_name}
                     required
                     />
                    </div>

                    <div className='xs:mb-[10px] flex flex-row items-center justify-start xs:w-[235px] md:w-[600px] md:h-[60px] xs:h-[60px] md:gap-[12px] rounded-[20px] border border-sponsor_border xs:py-[8px] xs:px-[20px]'>

                    <img
                    src={require('../asserts/emailinput.png')}
                    alt='user'
                    width="29px"
                    height="20px"
                    />
                    <input
                    className=' outline-none w-full'
                     placeholder='Email'
                     ref={email}
                     required
                     type="email"

                     />
                    </div>

                    {/* width: 600px;
height: 151px;
padding: 19.5px 513px 107.5px 20px;
gap: 12px;
border-radius: 20px 0px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px; */}

                    <textarea
                    ref={message}
                    className='xs:w-[235px] md:w-[600px] xs:mb-[20px]  xs:mt-[10px] md:h-[151px] xs:rounded-[20px] xs:gap-[12px] border border-sponsor_border xs:p-[20px] outline-none resize-none' 
                    placeholder='Message'
                    required
                    />



                    {loading?
                    <PulseLoader color='#009379' size={32} className="xs:mt-[20px] lg:mt-[0px] lg:w-[320px] md:w-[160px] xs:w-[160px] md:mb-[40px]"/>
                    :
                    <button className='poppins-bold xs:w-[159px] xs:h-[60px] xs:py-[16px] xs:px-[50px] rounded-[20px] bg-learn_more text-white hover:scale-110 transition-all duration-300 ease-in-out md:mb-[40px]'>
                        Submit
                    </button>}

                    



                </form>
                </div>


            </div>

        </motion.div>
    )
}