import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
// import Lottile from "lottie-react";


const Login = () => {
    return (
            <div className="grid grid-cols-2 auto-rows-[600px] gap-4 my-10 p-10">
                
                    <div className="bg-purple-500 border-2 rounded-xl items-center justify-center p-2 flex flex-col">
                    <iframe src="https://lottie.host/embed/3aaf36bd-4996-430a-93ee-b71ce977c35f/Rn6YTGUOYg.json" />
                        <h1 className="mt-5 mb-5 mr-5 ml-5 text-lg text-black-500">Log in to your admin dashboard</h1>
                        <h2 className=" text-2xl text-black-500">with your credentials</h2>
                         <h1 className="mt-5 mb-5 mr-5 ml-5 text-xs text-black-500 font-bold">The Evolution of YashAdmin</h1>
                        <p className="mt-5 mb-5 mr-5 ml-5 font-bold text-2xl items-justify "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt</p>
                    </div>
                <div className="bg-white-500 border-2 rounded-xl items-center justify-center p-2 flex flex-col">
                    <h5 className="text-lg text-black-500">Welcome Back</h5>
                    <h1 className=" text-sm text-black-500 font-sans: ui-sans-serif system-ui, sans-serif ,Georgia, Cambria">Login page allows users to enter login credentials for authentication and access to secure content.</h1> 
                    <form>
                        <div className="social-login">
                            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                                    Login in
                                </p>
                            </div>
                            <button className="justify  border-2 rounded-xl mt-5 mb-5 mr-5 ml-5 p-3 bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
                            <FontAwesomeIcon icon={faGoogle} />
                                <span>Sign in with Google</span>
                            </button>
                            <button className=" justify border-2 rounded-xl mt-5 mb-5 mr-5 ml-5 p-3 bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  ">
                            <FontAwesomeIcon icon={faApple} />
                                <span>Sign in with apple</span>
                            </button>
                                <form>
                                    <label className="block">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"> Email</span>
                                        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                                        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                            Please provide a valid email address.
                                        </p>
                                    </label>
                                    <label className="block">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"> password</span>
                                        <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" />
                                    </label>
                                </form>
                                <fieldset>
                                <div>
                                    <label class="">
                                        <input type="checkbox" name="todo[1]" />
                                        Remember my preference
                                    </label>
                                </div>
                                <div className=" flex flex-col justify text-center p-5">
                                    <button className="flex  flex-col rounded-xl  mt-5 mb-5 ml-5 mr-5 aboslute items-center bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                                        Sign in me 
                                    </button>
                                </div>
                                <div></div>
                                    <h1>Not registered ? </h1>
                                    <a href="https://registereds.com" class="text-purple-600 visited:text-purple-600 "> registered</a>
                                <div>                                
                            </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
    );
};


export default  Login;
