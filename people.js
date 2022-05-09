//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/peopledb');

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const People = mongoose.model("People",peopleSchema)

const people = new People({
    name:"Sakshi",
    age:20
});

people.save();