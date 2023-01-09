import React,{useState} from 'react'
import axios from 'axios'
const AddStudent=()=>{
    const[detail,setdetail]=useState({
        Name:"",Class:"",Rollno:"",year: (new Date()).getFullYear(),
        yearrecord:[
            {month:"",month_data:[{date:"",checkin:" ",checkout:""}]}
        ]
    })
    console.log(detail)
    const handlechange=(e)=>{
      let name=e.target.name
      let value= e.target.value;
      setdetail({...detail,[name]:value})
    }
    const uploaddata=async()=>{
         
        const res= await axios.post("http://localhost:5000/api/student/addstudent",detail);
        if(res.status==200){
            alert("successfully add")
        }else{
            alert("somethinng went wrong")
        }
    }
    return(
        <>
<div className="h-screen w-full grid place-items-center bg-slate-100">
        <div className="bg-white rounded-md shadow-md flex flex-row" id="contact_container">
            
            <div className="px-6 py-8  " id="contact_us">
                <div>
                <div className="flex justify-between ">
                    <h2 className="text-blue-800 text-xl">Add Student</h2>
                    
                </div>
                <input type="text" placeholder="Enter Your Name"
                        value={detail.Name}
                     name="Name"   onChange={handlechange}
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"/> 
                <input type="text" placeholder="Enter Your Class" name="Class" onChange={handlechange} value={detail.Class}
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"/> 

                <input type="text" placeholder="Enter Your Roll Number" 
                name="Rollno"
                  onChange={handlechange} value={detail.Rollno}
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"/>
         
                <input type="submit" value="AddStudent" onClick={uploaddata}
                    className="bg-blue-800 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
                    </div>
            </div>
            

        </div>
    </div>

      </>

    )}
     
 
export default AddStudent