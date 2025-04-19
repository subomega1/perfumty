import React from "react";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <section className="hidden w-1/2 bg-[#780C05] lg:flex xl:w-2/5">
                <div className="flex max-h-[800px] max-w-[600px] flex-col justify-center space-y-12 w-full pl-10 px-4">
                    <div className="space-y-5 text-white w-full items-center justify-center">

                            <div className="flex"><h1 className="text-5xl whitespace-nowrap text-wrap w-full font-cinzel_d font-semibold text-black p-0">Welcome to</h1> <span className="font-cinzel text-[#AB8539] text-5xl">UniNav</span></div>
                            <Image className="justify-self-center "
                                src="/logo.png"
                                alt="logo"
                                width={350}
                                height={400}
                            />
                       

                        <p className="justify-self-center text-[#AB8539]  text-3xl">your guide to campus life</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-1 flex-col items-center bg-[#FCF4E4] p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
                <div className="mb-16 lg:hidden">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={224}
                        height={82}
                        className="h-auto w-[200px] lg:w-[250px]"
                    />
                </div>

                {children}
                <ToastContainer position="top-right" autoClose={3000} />

            </section>
        </div>
    );
};

export default Layout;
