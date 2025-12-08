import React from 'react';
import notfound from '../assets/image.png'

const PageNotFOund = () => {
    return (
        <div className=' min-h-[60vh]  md:min-h-screen  md:col-span-11 flex justify-center items-center'>
            <img src={notfound} className=' w-[600px]' />
        </div>
    );
};

export default PageNotFOund;