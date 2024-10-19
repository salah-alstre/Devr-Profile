  import React from 'react'

  const Skills = () => {
    return (
      <div className='flex flex-col gap-5'>
       <h2 className='font-bold text-xl'>Skills</h2>
      <div className="flex gap-3 flex-wrap">
       <div className="flex flex-col items-start justify-center
        gap-2" >
         <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-red-500 to-orange-500" >HTML</div>
        
        <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-sky-500 to-blue-500" >CSS</div>

        <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-orange-500 to-yellow-500" >JavaScript</div>

    </div>

      <div className='flex flex-col items-start justify-center gap-2'>
        <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-blue-500 to-indigo-500" >React</div>
        
        <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-emerald-500 to-blue-500" >ReactNative</div>

        <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-emerald-500 to-green-500" >Node.js</div>


      </div>
        <div className='flex flex-col items-start justify-center gap-2'>

        <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-orange-500 to-yellow-500" >MongoDB</div>

        <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-black
        " >Next.js</div>
      

       <div className="py-2 px-5 border-none text-white
        font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
        from-sky-500 to-blue-500" >TypeScript</div>
         </div>
     
        </div>
      </div>
    )
  }

  export default Skills
