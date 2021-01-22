///////////////////////
//1. Create
///////////////////////
//1.1 _id
db.test.insert({title:'test1'});
db.test.insert({title:'test2', _id: ObjectId('6003fc68fc0a4552446756d3')});
db.test.insert({title:'test3', _id:'stringId'});
//1.2 etc
db.test.insert({
  title:'test4', 
  tag: ['a', 'b'], 
  stringDate: Date(), 
  specificISO: ISODate("2020-12-01T00:00:00.000"), 
  currentISO: ISODate()
});

///////////////////////
//2 Read
///////////////////////
// 2.1 _id
db.test.find({"title": 'test1'});
db.test.find({"_id": ObjectId('6003fc68fc0a4552446756d3')});
db.test.find({"_id": 'stringId'});
// 2.2 etc
db.test.find( { tag: { $in: [ 'a' ] } } )
db.test.find( { tag: { $in: [ 'a' ] } }, {title:1, tag: 1, _id:0} )
db.test.find( { tag: { $in: [ 'a' ] } }, {title:1, _id:0} )

///////////////////////
//3 update
///////////////////////
db.test.updateOne({title :"test1"},
  {
    $set: {
      hobbies: [
        {title: "Sports", frequency: 5}
      , { title : "cooking", frequency: 3}
      , {title: "hiking", frequency: 1}
    ]
  }
})


db.users.updateOne({name :"Chris"},
  {
    $set: {
      hobbies: [
        {title: "Sports", frequency: 5}
      , { title : "cooking", frequency: 3}
      , {title: "hiking", frequency: 1}
    ]
  }
})

///////////////////////
//4 delete
///////////////////////
db.test.deleteOne({})
db.test.deleteMany({})
db.test.dropIndex({})


/////////////////////////
//Extra
///////////////////////
alltest = db.test.find();
while (alltest.hasNext()) {
   printjson(alltest.next());
}
 