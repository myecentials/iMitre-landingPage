import Feature_Card from "./feature_card"

const Features=()=>{
    return(
        <div className="xs:pb-[50px] md:pb-[100px] lg:pb-[120px] xs:px-[30px] lg:px-[55px] lg:w-full md:px-[50px] xs:pt-[60px] md:pt-[100px] lg:pt-[120px]">

            <div className=" lg:w-full flex flex-col items-center justify-center">

                <h2 className="text-center poppins-bold  xs:text-[38px]">Features</h2>
                <p className="lg:pt-[20px] text-center xs:w-[90%] w-[100%] text-text_color ">We make it easy to track the transactions in your gas station, these are a few among many features we provide.</p>

                {/* card container */}
                <section className="xs:mt-[30px] md:mt-[40px] lg:pt-[60px] w-full flex xs:flex-col lg:flex-row items-center justify-center">

                    <Feature_Card
                    classnames='lg:mr-[30px]'
                    feature_image={require('../asserts/features/digital_work.png')}
                    title={'Digitized Work Processes'}
                    text_info={'Optimize Efficiency: Streamline Operations with Our Innovative Digital Solutions for Enhanced Productivity.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={1}
                    />
                    <Feature_Card
                    classnames='lg:mr-[30px]'
                    feature_image={require('../asserts/features/daily_account.png')}
                    title={'Daily Account Reconciliation'}
                    text_info={'Stay Financially On Track: Simplifying Daily Account Reconciliation for Your Gas Station Business.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={3}
                    />
                    <Feature_Card
                    feature_image={require('../asserts/features/detailed_report.png')}
                    title={'Detailed Reports'}
                    text_info={'In-Depth Insights: Gain a Comprehensive Understanding of Your Gas Station Operations with Detailed Reports.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={4}
                    />
                </section>
            </div>

        </div>
    )
}
export default Features