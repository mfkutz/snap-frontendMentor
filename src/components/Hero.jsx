import mobile from '../images/mobile.png'
import desktop from '../images/desktop.png'

import ClientAudioPhile from '../components/svg/ClientAudioPhile'
import ClientMeet from '../components/svg/ClientMeet'
import ClientMaker from '../components/svg/ClientMaker'
import ClientDatabiz from '../components/svg/ClientDatabiz'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center lg:flex-row">

            <div className="order-2 lg:order-1 text-center">
                <h1 className='text-[35px] pt-11 fontEB '>Make remote work</h1>
                <h3 className='pt-2 p-2 text-[17px] text-gray-500'> Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</h3>
                <button className='text-white bg-[#151515] py-[11px] px-6 rounded-xl mt-3 text-[16px] mb-11'>Learn more</button>

                <div className='flex items-center justify-evenly '>
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

            <div className='flex justify-center order-1 lg:order-2'>
                <img className='' src={mobile} alt="" />
                {/* <img className='' src={desktop} alt="" /> */}
            </div>

        </div>
    )
}

export default Hero
