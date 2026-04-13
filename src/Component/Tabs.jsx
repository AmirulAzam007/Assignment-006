import React from 'react';

const Tabs = ({setCardInfo, carts, cardInfo}) => {

    console.log(carts)
    return (
        <div>

           <div className='text-center py-10 pt-28'>
                <h1 className='font-bold text-5xl pb-3'>Premium Digital Tools</h1>
                <p className='text-gray-700 text-sm'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className="tabs tabs-box justify-center bg-transparent pb-10">
              <input type="radio" name="my_tabs_1" className={`rounded-full w-35 ${cardInfo==="cart" ? "tab bg-white" : "tab bg-purple-500"}`} aria-label="Products" onClick={()=> setCardInfo("model")} defaultChecked />
              <input type="radio" name="my_tabs_1" className={`rounded-full w-35 ${cardInfo==="model" ? "tab bg-white" : "tab bg-purple-500"}`} aria-label={`Cart (${carts.length})`} onClick={()=> setCardInfo("cart")} />
            </div>
        </div>
    );
};

export default Tabs;