import React, { useState } from 'react'

const Navbar = (props) => {

    const [displayNavItems, setDisplayNavItems] = useState(false)

    const showNavItems = () => {
        if(displayNavItems){
            setDisplayNavItems(false)
        } else{
            setDisplayNavItems(true)
        }
    }      
    return (
        <>
            <nav className={`${props.mode}`==="light" ? "max-[225px]:block flex bg-blue-200 justify-between items-center" : "max-[225px]:block flex bg-slate-900 justify-between items-center"}>
                <a href="/" className={`${props.mode}`==="light" ? 'nav-brand flex items-center p-1 mx-4 rounded-lg hover:shadow-blue-300 hover:shadow-md': "nav-brand flex items-center p-1 mx-4 rounded-lg hover:shadow-slate-400 hover:shadow-md"}>
                    <div className="logo">
                        <i className={`${props.mode}`==="light" ?"fa-solid fa-info text-slate-900 text-2xl":"fa-solid fa-info text-red-300 text-2xl"}></i>
                    </div>
                    <span><h2 className={`${props.mode}`==="light" ?'font-bold text-xl text-slate-900':"font-bold text-xl text-red-300"}>nformer</h2></span>
                </a>
                <div className="hidden md:flex nav-menu items-center w-[100%] justify-between mx-4">
                    <a className={`${props.mode}`==="light" ?'no-underline text-slate-900 text-xl rounded-lg hover:shadow-blue-300 hover:shadow-md p-1':'no-underline text-red-300 text-xl rounded-lg hover:shadow-slate-400 hover:shadow-md p-1'} href="/about">
                        About
                    </a>
                    <button type='button' onClick={props.toggleMode} className={`${props.mode}`==="light" ?'mx-1 p-1 rounded-lg hover:shadow-blue-300 hover:shadow-md':'mx-1 p-1 rounded-lg hover:shadow-slate-400 hover:shadow-md'} >
                        <i className={`${props.mode}`==="light" ?"fa-solid fa-moon text-xl text-slate-900 px-2":"fa-solid fa-sun text-xl text-red-300 px-2"}></i>
                    </button>
                </div>
                <div className='hidden md:flex search-area items-center justify-between gap-2 px-1 mx-4'>
                    <input className={`${props.mode}`==="light" ?"p-2 mx-2 rounded-lg text-sm outline-blue-300 shadow-md ":"p-2 mx-2 rounded-lg text-sm outline-slate-400 shadow-md"} type="text" placeholder='Search' />
                    <button type="button" className={`${props.mode}`==="light" ?'rounded-lg border-2 mx-2 border-blue-300 p-1 text-sm text-slate-900 hover:shadow-blue-300 hover:shadow-md':'rounded-lg border-2 mx-2 border-slate-400 p-1 text-sm text-red-300 hover:shadow-slate-400 hover:shadow-md'}>Search</button>
                </div>
                <button type='button' onClick={showNavItems} className={`${props.mode}`==="light" ?'md:hidden p-1 mx-4 hover:shadow-blue-300 text-slate-900 hover:shadow-md':'md:hidden p-1 mx-4 hover:shadow-slate-400 hover:shadow-md text-red-300'}>
                    <i className={`${props.mode}`==="light" ?"fa-solid fa-bars text-xl text-slate-900 px-2":"fa-solid fa-bars text-xl text-red-300 px-2"}></i>
                </button>
            </nav >
            <div className={displayNavItems ? `${props.mode}`==="light" ? "fixed bg-white inset-0 md:hidden":"fixed bg-[#03071e] inset-0 md:hidden":`${props.mode}`==="light" ? "hidden fixed bg-white inset-0 md:hidden":"hidden fixed bg-[#023047] inset-0 md:hidden" } id="mobile-navbar">
                <div className={`${props.mode}`==="light" ?"nav-bar max-[225px]:block bg-blue-300  flex justify-between items-center":"nav-bar max-[225px]:block bg-slate-900  flex justify-between items-center"}>
                    <a href="/" className={`${props.mode}`==="light" ?'nav-brand flex items-center p-1 mx-4  rounded-lg hover:shadow-blue-300 hover:shadow-md':'nav-brand flex items-center p-1 mx-4  rounded-lg hover:shadow-slate-400 hover:shadow-md'}>
                        <div className="logo">
                            <i className={`${props.mode}`==="light" ?"fa-solid fa-info text-slate-900 text-2xl":"fa-solid fa-info text-red-300 text-2xl"}></i>
                        </div>
                        <span><h2 className={`${props.mode}`==="light" ?'font-bold text-slate-900 text-xl':'font-bold text-xl text-red-300'}>nformer</h2></span>
                    </a>
                    <button type='button' onClick={showNavItems} className={`${props.mode}`==="light" ?' px-1 mx-4 hover:shadow-blue-300 hover:shadow-md':' px-1 mx-4 hover:shadow-slate-400 hover:shadow-md'}>
                        <i className={`${props.mode}`==="light" ?"fa-solid fa-xmark text-xl text-slate-900 px-2":"fa-solid fa-xmark text-xl text-red-300 px-2"}></i>
                    </button>
                </div>
                <a className={`${props.mode}`==="light" ?'no-underline mx-4 m-2 block text-slate-900 text-xl rounded-lg hover:shadow-blue-300 hover:shadow-md p-1':'no-underline mx-4 m-2 block text-red-300 text-xl rounded-lg hover:shadow-slate-400 hover:shadow-md p-1'} href="/about">
                    About
                </a>
                <button type='button' onClick={props.toggleMode} className={`${props.mode}`==="light" ?'mx-4 block p-1 rounded-lg hover:shadow-blue-300 hover:shadow-md':'mx-4 block p-1 rounded-lg hover:shadow-slate-400 hover:shadow-md'} >
                    <i className={`${props.mode}`==="light" ?"fa-solid fa-moon text-xl text-slate-900 px-2":"fa-solid fa-sun text-xl text-red-300 px-2"}></i>
                </button>
                <hr className={`${props.mode}`==="light" ?'m-4 border-blue-300':'m-4 border-slate-900'}/>
                <input className={`${props.mode}`==="light" ?"w-2/3 block p-2 mx-4 my-2 rounded-lg text-sm outline-blue-300 shadow-md":"w-2/3 block p-2 mx-4 my-2 rounded-lg text-sm outline-slate-400 shadow-md"} type="text" placeholder='Search' />
                <button type="button" className={`${props.mode}`==="light" ?'rounded-lg border-2 mx-4 my-2 border-blue-300 p-1 text-sm text-slate-900 hover:shadow-blue-300 hover:shadow-md':'rounded-lg border-2 mx-4 my-2 border-slate-900 p-1 text-sm text-red-300 hover:shadow-slate-400 hover:shadow-md'}>Search</button>

            </div>
        </>
    )
}

export default Navbar
