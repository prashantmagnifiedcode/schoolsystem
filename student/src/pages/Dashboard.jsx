import React,{useState,useEffect} from 'react';
import ProgressGraph from './Dashcard';
import Attd from './Attendance/'
import ClassRooms from './class/'
import axios from 'axios'
const Dashboard = () => {
    const [state, setState]=useState(false)
    const [WhichCls, setWhichCls]=useState(false)
    const [total, settotal]=useState(0)

    useEffect(()=>{
        (async()=>{
          const res= await axios.get(` http://localhost:5000/api/student/gettotalstudents`);
        settotal(res.data.total)
        
        })()
    
      
    },[])
    return (
        <div className="grid grid-row-2 gap-1 w-full">
            <div className="grid md:grid-cols-3 md:gap-1 md:justify-between sm:grid-row-3">
                <div>
                <ProgressGraph  total={total}/>

                </div>
               
                
            </div>
            <div className="overflow-scroll">
                {
                    state?<Attd WhichCls={WhichCls} setState={setState}/>:
<ClassRooms setState={setState} setWhichCls={setWhichCls}/>


                }


            </div>
            
        </div>
    );
};

export default Dashboard;