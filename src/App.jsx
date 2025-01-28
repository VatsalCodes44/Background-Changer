import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const red = () => {
    setColor("red");
  };
  const green = () => {
    setColor("green");
  };
  const blue = () => {
    setColor("blue");
  };
  const olive = () => {
    setColor("olive");
  };
  const gray = () => {
    setColor("gray");
  };
  const yellow = () => {
    setColor("yellow");
  };
  const pink = () => {
    setColor("pink");
  };
  const purple = () => {
    setColor("purple");
  };
  const lavender = () => {
    setColor("lavender");
  };
  const white = () => {
    setColor("white");
  };
  const black = () => {
    setColor("black");
  };
  return (
    // here we do not need to put color inside{} as we already used it outside, {backgroundColor:color} is object
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <span className='  fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-2 rounded-3xl'>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={red}  style={{background:'red'}}>Red</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={green} style={{background:'green'}}>Green</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={blue} style={{background:'blue'}}>Blue</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={olive} style={{background:'olive'}}>Olive</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={gray} style={{background:'gray'}}>Gray</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={yellow} style={{background:'yellow'}}>Yellow</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={pink} style={{background:'pink'}}>Pink</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={purple} style={{background:'purple'}}>Purple</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={lavender} style={{background:'lavender'}}>Lavender</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 ' onClick={white} style={{background:'white'}}>White</button>
          <button className=' border-2 border-black rounded-2xl px-1 py-1 text-white' onClick={black} style={{background:'black'}}>Black</button>
        </div>
      </span>
    </div>
  )
}
export default App
