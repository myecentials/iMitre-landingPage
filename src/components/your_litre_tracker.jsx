import ButtonComponent from './button_component'

const Litre_Tracker=()=>{
    return(
        <div className="w-full lg:h-[660px] flex xs:flex-col lg:flex-row xs:items-center lg:items-start xs:justify-center lg:justify-between xs:mt-[60px] md:mt-0 md:py-[100px] md:px-[32px] lg:pl-[120px] lg:pt-[55px] lg:pr-[120px] lg:pb-[55px] gap-0">

            <section className="lg:-translate-x-[8%] lg:pt-[94.5px] lg:w-[1/3] flex flex-row items-center justify-start flex-wrap">

                <h2 className="md:translate-x-[40px] lg:translate-x-0 text-text_color  capitalize poppins-bold xs:text-[38px] xs:w-[50%] xs:translate-x-[50%] md:w-auto md:text-[67px] xs:text-center lg:text-left xs:mb-[20px] md:mb-0">Your Litre Tracker!</h2>

            <p className="md:translate-x-[40px] lg:translate-x-0 tracking-[0.94px] md:w-[90%] lg:w-[98%] text-text_color text-[21px] leading-[31.5px] xs:text-center lg:text-left xs:mb-[30px] md:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua!</p>

            <section className='xs:mt-[30px] xs:mb-[40px] lg:mt-[40px] lg:mb-[0px] lg:w-full flex flex-row-reverse items-center justify-end xs:translate-x-[41%] md:translate-x-[110%] lg:translate-x-0'>
            <ButtonComponent
            text={'How it works'}
            color='imitregreen'
            bgcolor='white'
            has_border={true}
            borderDetail='border border-imitregreen'
            imported_class='xs:hidden lg:block'
            />
            <p className='mx-[18px]'></p>
            <ButtonComponent
            text={'Get Started'}
            color='white'
            bgcolor='imitregreen'
            has_img={true}
            />

            </section>

            {/* //styleName: Body L;
font-family: Mulish;
font-size: 21px;
font-weight: 400;
line-height: 31.5px;
text-align: left; */}

            </section>

            <section className="lg:w-[123%] xs:mb-[60px] md:mb-0">

                <img
                src={require('../asserts/imitre_report.png')}
                alt='imitre_report'
                width={'450px'}
                height={'450px'}
                className='xs:hidden lg:block object-cover'
                />

<img
                src={require('../asserts/imitre_report.png')}
                alt='imitre_report'
                width={'320px'}
                height={'320px'}
                className='xs:block lg:hidden object-cover'
                />
                
            </section>


        </div>
    )
}
export default Litre_Tracker