import React from 'react'
import {  Outlet, UIMatch, useMatches } from 'react-router'
import ReportsHeader from '../../../components/modules/Dashboard/Reports/ReporstsHeader/ReportsHeader'


interface Handle {
  title?: string;
}

function Reports() {
    const matches = useMatches()as UIMatch<unknown, Handle>[];
    const current = matches.find(m  => m.handle?.title)
     const title = current?.handle?.title || "همه ی کمپین ها";
  return (
  <div className='flex flex-col min-h-screen relative '>
    <div className='inset-0 w-full h-screen bg-secondary/35 absolute z-10 hidden'></div>
      <ReportsHeader title={title}/>
        <div className='flex flex-col  bg-white mx-16 grow mb-12.5 rounded-2xl shadow-[1px_2px_5px_0px_rgba(0,0,0,0.25)] pt-4.5 px-8 gap-y-3.5'>

            
        
            
            <Outlet/>
            

        </div>

  </div>
  )
}

export default Reports