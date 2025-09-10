import React from 'react'

const Section1 = () => {
  return (
    <section style={{ fontFamily: "Raleway" }} className='relative h-screen w-full pt-[80px] pb-4 bg-black '>
        <div className="container mx-auto h-full  grid grid-cols-8 grid-rows-4 gap-4">
        <div className="p-4  row-span-1 col-span-2 h-full bg-red-200 rounded-xl shadow-2xl border border-black/5">
        <h2 className='text-3xl text-black font-semibold' >This is some thing</h2>
        </div>
        {/* <div className=" row-span-1 col-span-1 h-full bg-red-300 rounded-xl shadow-2xl border border-black/5"></div> */}
        {/* <div className=" row-start-2 row-span-1 col-span-2 h-full bg-red-400 rounded-xl shadow-2xl border border-black/5"></div> */}
        {/* <div className=" row-span-2 col-span-2 h-full bg-red-200 rounded-xl shadow-2xl border border-black/5"></div> */}
        <div className=" row-start-3 row-span-2 col-span-4 h-full bg-red-500 rounded-xl shadow-2xl border border-black/5"></div>
        <div className=" row-span-2 col-start-5 col-span-4 h-full bg-blue-200 rounded-xl shadow-2xl border border-black/5"></div>
        <div className=" row-span-1 row-start-4 col-start-8 col-span-1 h-full w-1/2 translate-x-[100%]  bg-blue-200 rounded-xl shadow-2xl border border-black/5"></div>
        </div>
    </section>
)
}

export default Section1
