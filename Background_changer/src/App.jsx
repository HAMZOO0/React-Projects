import { useState } from 'react';

function App() {
  const [color, setColor] = useState("green");

  return (
    <div 
      className="w-full h-screen duration-100 "
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap  bottom-14 justify-center inset-x-0 px-2 gap-2'>

      <button   onClick={()=>setColor("red")}  className='px-6 py-2 bg-red-500  rounded-3xl text-white'>Red</button>
      <button   onClick={()=>setColor("blue")}  className='px-6 py-2 bg-blue-500  rounded-3xl text-white'>Blue</button>
      <button   onClick={()=>setColor("black")} className='px-6 py-2 bg-black  rounded-3xl text-white'>Black</button>
      <button   onClick={()=>setColor("green")} className='px-6 py-2 bg-green-500  rounded-3xl text-white'>Green</button>
      <button  onClick={()=>setColor("yellow")}  className='px-6 py-2 bg-yellow-500  rounded-3xl text-white'>Yellow</button>

      
      </div>
    </div>
  );
}

export default App; 
