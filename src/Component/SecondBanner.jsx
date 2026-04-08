import React from 'react';

const SecondBanner = () => {
    return (
        <div className='h-120 bg-[#F9FAFC] w-full'>

            <div className="pt-15 space-y-2">
                <h1 className=" grid text-5xl items-center justify-center font-bold">Get Started in 3 Steps</h1>
                <p className="grid items-center justify-center text-gray-500">Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src="/user.png"
                 className="rounded-xl" />
                </figure>
                   <div className="card-body items-center text-center">
                  <h2 className="card-title">Card Title</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                 <div className="card-actions">
                 <button className="btn btn-primary">Buy Now</button>
                </div>
               </div>
                </div>
            </div>
            
        </div>
    );
};

export default SecondBanner;