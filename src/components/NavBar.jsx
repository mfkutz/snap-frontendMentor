import Logo from "./svg/Logo"
import Menu from "./svg/Menu"
import ArrowDown from "./svg/ArrowDown"
import ArrowUp from "./svg/ArrowUp"
import CloseMenu from "./svg/CloseMenu"
import Todo from "./svg/Todo"
import Calendar from "./svg/Calendar"
import Reminders from "./svg/Reminders"
import Planning from "./svg/Planning"
import { useState } from "react"



const NavBar = () => {
    const [menuBar, setMenuBar] = useState(false)
    const [menuOne, setMenuOne] = useState(false)
    const [menuTwo, setMenuTwo] = useState(false)

    const menuControl = () => {
        setMenuBar(!menuBar);
        setMenuOne(false);
        setMenuTwo(false);
    };

    const menuOneControl = () => {
        setMenuOne(!menuOne);
        setMenuTwo(false);
    };

    const menuTwoControl = () => {
        setMenuTwo(!menuTwo);
        setMenuOne(false);
    };

    return (
        <div className="flex p-4 justify-between relative | lg:py-7 lg:px-10 items-center">
            <div><Logo /></div>

            <div className="desktopScreen relative flex min-w-[90%]  items-center text-[14px] text-gray-500">

                <ul className="flex min-w-[60%] gap-8 pl-4">
                    {/************** Menu One ****************/}
                    <button onClick={menuOneControl} className="flex items-center hover:text-black">Features<span className="ml-2">{menuOne ? <ArrowUp /> : <ArrowDown />}</span></button>
                    <div className={`${menuOne ? '' : "disabled"} absolute top-10 -left-14 p-5 px-6 flex flex-col rounded-lg shadow-xl bg-white`}>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-[15px] cursor-pointer hover:text-black"><Todo />Todo List</li>
                            <li className="flex gap-[13px] cursor-pointer hover:text-black"><Calendar />Calendar</li>
                            <li className="flex gap-[17px] cursor-pointer hover:text-black"><Reminders />Reminders</li>
                            <li className="flex gap-[14px] cursor-pointer hover:text-black"><Planning />Planning</li>
                        </ul>
                    </div>
                    {/* *************Menu Two************** */}
                    <button onClick={menuTwoControl} className="flex items-center hover:text-black">Company<span className="ml-2">{menuTwo ? <ArrowUp /> : <ArrowDown />}</span></button>
                    <div className={`${menuTwo ? '' : "disabled"} absolute top-10 left-[130px] p-5 px-6 flex flex-col rounded-lg shadow-xl bg-white`}>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-[15px] cursor-pointer hover:text-black">History</li>
                            <li className="flex gap-[13px] cursor-pointer hover:text-black">Our Team</li>
                            <li className="flex gap-[17px] cursor-pointer hover:text-black">Blog</li>
                        </ul>
                    </div>

                    <li className="hover:text-black cursor-pointer">Careers</li>
                    <li className="hover:text-black cursor-pointer">About</li>
                </ul>

                <ul className="flex items-center min-w-[40%] justify-end gap-9 ">
                    <li className="hover:text-black cursor-pointer">Login</li>
                    <li>
                        <button className="flex border-gray-400 border-[2px] py-[8px] px-4 rounded-[12px] hover:border-black hover:text-black">Register</button>
                    </li>
                </ul>


            </div>
            <div className="lg:hidden z-50 ">

                {/* ***********MENU MOBILE **************/}
                <button onClick={menuControl} className={menuBar ? "disabled" : ''}>
                    <Menu />
                </button>

                <div className={`${menuBar ? '' : "disabled"}`}>

                    <div className="bg-[#fafafa] absolute top-0 right-0 p-4 min-w-[230px] min-h-screen special-background-menu ">
                        <div onClick={menuControl} className="flex justify-end">
                            <CloseMenu />
                        </div>
                        <div className="flex flex-col pt-7 text-[16px] text-gray-500 ">

                            <button onClick={menuOneControl} className="flex items-center hover:text-black mb-4">Features<span className="ml-2">{menuOne ? <ArrowUp /> : <ArrowDown />}</span></button>
                            <div className={`${menuOne ? '' : "disabled"} p-1 pb-6 px-6 flex flex-col `}>
                                <ul className="flex flex-col gap-4">
                                    <li className="flex gap-[15px] cursor-pointer hover:text-black"><Todo />Todo List</li>
                                    <li className="flex gap-[13px] cursor-pointer hover:text-black"><Calendar />Calendar</li>
                                    <li className="flex gap-[17px] cursor-pointer hover:text-black"><Reminders />Reminders</li>
                                    <li className="flex gap-[14px] cursor-pointer hover:text-black"><Planning />Planning</li>
                                </ul>
                            </div>

                            <ul className="flex flex-col gap-4 text-[16px] text-gray-500">

                                <button onClick={menuTwoControl} className="flex items-center hover:text-black">Company<span className="ml-2">{menuTwo ? <ArrowUp /> : <ArrowDown />}</span></button>
                                <div className={`${menuTwo ? '' : "disabled"} top-10 left-[130px] p-1 px-6 flex flex-col`}>
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex gap-[15px] cursor-pointer hover:text-black">History</li>
                                        <li className="flex gap-[13px] cursor-pointer hover:text-black">Our Team</li>
                                        <li className="flex gap-[17px] cursor-pointer hover:text-black">Blog</li>
                                    </ul>
                                </div>
                                <li>Careers</li>
                                <li>About</li>
                            </ul>

                        </div>
                        <div>
                            <ul className="flex flex-col justify-center text-center gap-3 text-gray-500 pt-7 text-[15px]">
                                <li>Login</li>
                                <li>
                                    <button className="flex border-gray-400 border-[2px] py-[7px] px-14 rounded-[12px]">Register</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar