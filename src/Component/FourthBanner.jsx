import React from 'react';

const FourthBanner = () => {
    return (
        <div>
            <div className='pt-12 pb-12 bg-purple-700 w-full space-y-4'>

            <div className="pt-15 space-y-2">
                <h1 className="text-5xl mx-auto text-white text-center font-bold">Ready to Transform Your Workflow?</h1>
                <p className=" text-center text-gray-400 mx-auto">Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>

            <div className="flex items-center justify-center gap-3">
                <button class="rounded-4xl font-bold bg-white btn btn-outline btn-primary border-none">Explore Products</button>
                <button class="btn rounded-4xl font-bold bg-purple-700 btn-primary border-white">View Pricing</button>

            </div>

            <div className="text-center">
                <p className="text-white">14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>    

            
        </div>
    );
};

export default FourthBanner;