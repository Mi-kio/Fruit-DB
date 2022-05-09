//jshint esversion:6 

const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating:Number,
  review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema)

const fruit = new Fruit ({
  name:"Apple",
  rating:7,
  review:"pretty solid as a fruit"
});

//fruit.save();

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

const kiwi = new Fruit({
  name:"Kiwi",
  score:10,
  review:"Bohot bekar"
});

const orange = new Fruit({
  name:"tangerine",
  score:10,
  review:"sour"
});

const bananas = new Fruit({
  name:"banana",
  score:10,
  review:"Ok ok"
});

// Fruit.insertMany([kiwi,orange,bananas],function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("logged")
//   }
// })

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }
  else{
    console.log(fruits);
  }
});