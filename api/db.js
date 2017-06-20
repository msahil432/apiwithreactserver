'use strict';
//database setup
import mongoose from 'mongoose';
import deasync from 'deasync';

mongoose.connect("mongodb://sahil432:432sahil@ds131312.mlab.com:31312/heroku_m42thbrm");
console.log("Database Url Connected");
const Schema=mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const dataSchema = new Schema({
	name: {type:String},
	age: {type:Number},
	dob :{type:Date},
	address : [{type:String}]
		});
const dataTable = mongoose.model('dataTable', dataSchema, 'dataTable');

module.exports ={
	//dummy
	dummy : function(){
		return "I am dummy";
	},
	get:function() {
		let data;
		dataTable.find({}, function(err, result){
			if(err){
				console.log(err);
				data =[]
			}else{
				data = []
				for(var i=0; i<result.length; i++)
				data[i] = {"name": result[i].name,
						"age":result[i].age,
						"dob" : result[i].dob,
						"address" : result[i].address[0]
						}
			}
		});
		deasync.loopWhile(function(){
			return data===undefined;
		})
		return data;
	},
	post:function(data){
		const newData = new dataTable();
		newData.name = data.name;
		newData.age = data.age;
		newData.dob = data.dob;
		newData.address = data.address;
		newData.save(function(err){
			if(err){
				console.log(err);
			}
		});
	}
};
