var fs=require("fs")


resultArray=[]
resultArray=getValueByKey('./OfferOnboarding.json','approverEmail')
console.log(resultArray[2])


function getValueByKey(path,value)
{
    var jsonContents = fs.readFileSync(path);
    var jsonObj=JSON.parse(jsonContents)
    var result   
       for(key in jsonObj)
       {
          if(key ===value)
          {
            result=jsonObj[key]

          }
       }
    
    return result
    
}
