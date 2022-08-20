function compareJson(ob1,ob2){
    key1 = Object.keys(ob1)
    key2 = Object.keys(ob2)
    if(key1.length == key2.length){
      for(var key of key1){
        if (ob1[key] != ob2[key]){
            return false
        }
      }
    }
    return true
  }
  var ob1 = {
    name : "person1",
    age : 5
  }
  var ob2 = {
    age : 5,
    name : "person2"
  }
  
  result = compareJson(ob1,ob2)
  console.log(result)
  
  