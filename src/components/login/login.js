import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='Screen min-h-screen font-sans  bg-[url("../components/images/bg.jpg")] lg:flex md:flex  sm:flex-none  lg:justify-center lg:items-center relative grid-cols-2 bg-cover bg-center  justify-center items-center '>
            <div className='Col1 text-sm overflow-hidden flex-col  text-white/80 bg-blue-500 p-6 lg:rounded-l-2xl lg:h-3/4  md:rounded-l-xl md:text-lef lg:items-start sm:items-center  justify-center' >
                <div className="Box relative  ">
                    <div className='Box1 bg-white/10 w-48 h-48  right-[-90px] top-[-90px] z-0  animate-animation1  absolute flex items-center justify-center rounded-[60px] rotate-45 '>
                        <div className='bg-blue-700 w-24 h-24 rounded-xl '>
                        </div>
                    </div>
                    <div className='Box2 bg-white/10 w-48 h-48  left-[-110px] top-[70px] z-0  animate-animation2  absolute flex items-center justify-center rounded-[60px] rotate-45 '>
                        <div className='bg-white/30 w-24 h-24 rounded-xl '>
                        </div>
                    </div>
                </div>
                <div className=' Logo h-8 flex justify-center md:justify-start '>
                    <svg className='Logo1 sm:h-30 sm:w-30' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="18" fill="#F2F6FC"></rect><path d="M33.9126 48.6459H16.7709C15.9917 48.6459 15.3542 48.0084 15.3542 47.2292V22.9334C15.3542 22.1542 15.9917 21.5167 16.7709 21.5167H17.6209C27.3959 21.5167 35.3292 29.45 35.3292 39.225V47.2292C35.2584 48.0084 34.6917 48.6459 33.9126 48.6459ZM18.1167 45.8834H32.4959V39.225C32.4959 31.15 26.1209 24.6334 18.1167 24.35V45.8834Z" fill="#216FED"></path><path d="M47.2291 48.6459H30.0874C29.3083 48.6459 28.6708 48.0084 28.6708 47.2292C28.6708 46.45 29.3083 45.8125 30.0874 45.8125H45.8833V33.0625C45.8833 24.9875 39.5083 18.4709 31.5041 18.1875V28.2459C31.5041 29.025 30.8666 29.6625 30.0874 29.6625C29.3083 29.6625 28.6708 29.025 28.6708 28.2459V16.7709C28.6708 15.9917 29.3083 15.3542 30.0874 15.3542H30.9374C40.7124 15.3542 48.6458 23.2875 48.6458 33.0625V47.3C48.6458 48.0084 48.0083 48.6459 47.2291 48.6459Z" fill="#216FED"></path><path d="M28.246 48.6458H22.296C21.5169 48.6458 20.8794 48.0083 20.8794 47.2292V37.95C20.8794 37.1709 21.5169 36.5334 22.296 36.5334H28.246C29.0252 36.5334 29.6627 37.1709 29.6627 37.95V47.2292C29.6627 48.0083 29.0252 48.6458 28.246 48.6458ZM23.7127 45.8833H26.8294V39.3667H23.7127V45.8833Z" fill="#216FED"></path></svg>
                    <svg class="TextLogo mx-3  sm:mt-10px lg: mt-3 hidden sm:inline " width="108" height="44" viewBox="0 0 108 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="svg-title-path" d="M11.0979 43.58C7.81657 43.58 5.2559 43.0893 3.4159 42.108C1.60657 41.1573 0.701904 39.5933 0.701904 37.416C0.701904 36.2813 0.962571 35.2693 1.4839 34.38C2.0359 33.5213 2.87924 32.632 4.0139 31.712C3.4619 31.344 3.03257 30.8687 2.7259 30.286C2.4499 29.7033 2.3119 29.09 2.3119 28.446C2.3119 27.986 2.41924 27.5107 2.6339 27.02C2.87924 26.5293 3.3699 25.7013 4.1059 24.536C2.02057 23.0027 0.977904 20.764 0.977904 17.82C0.977904 15.0293 1.82124 12.9593 3.5079 11.61C5.22524 10.23 7.6019 9.53999 10.6379 9.53999C11.9259 9.53999 13.4746 9.73933 15.2839 10.138L22.6899 9.90799V14.83L19.2399 14.554C19.6386 15.198 19.8992 15.75 20.0219 16.21C20.1752 16.67 20.2519 17.2987 20.2519 18.096C20.2519 20.856 19.4699 22.834 17.9059 24.03C16.3419 25.1953 13.9652 25.778 10.7759 25.778C9.8559 25.778 9.15057 25.7167 8.6599 25.594C8.35324 26.33 8.1999 26.9587 8.1999 27.48C8.1999 28.124 8.50657 28.5227 9.1199 28.676C9.7639 28.7987 10.9446 28.8753 12.6619 28.906C15.0232 28.9673 16.8939 29.1513 18.2739 29.458C19.6846 29.7647 20.7732 30.3933 21.5399 31.344C22.3066 32.264 22.6899 33.6287 22.6899 35.438C22.6899 38.2287 21.7392 40.2833 19.8379 41.602C17.9366 42.9207 15.0232 43.58 11.0979 43.58ZM10.6839 21.086C13.0146 21.086 14.1799 19.9513 14.1799 17.682C14.1799 15.4433 13.0146 14.324 10.6839 14.324C8.32257 14.324 7.1419 15.4433 7.1419 17.682C7.1419 19.9513 8.32257 21.086 10.6839 21.086ZM11.5119 38.52C13.2599 38.52 14.5172 38.3207 15.2839 37.922C16.0812 37.5233 16.4799 36.91 16.4799 36.082C16.4799 35.3153 16.1886 34.8247 15.6059 34.61C15.0539 34.426 14.3946 34.3187 13.6279 34.288C12.8919 34.2573 12.4012 34.242 12.1559 34.242L8.0159 33.92C7.18791 34.748 6.7739 35.576 6.7739 36.404C6.7739 37.14 7.15724 37.6767 7.9239 38.014C8.72124 38.3513 9.91724 38.52 11.5119 38.52Z" fill="#ffffff"></path><path class="svg-title-path" d="M26.4242 10H32.5422V12.438C35.1795 10.9047 37.6328 9.90799 39.9022 9.44799V15.658C37.6022 16.118 35.4708 16.6547 33.5082 17.268L32.5882 17.59V33H26.4242V10Z" fill="#ffffff"></path><path class="svg-title-path" d="M43.5394 10H49.7034V33H43.5394V10ZM43.5394 0.845993H49.7034V7.056H43.5394V0.845993Z" fill="#ffffff"></path><path class="svg-title-path" d="M62.591 33H58.267L52.609 10H58.681L62.867 27.756H63.925L68.111 10H74.183L66.087 42.66H60.061L62.591 33Z" fill="#ffffff"></path><path class="svg-title-path" d="M82.9776 33.552C78.2242 33.552 75.8476 31.0373 75.8476 26.008C75.8476 23.616 76.4762 21.8987 77.7336 20.856C79.0216 19.7827 81.0762 19.154 83.8976 18.97L88.8196 18.602V17.176C88.8196 16.256 88.6049 15.612 88.1756 15.244C87.7769 14.876 87.0869 14.692 86.1056 14.692C85.0936 14.692 83.6982 14.738 81.9196 14.83C80.1409 14.8913 78.6536 14.968 77.4576 15.06L77.2736 10.782C80.5856 9.89266 83.7136 9.44799 86.6576 9.44799C89.6016 9.44799 91.7176 10.0613 93.0056 11.288C94.3242 12.5147 94.9836 14.4773 94.9836 17.176V26.744C95.0449 27.5107 95.1676 28.032 95.3516 28.308C95.5662 28.584 95.9496 28.7833 96.5016 28.906L96.3176 33.552C94.7229 33.552 93.4502 33.4447 92.4996 33.23C91.5796 33.0153 90.6596 32.586 89.7396 31.942C87.5009 33.0153 85.2469 33.552 82.9776 33.552ZM84.3116 28.538C85.4769 28.538 86.7496 28.354 88.1296 27.986L88.8196 27.802V22.88L84.6336 23.248C82.9162 23.4013 82.0576 24.3213 82.0576 26.008C82.0576 27.6947 82.8089 28.538 84.3116 28.538Z" fill="#ffffff"></path><path class="svg-title-path" d="M100.584 25.364H107.208V33H100.584V25.364Z" fill="#ffffff	"></path></svg>
                </div>
                <div className='Banner mt-48 '>
                    <div className='text-center lg:text-left md:text-left'>
                        <h1 className=' Welcome text-4xl font-bold md:mt-7 text-center lg:text-left md:text-left text-white'>Welcome To Griya</h1>
                        <p className=' description1 text-sm font-poppins_regular mt-4 break-words'>It is a long established fact that a reader will
                            be distracted by the readable content of a page  when looking at its <br />
                            layout The point of  using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters,</p>
                    </div>
                    <div className='icon flex justify-center lg:justify-start md:justify-start xl:justify-start '>
                        {
                            <>
                                <div className='Facebook'>
                                    <div class="w-11 h-11 cursor-pointer bg-white/20 rounded-xl m-3 flex justify-center items-center hover:bg-white hover:text-black duration-500 ease-linear "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></div>
                                </div>
                                <div className='Twitter'>
                                    <div class="w-11 h-11 cursor-pointer bg-white/20 rounded-xl m-3 flex justify-center items-center hover:bg-white hover:text-black duration-500 ease-linear "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg></div>
                                </div>
                                <div className='Linkedin '>
                                    <div class="w-11 h-11 cursor-pointer bg-white/20 rounded-xl m-3 flex justify-center items-center hover:bg-white hover:text-black duration-500 ease-linear "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></div>
                                </div>
                            </>
                        }
                    </div>
                    <div className=' text-center lg:text-left md:text-left'>
                        <p className='text-sm font-poppins_regular break-words '>Copyright © Designed & Developed by <a href="https://dexignzone.com/">Dexignzone</a> 2022 <br />
                            <a className='facebook hover:text-blue-800' href="#">Design by Danh 2022</a></p>
                    </div>
                </div>
            </div>
            <div className='formLogin  p-10 bg-white flex flex-col lg:h-3/4 relative'>
                <p className='text-black text-3xl font-bold mt-5'>
                    Sign in
                </p>
                <p className=' my-3 text-gray-500 text-base '>Sign in by entering information below</p>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label className='textEmail my-3 font-bold text-gray-500' htmlFor='email'>Email</label> <br />
                        <input
                            type='email'
                            className={'w-full  py-3 text-black border-b-2 mb-3 focus:outline-none '}
                            id='email'
                            required
                            placeholder='Email'
                        />
                    </div>
                    <div>
                        <label className='textPassWord my-3 font-bold text-gray-500' htmlFor='password '>Password</label> <br />
                        <input
                            type='password'
                            className={'w-full  py-3 text-black border-b-2 mb-3 focus:outline-none'}
                            id='password'
                            required
                            placeholder='Password'
                        />
                    </div>
                    <div>
                        <button>
                            <input className='check'
                                type="checkbox"
                                name="vehicle1"
                                value="Bike">
                            </input>
                            <label for="vehicle1" className='check  text-gray-500 text-base'> Remember my preference</label>
                        </button>
                    </div>
                    <div className=''>
                        <button href="register.js"
                            className={'btnSignin w-full bg-blue-600 hover:bg-blue-800    p-2 rounded-xl text-white my-3 sm:text-center'}>
                            Sign in
                        </button>
                    </div>
                    <div className='confirmAccount flex  '>
                        <p className='text-gray-500 lg:text-lg sm:text-sm  '>Don't have an account?</p><a className='text-decoration-line: none; text-blue-600 lg:text-lg sm:text-sm hover:text-red-600' href="#">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
