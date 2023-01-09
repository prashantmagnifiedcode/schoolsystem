const Attd=require("../model/studentmodel")

module.exports={
    Addstudent:async(req,res)=>{
      const insertdata= req.body;
      
       const rs= new Attd(insertdata);
       const done=await rs.save()
       if(!done) res.status(4040).send();
       else res.status(200).send()
    },
    gettotalstudents:async(req,res)=>{
      
       const rs= await Attd.countDocuments()
      console.log(rs)
       if(!rs) res.sendStatus(404);
       else res.status(200).send({total:rs})
    },
    getstudents:async(req,res)=>{
       const Class= req.params.cls;
       console.log("class ",Class)
       const rs= await Attd.find({Class})
  
       if(!rs) res.status(4040).send();
       else res.status(200).send(rs)
    },
    FetchStudentRecord:async(req,res)=>{
       const Rollno= req.params.Roll;
    
       const rs= await Attd.find({Rollno})
       if(!rs) res.status(4040).send();
       else res.status(200).send(rs)
    },
    ApplyCheckInOutUpdate:async(req,res)=>{
         const result= req.body;
         const Class= req.params.cls;
         for(var i =0;i< result.length;i++){

             
             const{_id,Month,day,checkin,checkout}= result[i];
      const ress=  await Attd.updateOne({_id},{$set:{checkin,checkout}})
    
   



        }

         res.status(200).send()


    },
    insertstudents:async(req,res)=>{
        // const Class= req.params.cls;
        // const year= req.params.yr;
        // const month= req.params.mth;
        // const day= req.params.dy;
        // // const result= await Attd.find({year,'yearrecoder.month':month,})
        // // console.log(result)

    }
}