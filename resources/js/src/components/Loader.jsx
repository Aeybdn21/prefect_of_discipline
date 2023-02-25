// 95494-double-loader.json
import React from "react";
import Lottie from "lottie-react";
import loaderlottie from '../lottie/95494-double-loader.json';
import oklottie from '../lottie/110216-okokok-green.json';
import { useEffect } from "react";

export default function (props) {
    const {loading = false, display = false} = props;
    
    return (
        <div className={`absolute w-full h-full bg-black/20 inset-0 z-[1000] flex flex-col justify-center items-center ${!display && 'hidden'}`}>
            <div className="w-60 h-60 flex flex-col justify-center">
                {loading && <Lottie animationData={loaderlottie} loop={true}/>}
                {!loading && <Lottie animationData={oklottie} loop={false}/>}
            </div>
        </div>
    )
}