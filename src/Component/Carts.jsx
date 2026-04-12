import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({carts, setCarts}) => {

    const totalPrice = carts.reduce((sum, item)=> sum + item.price, 0)

    const handleCheckout = () => {
        setCarts([])
        toast.success("Congratulations")
    }

    const handleDelete = (item) => {
        const filterArray = carts.filter(a => a.id !== item.id)
        console.log("fgdfgd")
        setCarts(filterArray)
        toast.info("Item Deleted")
    }
    
    return (
        <div className='py-10 shadow-xl rounded-2xl mx-45 mb-10 mt-2 space-y-2 shadow-gray-300 border-gray-200 border-2'>

            <h1 className='font-bold text-xl px-20'>Your Cart</h1>

            {
                carts.length=== 0 ? <p className='text-center font-bold text-2xl '>Cart is empty</p> : <>
                <div className='space-y-2 px-20'>
             {
                carts.map(item => <div className='' key={item.key}>

                    <div className='flex justify-between gap-2 items-center rounded-2xl bg-gray-200 p-3'>
                       <div className='flex gap-2 items-center'>
                         <div>
                        <img className='h-15 w-15 rounded-full border-2 border-gray-200 p-2' src={item.image} alt="" />
                    </div>

                    <div className='space-y-1'>
                        <h1 className='font-bold text-l'>{item.title}</h1>
                        <p>${item.price}</p>
                    </div>
                       </div>

                    <button onClick={()=>handleDelete(item)} className='text-red-600 font-bold'>Remove</button>
                    </div>



                    

                     </div>)
            }
           </div>

           <div className='flex items-center justify-between px-22'>
               <h1 className='text-gray-500'>Total:</h1>
               <div className='font-bold text-2xl'>${totalPrice}</div>
           </div>

             <button onClick={handleCheckout} class="btn text-white bg-purple-500 rounded-4xl mx-20 w-346 p-5 font-bold h-10">Proceed To Checkout</button></>
            }

    
            
        </div>
    );
};

export default Carts;