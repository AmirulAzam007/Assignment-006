import React, { use } from 'react';

const Models = ({modelpromise}) => {

    const models = use(modelpromise)
    
    
    return (
        
        <div>
            <div className='text-center py-10 pt-28'>
                <h1 className='font-bold text-5xl pb-3'>Premium Digital Tools</h1>
                <p className='text-gray-700 text-sm'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-60'>
                
                {models.map(model=> <div className=' shadow-lg rounded-2xl border-gray-200 border-2 p-4'>

                    <div className='flex justify-start pl-3 pt-3 rounded-full'>
                        <img className='h-15 w-15 rounded-full border-2 border-gray-200 p-2' src={model.image} alt="" />
                    </div>

                    <div className='space-y-2 pt-2'>
                        <h1 className='font-bold text-xl'>{model.title}</h1>
                        <p className='text-sm text-gray-500'>{model.description}</p>
                        <div className='font-bold text-xl'>${model.price} <span className='font-normal text-sm text-gray-500'>/Mo</span> </div>
                        <ul>
                            {model.characteristics.map(char=> 
                            
                            <li className='flex gap-2 items-center text-gray-500'> <img className='h-3 w-3' src="/Vector.png" alt="" /> {char}</li>

                            )}
                        </ul>
                    </div>

                    <div className='pt-5  flex justify-center'>
                        <button className=' btn bg-purple-700 text-white px-45 py-2 rounded-4xl'>Buy Now</button>
                    </div>



                </div> )}

            </div>


        </div>
    );
};

export default Models;