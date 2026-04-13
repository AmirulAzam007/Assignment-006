import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model, carts, setCarts}) => {

        const [isBuy, setIsBuy] = useState(false)
 
        const handleBuy = () => {
            setIsBuy(true)

            const isFound = carts.find((item)=> item.id===model.id)

            if(isFound){
                toast.error("Item Already In Cart");
                return;
            }

            setCarts([...carts, model])
            toast.success("Item Added To Cart")
        }

    return (
        <div className=' space-y-3 shadow-lg rounded-2xl  border-gray-200 border-2 p-4'>

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

                        <button onClick={handleBuy} className={`btn mt-1 text-white w-full rounded-4xl ${isBuy ? "bg-green-500" : "bg-purple-700" }`}> {isBuy ? "Added To Cart" : "Buy Now"}</button>
                    



                </div>
    );
};

export default ModelCard;