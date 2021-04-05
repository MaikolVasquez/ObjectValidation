//collection is the array with any objects, an example : [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }]
//source is the object that you what to know if is in collection, an example : { "apple": 1, "cookie": 2 }
//theObjectIsInside will return an array whit the objects thats contains the same parameters that source

function theObjectIsInside(collection, source) {
    var arr = [];
      let sourceKeys = Object.keys(source);
      let sourceValues = Object.values(source);
      for(let i=0;i<collection.length;i++){    
      
        let acum = 0;
  
        for(let j=0;j<sourceKeys.length;j++){
  
          if(collection[i].hasOwnProperty(sourceKeys[j])
                        && 
            collection[i][sourceKeys[j]] == sourceValues[j]){
            acum = acum + 1;
          }else{
            
          }      
        }      
  
        if(acum >= sourceKeys.length){
          arr.push(collection[i]);
        }
      }                    
    return arr;
  }

  export default theObjectIsInside;