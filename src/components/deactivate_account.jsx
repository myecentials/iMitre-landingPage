import React, { useEffect, useRef, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import Navbar from './navbar'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Deactivateaccount() {
    const [loading,setLoading] = useState(false)
    const email = useRef("");
    const password = useRef("");
    const error = useRef(false);
    useEffect(()=>{
        error.current=false
    },[])

    const delete_account=async(e)=>{
        e.preventDefault()
        setLoading(true)
        setTimeout(async() => {
            await axios.post('https://imitre-backend-cn8ls.ondigitalocean.app/deactivateaccount/',{
                "email":email.current.value,
                "password":password.current.value,
            }).then((response)=>{
                error.current=false
                Swal.fire({
                    icon: 'success',
                    title:response.data.toString().split('.')[0],
                    text:response.data.toString().split('.')[1],
                    showCancelButton:false,
                    showCloseButton:false,
                    showConfirmButton:false,
                    timer:5000,
                    timerProgressBar:true
                })
            }).catch((e)=>{
                // console.log(e.response.data)
                error.current=true
                Swal.fire({
                    icon:e.response.data==='Account already deactivated.'?'warning':'error',
                    title:e.response.data.toString().split('.')[0],
                    text:e.response.data.toString().split('.')[1],
                    showCancelButton:false,
                    showCloseButton:false,
                    showConfirmButton:false,
                    timer:5000,
                    timerProgressBar:true
                }) 
            }).finally(()=>{
                setLoading(false)
                email.current.value=''
                password.current.value=''

                if (error.current===false){
                setTimeout(() => {

                        window.location.pathname='/'
                    }, 5000);
                }
            })
        }, 1000);
    }
  return (
    <div className='w-full h-screen bg-homepage_bg flex flex-col justify-center items-center'>
        
    <form onSubmit={delete_account} className='xs:w-[80%] md:w-[45%] lg:w-[30%] mx-auto bg-white xs:rounded-[20px] shadow-xl px-6 py-4 text-center'>

    <img
    src={require('../asserts/imitre.png')}
    alt='imitre'
    width={'137px'}
    height={'60px'}
    className='object-contain object-center lg:-translate-y-2 xs:mt-2 lg:-translate-x-2 mx-auto xs:mb-10'
    />

    
    <div className='xs:mb-[20px] flex flex-row items-center justify-start xs:w-auto md:w-auto md:h-auto xs:h-auto md:gap-[12px] rounded-[20px] border border-sponsor_border xs:py-[8px] xs:px-[20px]'>

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


<div className='xs:mb-[20px] flex flex-row items-center justify-start xs:w-auto md:w-auto md:h-auto xs:h-auto md:gap-[12px] rounded-[20px] border border-sponsor_border xs:py-[8px] xs:px-[20px]'>

<img
src={require('../asserts/emailinput.png')}
alt='user'
width="29px"
height="20px"
/>
<input
className=' outline-none w-full'
 placeholder='Password'
 ref={password}
 required
 type="password"

 />
</div>

                {loading?
                    <PulseLoader color='red' size={32} className="xs:mt-[20px] lg:mt-[0px] lg:w-[320px] md:w-[160px] xs:w-[160px] md:mb-[40px] translate-x-3"/>
                    :
                    <button className='poppins-bold xs:w-auto xs:h-auto xs:py-[16px] xs:px-[50px] rounded-[20px] bg-red-500 text-white hover:scale-110 transition-all duration-300 ease-in-out md:mb-[40px] xs:mb-10'>
                        Delete Account
                    </button>}

                    


      
    </form>
    </div>
  )
}
