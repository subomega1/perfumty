/*import React from "react";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications

const Layout = ({ children }) => {
    return (
        
        <div className="flex min-h-screen">
            <section className="hidden lg:flex flex-1 items-center justify-center bg-[#FCF4E4] p-10 py-0">
                <div className="flex max-h-[800px] max-w-[600px] flex-col justify-center space-y-12 w-full pl-10 px-4">
                    <div className="space-y-5 text-white w-full items-center justify-center">

                        <h1 className="text-4xl font-bold text-black font-serif tracking-wide">Welcome to </h1>

                            <Image className="justify-self-center "
                                src="/logo.png"
                                alt="logo"
                                width={350}
                                height={400}
                            />


                        
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

export default Layout;*/
import React from "react";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gradient-to-t from-[#fdf1f6] via-[#f9dde8] to-[#fef6f2] relative overflow-hidden">
            {/* Elegant Wavy Separator (Bigger curvature) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-32 -translate-x-1/2 overflow-hidden z-10">
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="
                            M0,0 
                            C50,10 50,90 0,100 
                            L100,100 
                            C50,90 50,10 100,0
                            Z"
                        fill="#e8b5ce"
                        stroke="#f0c4d9"
                        strokeWidth="0.5"
                    />
                </svg>
            </div>

            {/* Left Panel with background image and overlay */}
            <section className="hidden lg:flex w-1/2 relative rounded-r-[100px] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/backgroundauth1.avif')" }}
    ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#fdf1f6] to-[#f9dde8] opacity-70"></div>

                {/* Content with transparent bg */}
                <div className="relative z-10 flex max-h-[800px] max-w-[600px] flex-col ml-10 mt-10 justify-center space-y-12 w-full pl-10 px-4">
                    <div className="space-y-5 text-white w-full mt-20 ml-20 mr-5 ">
                        
                        <Image 
                            className="relative z-10 flex flex-col items-center  w-full rounded-lg shadow-lg"
                            src="/signuplogo.png"
                            alt="logo"
                            width={800}
                            height={700}
                           
                           
                        />
                    </div>
                </div>
            </section>

            {/* Right Panel (Form content) */}
            <section className="flex flex-1 flex-col items-center p-4 py-10 lg:justify-center lg:px-16 lg:py-0 relative z-20">
              

                {/* Form container with glass morphism effect */}
                <div className="w-full max-w-[600px] bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20 relative z-20">
                    {children}
                </div>
                
                <ToastContainer 
                    position="top-right" 
                    autoClose={3000}
                    toastClassName="!bg-white/90 !text-gray-800 !shadow-lg !backdrop-blur-sm"
                    progressClassName="!bg-gradient-to-r from-[#e8b5ce] to-[#f0c4d9]"
                />
            </section>
        </div>
    );
};

export default Layout;




