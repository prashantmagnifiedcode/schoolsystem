const mongoose = require("mongoose");

const attendanceschema = new mongoose.Schema(
	{
       Name:{
			
			type:String
		},
		Class:{
			type:String
		},
		Rollno:{
			type: String,
		},
		year:{
			type: String,
		},
		checkin:{
			type: String,
			default:""
		},
		checkout:{
			type: String,
			default:""
		},
		attendance:[
			/*// january(0)->{

			// 	month(1):[
               day1;[
				0:
				1:
				2:
				3:
				4:
				5:
			   ]
               day2;[
				0:
				1:
				2:
				3:
				4:
				5:
			   ]
                    
			]
			
			// }*/
			
			/*// february(1)->{

			// 	month(1):[
               day1;[
				0:
				1:
				2:
				3:
				4:
				5:
			   ]
               day2;[
				0:
				1:
				2:
				3:
				4:
				5:
			   ]
                    
			]
			
			// }*/
		]
		

		
	}
)	

const Attd = mongoose.model("attendance", attendanceschema);

module.exports = Attd;