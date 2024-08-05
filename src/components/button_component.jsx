const ButtonComponent =({text,color,bgcolor,has_img=false,has_border=false,borderDetail='',imported_class=''})=>{
    return(
        <button onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.imitre.org.gh&hl=en')}
         className={`${imported_class} bg-${bgcolor} rounded-[20px] w-[202px] h-[60px] flex flex-row items-center justify-center px-50 py-18 ${has_border && borderDetail}`}>
        {has_img &&
        <img
        src={require('../asserts/RocketLaunch.png')}
        width={'20px'}
        height={'20px'}
        className='object-contain object-center'
        alt='rocket'
        />
        }
        <p className={`text-center text-${color} poppins-semibold`}>{text}</p>
        </button>
    )
}
export default ButtonComponent
