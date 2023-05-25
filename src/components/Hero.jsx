import mobile from '../images/mobile.png'
import desktop from '../images/desktop.png'

import ClientAudioPhile from '../components/svg/ClientAudioPhile'
import ClientMeet from '../components/svg/ClientMeet'
import ClientMaker from '../components/svg/ClientMaker'
import ClientDatabiz from '../components/svg/ClientDatabiz'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center lg:flex-row lg:pt-10 lg:px-[130px]">

            {/* ****************HERO 1 *************************/}
            <div className="order-2 text-center | lg:order-1 lg:text-left lg:p-3 lg:pl-5 ">
                <h1 className='text-[35px] pt-11 fontEB | lg:text-[80px] lg:leading-[80px] lg:pt-16 |'>Make remote work</h1>
                <h3 className='pt-2 p-2 text-[17px] text-gray-500 | lg:p-0 lg:pt-10 lg:pr-[230px]'> Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</h3>
                <button className='text-white bg-[#151515] py-[11px] px-6 rounded-xl mt-3 text-[16px] lg:mt-12 lg:py-[16px] lg:px-[34px]'>Learn more</button>

                <div className='flex items-center mt-11 justify-evenly lg:justify-start lg:gap-10 lg:mt-28'>
                    <div className=''>
                        <ClientDatabiz />
                    </div>
                    <div>
                        <ClientAudioPhile />
                    </div>
                    <div>
                        <ClientMeet />
                    </div>
                    <div className='iconWrapper'>
                        <ClientMaker />
                    </div>
                </div>
            </div>

            {/* ****************HERO 2 *************************/}
            <div className='flex justify-center order-1 lg:order-2 lg:max-w-[460px] lg:min-w-[400px] lg:min-h-full'>
                <img className='lg:hidden' src={mobile} alt="" />
                <img className=' hidden lg:block object-contain' src={desktop} alt="" />
            </div>

        </div>
    )
}

export default Hero
