import React,{useState} from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Access=()=>{
        const [state,setState]=useState({Rollno:"",Name:""});
        
        const [record,setRecord]=useState([]);
        const [Monthname,setMonthname]=useState(["january","february",'march',"april","may","june","july","Augest","september","octuber",'november',"December"]);
        const [open,setopen]=useState(false);

        const handlechange=(e)=>{
            let name=e.target.name
            let value= e.target.value;
            setState({...state,[name]:value})
          }
        const Fetchdata=async()=>{
            const res= await axios.get(`http://localhost:5000/api/student/FetchStudentRecord/${state.Rollno}`);
            if(res.status==200){
                setRecord(res?.data[0]?.yearrecord)
                setopen(true)
                // alert("successfully add")
            }else{
                alert("somethinng went wrong")
            }
        }
        console.log(record)
    return(
        <>

            
            


            {
                open?
               
                <div className="h-screen w-full grid  bg-slate-100 overflow-scroll">
           { record?.map((e)=>{
                return(
                    <>
                 
                    <div style={{marginLeft:"10px"}}>
                        <label htmlFor="">Month</label>
                    <input type="text"  
                                        readOnly
                                     value={Monthname[e.month-1]} 
                                    className="w-1/3 text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                                    />
                    </div>
                        <div className='flex w-full justify-between'style={{marginLeft:"10px"}}>
                        <label htmlFor="">Date</label>
                        <label htmlFor="">Checkin</label>
                        <label htmlFor="">checkout</label>
                        </div>
                       {e.month_data.map((e1)=>{
                            return(
                                <>
                                <div style={{marginLeft:"10px"}} className="w-full">
                                
                                <input type="text"  
                                        readOnly
                                     value={e1.date} 
                                    className="w-1/3 text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                                    />
                                <input type="text" 
                               readOnly
                                     value={e1.checkin} 
                                    className="w-1/3 text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                                    />
                                <input type="text" 
                               readOnly
                                     value={e1.checkout} 
                                    className="w-1/3 text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                                    />
                                </div>
                                </>
                            )
                        })}



                    </>

                )
            })}
       </div>
            
            
                :
                <div className="h-screen w-full grid place-items-center bg-slate-100">
                <div className="bg-white rounded-md shadow-md flex flex-row" id="contact_container">            
            <div className="px-6 py-8  flex  items-center justify-center" id="contact_us">
                <div>
                <div className="flex justify-between ">
                    <h2 className="text-blue-800 text-xl text-center"> Record Accss</h2>
                    {/* <h2 className="text-red-800 text-xs flex flex-row md:hidden block cursor-pointer" id="swtich_to_contact_info">Contact Info
                     <svg
                            xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg></h2> */}
                </div>
                <input type="text" placeholder="Enter Your Name"
                name="Name"
                value={state.Name} onChange={handlechange}
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"/>
                
                <input type="text" placeholder="Enter Your Roll Number" name="Rollno"
                value={state.Rollno} onChange={handlechange}
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"/> 
                <input type="submit" value=" Go "
                onClick={()=>Fetchdata()}
                    className="bg-blue-800 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
            
            
                    </div>
            </div>
            
        </div>
    </div>
        }

      </>

    )}
     
 
export default Access