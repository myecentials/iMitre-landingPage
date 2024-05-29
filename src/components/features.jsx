import Feature_Card from "./feature_card"

const Features=()=>{
    return(
        <div className="xs:pb-[50px] md:pb-[100px] lg:pb-[120px] xs:px-[30px] lg:px-[55px] lg:w-full md:px-[50px] xs:pt-[60px] md:pt-[100px] lg:pt-[120px]">

            <div className=" lg:w-full flex flex-col items-center justify-center">

                <h2 className="text-center poppins-bold  xs:text-[38px]">Features</h2>
                <p className="lg:pt-[20px] text-center xs:w-[90%] w-[100%] text-text_color ">We make it easy to track the transactions in your gas station, these are a few among many features we provide.</p>

                {/* card container */}
                <section className="xs:mt-[30px] md:mt-[40px] lg:pt-[60px] w-full lg:flex-wrap flex xs:flex-col lg:flex-row items-center justify-center">

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


                    <Feature_Card
                    classnames='lg:mr-[30px] lg:mt-[60px]'
                    feature_image={require('../asserts/features/hrm.png')}
                    title={'HRM'}
                    text_info={'Enhance Employee Administration with Comprehensive Tools for Payroll, Attendance Tracking, Shift Scheduling, and Performance Management, Simplifying Operations for Your Gas Station Business.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={1}
                    />
                    <Feature_Card
                    classnames='lg:mr-[30px] lg:mt-[60px]'
                    feature_image={require('../asserts/features/exp_management.png')}
                    title={'Expense Management'}
                    text_info={'Our Expense Management System Ensures Accurate Tracking and Analysis of Expenditures, Empowering Your Gas Station Business for Financial Success.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={3}
                    />
                    <Feature_Card
                    classnames='lg:mt-[60px]'
                    feature_image={require('../asserts/features/multiple_branches.png')}
                    title={'Multiple Branches'}
                    text_info={'Seamlessly Coordinate and Monitor Operations Across Multiple Gas Station Locations with Our Comprehensive and User-Friendly Platform.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={4}
                    />

<Feature_Card
                    classnames='lg:mr-[30px] lg:mt-[60px]'
                    feature_image={require('../asserts/features/stock_tracking.png')}
                    title={'Stock Tracking'}
                    text_info={'Our Stock Tracking System Provides Real-Time Updates and Analysis, Ensuring Your Gas Station Always Has the Right Inventory Levels for Smooth Operations.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={1}
                    />
                    <Feature_Card
                    classnames='lg:mr-[30px] lg:mt-[60px]'
                    feature_image={require('../asserts/features/activity_log.png')}
                    title={'Activity Log'}
                    text_info={' Keep a Detailed Record of All Activities, Shift Changes, and Transactions for Enhanced Accountability and Efficiency in Your Gas Station Management.'}
                    learn_more_text='learn more'
                    learn_more_img={require('../asserts/features/arrow_right.png')}
                    item={3}
                    />
                    <Feature_Card
                    classnames='lg:mt-[60px]'
                    feature_image={require('../asserts/features/manage_creditors.png')}
                    title={'Manage Creditors'}
                    text_info={'Simplify Tracking and Payments for Creditors, Ensuring Smooth Transactions and Maintaining Strong Relationships for Your Gas Station Business.'}
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