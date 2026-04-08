import React from 'react';

const SecondBanner = () => {
    return (
        <div className='h-130 bg-[#F9FAFC] w-full py-'>

            <div className="pt-15 space-y-2">
                <h1 className=" grid text-5xl items-center justify-center font-bold">Get Started in 3 Steps</h1>
                <p className="grid items-center justify-center text-gray-500">Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="cards flex justify-center gap-15 pt-10">

                <div>
                <div className="card bg-base-100 w-96 shadow-sm">

                    <div className=" flex justify-end mt-3 mr-3">

                        <p className="rounded-full bg-purple-700 w-8 h-8 p-1 px-2 text-white">01</p>

                    </div>
                  <figure className="px-10 pt-6">
                    <img
                      src="/user.png"
                 className="rounded-full p-3 bg-purple-200" />
                </figure>
                   <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Create Account</h2>
                  <p>Sign up for free in seconds. No credit card required to get started.</p>
               </div>
                </div>
            </div>

            <div>
                <div className="card bg-base-100 w-96 shadow-sm">

                    <div className=" flex justify-end mt-3 mr-3">

                        <p className="rounded-full bg-purple-700 w-8 h-8 p-1 px-2 text-white">02</p>

                    </div>
                  <figure className="px-10 pt-6">
                    <img
                      src="/package.png"
                 className="rounded-full p-3 bg-purple-200" />
                </figure>
                   <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Choose Products</h2>
                  <p>Browse our catalog and select the toolsthat fit your needs.</p>
               </div>
                </div>
            </div>

            <div>
                <div className="card bg-base-100 w-96 shadow-sm">

                    <div className=" flex justify-end mt-3 mr-3">

                        <p className="rounded-full bg-purple-700 w-8 h-8 p-1 px-2 text-white">03</p>

                    </div>
                  <figure className="px-10 pt-6">
                    <img
                      src="/rocket.png"
                 className="rounded-full  p-3 bg-purple-200"/>
                </figure>
                   <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Start Creating</h2>
                  <p>Download and start using your premium tools immediately.</p>
               </div>
                </div>
            </div>

            </div>
            
        </div>
    );
};

export default SecondBanner;