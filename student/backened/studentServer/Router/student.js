const router = require("express").Router();
const {Addstudent,getstudents,ApplyCheckInOutUpdate,gettotalstudents,FetchStudentRecord,insertstudents} = require("../controller/studentController")
 router.post("/addstudent",Addstudent)
 router.get("/getstudents/:cls",getstudents)
 router.patch("/ApplyCheckInOut/:cls",ApplyCheckInOutUpdate)
 router.get("/FetchStudentRecord/:Roll",FetchStudentRecord)
 router.get("/gettotalstudents",gettotalstudents)
 router.post("/insertstudents/:cls/:yr/:mth/:dy",insertstudents)
 


module.exports= router