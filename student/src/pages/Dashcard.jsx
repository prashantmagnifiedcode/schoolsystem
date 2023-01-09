import React from 'react';

// import 'react-circular-progressbar/dist/styles.css';
const ProgressGraph=({total})=>{
    return(
        <>
        <div class="p-2">
            
            <div class="flex w-full relative flex-col bg-indigo-500 w-full h-36 p-4 rounded-xl app-box-shadow-blue ">
                                      <span class="text-white font-bold mb-auto">Total Students in clg</span>
                                      <span class="text-white text-2xl font-semibold">{total}</span>
                                      <span class="text-white text-xs">Overall</span>
                                  </div> 
                                  
              </div>
       
        </>
    )
}
export default ProgressGraph