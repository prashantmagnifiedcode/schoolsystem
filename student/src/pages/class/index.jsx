import React,{useState,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
const ClassRooms=({setWhichCls,setState})=>{
    const classarrray=[
        {clsname:"I"},
        {clsname:"II"},
        {clsname:"III"},
        {clsname:"IV"},
        {clsname:"V"},
        {clsname:"VI"},
        {clsname:"VIT"},
    ]
const handleInsert=async()=>{
  const res= await axios.post(`http://localhost:5000/api/student/insertstudents/${2}/${2023}/${0}/${7}`);
  if(res.status==200){
    alert("add inert")
  }
  
}
    return(
        <>
      
        
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            
          </TableRow>

          <TableRow>
            
            <TableCell align="center">ClASS</TableCell>
            <TableCell align="center"> Take Attendance</TableCell>
            
           
        
          </TableRow>
        </TableHead>
        <TableBody>
         {
            classarrray.map((e,idx)=>{
                return(
                    <>
<TableRow
key={idx}
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
  
  <TableCell align="center" >
          {e.clsname}
             </TableCell>
  
             <TableCell align="center">
             <div className="w-full  flex justify-center">
              
              <div >

<input type="submit" value="Enter In Class"
       onClick={()=>{
         setState(true),
         setWhichCls(idx+1)
       }}
       className="bg-indigo-500 px-3 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
<input type="submit" value="Todays Attendance"
       onClick={()=>{
         handleInsert()
       }}
       className="bg-indigo-500 px-3 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"/>
</div>
     
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
export default ClassRooms