import React from 'react'
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (<AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}

        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>)
}

const MenuItems = ({ selectedPage, setSelectedPage }) => {

    return <>
        <Link page="home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
        <Link page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
        <Link page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
        <Link page="Testimonials"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
        <Link page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
    </>
}
const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    const navBarBackground  = isTopOfPage?"": "bg-red";

    return (
        <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-3xl font-bold'>JE</h4>
                {/** DESKTOP NAV */}
                {isAboveMediumScreens ? (<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <MenuItems selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                </div>) : (<button className='rounded-full bg-red p-2'
                    onClick={() => { setIsMenuToggled(!isMenuToggled) }}
                >
                    <img alt="menu-icon" src="assets/menu-icon.svg" />
                </button>)}
                {/** Mobile menu popup */}
                {!isAboveMediumScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 bg-blue w-[300px]'>
                        {/** Close icon */}
                        <div className='flex justify-start p-12'>
                            <button onClick={() => { setIsMenuToggled(!isMenuToggled) }}>
                                <img alt="close-icon" src="assets/close-icon.svg" />
                            </button>
                        </div>
                        {/** Menu items */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <MenuItems selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
