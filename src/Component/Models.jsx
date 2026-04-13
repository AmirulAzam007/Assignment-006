import React, { use, useState } from 'react';
import ModelCard from './ModelCard';

const Models = ({modelpromise, carts, setCarts}) => {

    const models = use(modelpromise)

    
    
    return (
        
        <div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-[80%] mx-auto '>
                
                {models.map(model=> 
                    <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelCard> 
                 )}

            </div>


        </div>
    );
};

export default Models;