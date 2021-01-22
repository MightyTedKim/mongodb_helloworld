//1. user import
// import : users
db.users.updateMany(
   {"hobbies.title":"Sports"},
   {$set : {isPropery: true}}
)

db.users.updateOne( 
   {name:"Manuel"}, 
   {$inc: { age : 2}} 
)

 
// import : people
// group by
db.people.aggregate([
   { 
      $group: { 
         _id: { state : "$location.state"}, 
         totalPeople: { $sum : 1 }
      }
   }
])