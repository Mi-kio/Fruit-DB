//jshint esversion:6 

const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, "Please check your data entry no name specified"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema)

const fruit = new Fruit ({
  name:"Apple",
  rating:10,
  review:"pretty solid as a fruit"
}

);

const pineapple = new Fruit({
  name:"pineappale",
  score:9,
  review:"tasty fruit"
});

pineapple.save();

const raspberry = new Fruit({
  name:"raspberry",
  score:10,
  review:"sour and sweet"
});

raspberry.save();

// fruit.save();

const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favfruit:fruitSchema
});

const People = mongoose.model("People",peopleSchema)

const people = new People(
  {
  name:"Astha",
  age:12,
  favfruit:pineapple
}
);
 

people.save();

const sakshi = new People({
  name:"Sakshi",
  age:20,
  favfruit:raspberry
});

sakshi.save();

// const kiwi = new Fruit({
//   name:"Kiwi",
//   score:10,
//   review:"Bohot bekar"
// });

// const orange = new Fruit({
//   name:"tangerine",
//   score:10,
//   review:"sour"
// });

// const bananas = new Fruit({
//   name:"banana",
//   score:10,
//   review:"Ok ok"
// });

// Fruit.insertMany([kiwi,orange,bananas],function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("logged")
//   }
// })

// Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   }
//   else{
//     fruits.forEach(function(fruit){
//       console.log(fruit.name)
//     });
//     // console.log(fruits);
//   }
// });

// Fruit.updateOne(
//   {
//   _id:"627944497b50d7ea08009ac3"}, 
//   {name:"Peach"},
//   function(err){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log("Success");
//     }
//   })

  //delete a particular record

  // Fruit.deleteOne({
  //   name:"Peach"
  // },function(err){
  //   if(err)
  //   console.log(err);
  //   else{
  //     console.log("Scuess");
  //   }
  // }
  // )

  People.deleteMany({
    name:"Sakshi",
  },
    function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("deleted");
      
    }
  })



