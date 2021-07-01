import React from "react";

import Navbar from "../../components/comps/Navbar.js";
import Footer from "../../components/comps/Footer.js";

export default function Landing() {
    return (
        <>
            <Navbar transparent/>
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                     style={{
                         minHeight: "75vh"
                     }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                         style={{
                             backgroundImage: "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')"
                         }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-5/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="mt-8 text-white font-mono text-5xl">
                                        IPFSpace makes Storage Easy
                                    </h1>
                                    <p className="mt-6 text-2xl text-white">
                                        A storage platform based on IPFS </p>
                                    <p className="mt-2 text-2xl text-white">
                                        Use wallet's recovery phrase for security </p>
                                    <p className="mt-1 text-2xl text-white">
                                        by making the data storage easier,reliable,and more private. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{height: "70px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-center inline-flex items-center justify-center w-12 h-12 mb-5">
                                            <img
                                                alt="..."
                                                src={require("../../assets/img/ipfs.png").default}
                                                className=" max-w-full mx-auto"
                                                style={{maxWidth: "60px"}}
                                            />
                                        </div>
                                        <h6 className="text-xl font-semibold">IPFS</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Use IPFS, a generational cross-generation storage protocol, to ensure the
                                            security and privacy of user data. Next there are FileCoin and Swarm, etc.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                                            <img
                                                alt="..."
                                                src={require("../../assets/img/wallet.png").default}
                                                className=" max-w-full mx-auto"
                                                style={{maxWidth: "60px"}}
                                            /></div>
                                        <h6 className="text-xl font-semibold">
                                            Verified User
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            We use extremely secure wallet private key technology to produce unique
                                            auxiliary word authentication for users.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-green-400">
                                            <img
                                                alt="..."
                                                src={require("../../assets/img/blockchina.png").default}
                                                className=" max-w-full mx-auto"
                                                style={{maxWidth: "40px"}}
                                            /></div>
                                        <h6 className="text-xl font-semibold">
                                            Decentralization
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Use blockchain wallet technology solves the decentralization of user
                                            identity, and IPFS storage protocol brings the decentralization of storage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                {/*<div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">*/}
                                {/*<i className="fas fa-user-friends text-xl">A Piece</i>*/}
                                {/*</div>*/}
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Share files with friends is a pleasure
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    This is a very simple way to share a file with friends and the team.
                                    All you need to do is to log in to the'A PIECE' platform with the same mnemonic,
                                    so that everyone in the team or your friends can see the data uploaded by anyone.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                </p>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                                    className="font-bold text-gray-800 mt-8"
                                >
                                </a>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block"
                                            style={{
                                                height: "95px",
                                                top: "-94px"
                                            }}
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-pink-600 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            Top Notch Services
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Whether you store data,
                                            or share a storage space with friends,
                                            teams, or others, it's very simple, fast and safes.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{height: "80px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold text-white">
                                        A growing platform
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-300">
                                        Now, users can use'A Piece' for data storage. Later, we
                                        will add new features to provide users with the best data
                                        storage services.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                          <span
                              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-300">
                                                        Integrate FileCoin and Swarm etc
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                          <span
                              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-300">Provide multiple private space
                                                        storage</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                          <span
                              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-300">Join the storage of Ethereum and NFT
                                                        related data</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-gray-900">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{height: "80px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-900 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Store something
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                    You can try to store the data of Baidu Cloud and other online disks on the 'A Piece'
                                    platform.
                                    After using it for a period of time, you will find its advantages.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-red-400 inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Simple to use
                                </h6>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Abandon the email and mobile phone number, just use the mnemonic phrase to upload
                                    the data to IPFS.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-blue-400 inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Share with friends
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    You only need to use the same mnemonic phrase with your friends, then your friends
                                    can see all the data you upload.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Private Storage
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Decentralized user design, you can upload extremely private data to the platform
                                    without being known.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            Want to Contact with us?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                            The following is the email address and WeChat account to contact us.
                                        </p>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                WeChat
                                            </label>
                                            <div style={{height: 4}}/>
                                            <label
                                                className="w-100 border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow"
                                                style={{transition: "all .15s ease"}}
                                            >
                                                SimpleDoIt
                                            </label>
                                        </div>
                                        <div style={{height: 4}}/>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="relative w-full block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <div style={{height: 4}}/>

                                            <label
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                style={{transition: "all .15s ease"}}
                                            >
                                                apiecespace@163.com
                                            </label>
                                        </div>
                                        <div style={{height: 12}}/>

                                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                            We are very glad that you have made valuable suggestions.
                                        </p>

                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-red-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{transition: "all .15s ease"}}
                                            >
                                                Contact us quickly !
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
