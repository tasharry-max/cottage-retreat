import {useState} from 'react';
import {RxHamburgerMenu} from "react-icons/rx";

const NavBar = () => {
    const [nav,
        setNav] = useState(false);

    const showNav = () => {
        setNav(!nav);
    };

    return (
        <div
            className="w-full sticky  flex justify-between items-center lg:px-28 md:px-28 sm:px-5 xs:px-5 lg:pt-10 md:pt-10 sm:py-8 xs:py-8">
            <div className="logo text-green-100 font-bold text-sm leading-6 uppercase">Cottage Retreat</div>
            <nav className=" text-green-100 text-sm leading-6 hidden md:flex gap-5">
                <a
                    className="mr-5 relative text-white no-underline overflow-hidden group cursor-pointer" href="#subheading">Nav button 01</a>
                <a
                    className="mr-5 relative text-white no-underline overflow-hidden group cursor-pointer" href="#gallery">Nav button 02</a>
                <a
                    className="relative text-white no-underline overflow-hidden group cursor-pointer" href="#faqsection">Nav button 03</a>
            </nav>

            <nav
                className={`h-[100vh] fixed top-[0px] flex flex-col bg-green-100 text-white items-start align-start w-screen md:hidden z-30 duration-1000 nav-mob ${nav
                ? "right-[0px]"
                : "right-[-100vw]"} `}>
                <div
                    className="logo text-white font-bold text-xs leading-5 tracking-wide uppercase py-8 pl-5">Cottage Retreat</div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col pl-5 text-3xl gap-7 pt-14 ">
                        <a href="#subheading" className="">Nav button 01</a>
                        <a href="#gallery" className="">Nav button 02</a>
                        <a href="#faqsection" className="">Nav button 03</a>
                    </div>
                    <div className="flex flex-col absolute bottom-10 left-5 privacy text-sm text-white-100 font-light gap-3">
                        <a href="">Privacy</a>
                        <a href="">Terms & Conditions</a>
                    </div>
                </div>
            </nav>

            {nav
                ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="fixed right-[20px] text-3xl z-100 cross"
                        aria-hidden="true"
                        onClick={showNav}>
                        <line
                            x1="18.2561"
                            y1="1.37395"
                            x2="0.44669"
                            y2="19.1834"
                            stroke="#F7FAF6"
                            strokeWidth="1.25932"/>
                        <line
                            y1="-0.629659"
                            x2="25.1864"
                            y2="-0.629659"
                            transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.26013 0.929199)"
                            stroke="#F7FAF6"
                            strokeWidth="1.25932"/>

                    </svg>
                //   <RxCross1 />
                )
                : (<RxHamburgerMenu
                    className="fixed right-[30px] text-3xl z-40 md:hidden"
                    aria-hidden="true"
                    onClick={showNav}/>)}
        </div>
    )
}

export default NavBar
