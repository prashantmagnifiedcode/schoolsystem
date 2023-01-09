import React,{useState,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
const Attd=({WhichCls,setState})=>{
  const[year,setyear]=useState((new Date()).getFullYear())
  const[Month,setMonth]=useState((new Date()).getMonth())
  const[day,setday]=useState((new Date()).getDate())
  const[record,setrecord]=useState([])
  const[sendupdate,setsendupdate]=useState([])
  console.log("update aarary",sendupdate,Month,day)
    const gettime=(idx,whichbtn)=>{
     const current=new Date()
     const timeIS= current.toLocaleTimeString()
    
     const values = [...record];

     if(whichbtn===1){
       values[idx].checkin= timeIS;
       const exist1=sendupdate.filter((e)=> {
        
         e._id===values[idx]._id}
        )


        if(exist1.length>0){
         
         sendupdate.map((e,indx)=>{
           if(e._id===values[idx]._id){
             return {...e,checkin: values[idx].checkin}

         }else{
           return e;

         }
         })

        }else{
    
         setsendupdate((prev)=>([...prev,{
           _id:values[idx]._id,
           year,
           Month:Month+1,
           day:day,
           checkin: values[idx].checkin,
           checkout: values[idx].checkout 
         }  ]))

        }
     }

     if(whichbtn===2 ){
      
       const exist2=sendupdate.filter((e)=> e._id === values[idx]._id)
       console.log("h",exist2.length)
      
       if(exist2.length>0){   
         values[idx].checkout= timeIS;    
         sendupdate.map((e,indx)=>{
             var temp= Object.assign({},e);
             console.log("e",e)
            
             if(e._id ===values[idx]._id){
              e.checkout= values[idx].checkout
             }
            
               return e;

            

         })
         console.log("show 1",sendupdate)

        }else{
        
          if(values[idx].checkin){
           values[idx].checkout= timeIS;
            setsendupdate((prev)=>([...prev,{_id:values[idx]._id,
              year,checkin:values[idx].checkin,
            checkout:values[idx].checkout} ]))
          }else{
           alert("pls check in first")
          }

        }
    
     }
     setrecord(values)
     
   }
 const applyal=async()=>{
    const res= await axios.patch(`http://localhost:5000/api/student/ApplyCheckInOut/${WhichCls}`,sendupdate);
    if(res.status==200){
      alert("updated")
    }else{
      alert("not updated")
    }
  }
    useEffect(()=>{
      (async()=>{
        const res= await axios.get(`http://localhost:5000/api/student/getstudents/${WhichCls}`);
      console.log("res",res)
      setrecord(res.data)
      })()
  
    
  },[])
    return(
        <>
        <input type="submit" value="done"
       onClick={()=>applyal()}
       className="bg-indigo-500 px-3 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
        
        <input type="submit" value="Back"
       onClick={()=>setState(false)}
       className="bg-indigo-500 px-3 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
        
        <TableContainer component={Paper} >
          <caption>Class {WhichCls}</caption>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            
          </TableRow>

          <TableRow>
            <TableCell>Roll NO</TableCell>
            <TableCell align="center">Student Name</TableCell>
            <TableCell align="center"> Check IN</TableCell>
            
            <TableCell align="center"> Check out</TableCell>

        
          </TableRow>
        </TableHead>
        <TableBody>
          {
            record?.map((e,idx)=>{
             // console.log("year",e?.yearrecord[Month]?.month_data)
              return(
                <>
<TableRow
key={e._id}
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
  
  <TableCell >
             {e.Rollno}
             </TableCell>
  <TableCell  align="center">
  {e.Name}
             </TableCell>
             <TableCell align="center">
            
             <div className="w-full  flex justify-center">
              {
              e?.checkin?
              <div  className=" flex justify-center items-center mr-2">
                
               <p>{e.checkin}</p>
              </div>:
              <div >

<input type="submit" value="Check IN"
       onClick={()=>{ gettime(idx,1)}}
       className="bg-indigo-500 px-3 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
</div>
     }
              </div>
               
             </TableCell>
             <TableCell align="center">
             <div className="w-full  flex justify-center">
               {
              e?.checkout?
              <div  className=" flex justify-center items-center mr-2">
                
               <p>{e.checkout}</p>
              </div>:
              <div >

<input type="submit" value="Check OUT"
       onClick={()=>{ gettime(idx,2)}}
       className="bg-indigo-500 px-3 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
</div>
     }
              </div>
               
             </TableCell>
             
   
</TableRow>
                </>

              )

            })
          }
       
   

        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default Attd