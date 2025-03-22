import React from 'react'
import { useState, useEffect } from 'react';
import { Vortex } from "../components/ui/vortex";

const CrimePage = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center justify-center px-4 md:px-10 w-full h-screen"
    >
        <div className='h-18 flex justify-center items-center bg-black/80 w-full'>
          <input
          type="text"
          name="search_bar"
          id="sbar"
          value={searchItem}
          onChange={(e)=>setSearchItem(e.target.value)}   
          className=" w-3/4 md:w-1/2 p-3  rounded-md  text-white  focus:outline:none" />
        </div>
        
        {/* crime records display */}

      <footer className="h-14 flex justify-center items-center bg-black/80 fixed bottom-0 w-full text-white">
          <div className="text-sm font-semibold">{time}</div>
        </footer>
      </Vortex>
    </>
  )
}

export default CrimePage;