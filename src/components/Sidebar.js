import React from "react";
import {Link} from "react-router-dom";
import {ALL_FILES, IMAGE, VIDEO, DOCUMENT, OTHER} from "../views/dashborad/Dashboard";


export default function Sidebar(props) {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const loginOut = props.loginOut;
    const changeFileType = props.changeFileType;
    const currentFileType = props.currentFileType;
    return (
        <>
            <nav
                className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div
                    className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        An IPFS Space
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            {/*<NotificationDropdown />*/}
                        </li>
                        <li className="inline-block relative">
                            {/*<UserDropdown />*/}
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div
                            className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        An IPFS Space
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center" onClick={() => changeFileType(ALL_FILES)}>
                                <Link
                                    className={currentFileType === ALL_FILES ? "text-pink-500 font-bold hover:text-pink-600 text-xs uppercase py-3  block" :
                                        "text-blueGray-700 font-bold hover:text-pink-600 text-xs uppercase py-3  block"}
                                >
                                    <i className="fas fa-file opacity-75 mr-2 text-sm"></i> {ALL_FILES}
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    onClick={() => changeFileType(IMAGE)}
                                    className={currentFileType === IMAGE ? "text-pink-500 font-bold hover:text-pink-600 text-xs uppercase py-3  block" :
                                        "text-blueGray-700 font-bold hover:text-pink-600 text-xs uppercase py-3  block"}>
                                    <i className="fas fa-file-image  mr-2 text-sm"></i> {IMAGE}
                                </Link>
                            </li>

                            <li className="items-center">

                                <Link
                                    onClick={() => changeFileType(VIDEO)}
                                    className={currentFileType === VIDEO ? "text-pink-500 font-bold hover:text-pink-600 text-xs uppercase py-3  block" :
                                        "text-blueGray-700 font-bold hover:text-pink-600 text-xs uppercase py-3  block"}>
                                    <i className="fas fa-file-video  mr-2 text-sm"></i> {VIDEO}
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    onClick={() => changeFileType(DOCUMENT)}
                                    className={currentFileType === DOCUMENT ? "text-pink-500 font-bold hover:text-pink-600 text-xs uppercase py-3  block" :
                                        "text-blueGray-700 font-bold hover:text-pink-600 text-xs uppercase py-3  block"}>
                                    <i className="fas fa-file-archive  mr-2 text-sm"></i> {DOCUMENT}
                                </Link>
                            </li>

                            <li className="items-center">

                                <Link
                                    onClick={() => changeFileType(OTHER)}
                                    className={currentFileType === OTHER ? "text-pink-500 font-bold hover:text-pink-600 text-xs uppercase py-3  block" :
                                        "text-blueGray-700 font-bold hover:text-pink-600 text-xs uppercase py-3  block"}>
                                    <i className="fas fa-circle  mr-2 text-sm"></i> {OTHER}
                                </Link>
                            </li>

                        </ul>
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full"/>
                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Documentation
                        </h6>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="inline-flex">
                                <a target="_blank"
                                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                                   href="https://ipfs.io"> IPFS </a>

                            </li>

                            <li className="inline-flex">
                                <a target="_blank"
                                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                                   href="https://filecoin.io/zh-cn/"> FileCoin </a>
                            </li>

                            <li className="inline-flex">

                                <a target="_blank"
                                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                                   href="https://www.filswan.com/"> Filswan </a>
                            </li>
                        </ul>

                        <hr className="my-4 md:min-w-full"/>
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="inline-flex">
                                <Link
                                    className="text-blueGray-700 text-xs uppercase py-3 font-bold block"
                                    onClick={e => loginOut()}
                                >
                                    <i className="fas fa-trash text-blueGray-700 mr-2 text-sm"></i> LOGIN OUT
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
