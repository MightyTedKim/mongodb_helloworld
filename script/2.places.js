//https://blog.naver.com/deet1107/222164656109

// 좌표 삽입 후 geodata라고 선언
//1-1
db.places.insertOne({
  name: '경복궁',
  location: {
   type:"Point", 
   coordinates: [126.97688003770476, 37.5779432804558]
  }
})

//1-2
db.places.insertOne({
  name: '창덕궁',
  location: {
   type:"Point", 
   coordinates: [126.99119230489845,37.57903163920996]
  }
 })
 
 //1-3
 db.places.insertOne({
  name: '덕수궁',
  location: {
   type:"Point", 
   coordinates: [126.97497038931168, 37.5662398085733]
  }
 })
 
 //1-4
 db.places.insertOne({
  name: '경희궁',
  location: {
   type:"Point", 
   coordinates: [126.96883349497526, 37.57072989147147] 
  }
 })
 
 //창덕궁 근처 2km 이내 조회
 db.places.find({
  location: {
    $geoWithin: {
      $centerSphere: [
         [126.99119230489845,37.57903163920996],
          2 / 6378.1
      ]
    }
  }
})

//폴리건 내에 places의 좌표가 있는지 확인
const a1 = [126.97177, 37.58086]
const a2 = [126.99207, 37.58202]
const a3 = [126.97216, 37.5646]
const a4 = [126.99422, 37.56505]

db.places.find({
  location: {
   $geoWithin: {
     $geometry: {
       type:"Polygon",
       coordinates: [[a1, a2, a4, a3, a1]] 
     } 
   }
  }
 }).pretty()
 

//////////////////////////////////////////
//2 폴리건을 선언하고, 특정 좌표가 포함되는지 확인
//////////////////////////////////////////
const a1 = [126.97177, 37.58086]
const a2 = [126.99207, 37.58202]
const a3 = [126.97216, 37.5646]
const a4 = [126.99422, 37.56505]

db.areas.insertOne({
  name: "검색범위",
  area: {
    type:"Polygon",
    coordinates: [[a1, a2, a4, a3, a1]]
  } 
})


//polygon 내의 좌표
db.areas.find({
  area: {
    $geoIntersects: {
      $geometry: {
        type: "Point",
        coordinates: [126.99119230489845,37.57903163920996] //창덕궁
      }
    } 
  }
})
