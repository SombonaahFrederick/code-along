import React from 'react';
import hs1 from "../assets/img/hs1.jpg"

function Practice() {
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="w-96 shadow-md">
        <div className='h-60 overflow-auto'>
        <img src={hs1} alt="" />
        {/* <!-- <nav className="bg-[aqua]">
        <h3>Logo</h3>
        <h3>Menu</h3>
        </nav> --> */}
        </div>
        <div className='p-5'>
            <div className='flex justify-between'>
                <h3 className='font-bold capitalize'>Levono Laptop</h3>
                <h6>GHC3000</h6>
                </div>
        <h3>Courageous Knight.</h3>
        <p>this thing is messing up hahaha.
        </p>
        </div>
        </div>
        </div>


    );
}


export default Practice;