const mongoose = require("mongoose");
const studentdetail= require("./studentmodel")
const classSchema = new mongoose.Schema(
	{
       ClassName:{
			
			type:String
		},
		year:{
			type: String,
		},
		 attendance:[
            {month:{type:Number},month_record:[
                studentdetail
            ]}
         ]
		
		
		

		
	}
)	

const clschema = mongoose.model("ClassSchema", classSchema);

module.exports = clschema;