
var xls_json  = require(	'../node_modules/node-excel-to-json');
module.exports = {

 
  isEquals : function( x, y ) {

    if ( x === y ) {
        return true;
    }

    if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) {
        return false;
    }

    if ( x.constructor !== y.constructor ) {
        return false;
    }

    for ( var p in x ) {
        if ( x.hasOwnProperty( p ) ) {
            if ( ! y.hasOwnProperty( p ) ) {
                return false;
            }

            if ( x[ p ] === y[ p ] ) {
                continue;
            }

            if ( typeof( x[ p ] ) !== "object" ) {
                return false;
            }

            if ( !equals( x[ p ],  y[ p ] ) ) {
                return false;
            }
          }
        }

        for ( p in y ) {
          if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) {
            return false;
          }
        }
        return true;
  },


  isArray : function (myArray) {
      return myArray.constructor.toString().indexOf("Array") > -1;
  },

 
  getObjValues : function (myjson){
    var outValuesInArray = [];

  	 if(this.isArray(myjson)){
    		json = myjson[0];
    	} else {json = myjson;}
    	for (var x in json){
        	outValuesInArray.push(json[x]);
        	}
        	//console.log(outValuesInArray);
        	return outValuesInArray;
  },

  
  getValueByKey : function (jsonObj, jsonKey){

    	//this.jsonKey = jsonKey;
    	var keyValue = "";

    	if(this.isArray(jsonObj)){
    		var json = jsonObj[0];
    	} else {json = jsonObj;}
    	//console.log(json);
    	if(json.hasOwnProperty(jsonKey.toUpperCase())){
    		return keyValue = json[jsonKey.toUpperCase()];
    	} else if(json.hasOwnProperty(jsonKey.toLowerCase())){
    		return keyValue = json[jsonKey.toLowerCase()];
    	} else if (json.hasOwnProperty(jsonKey)){
    		return keyValue = json[jsonKey];
    	} else {return undefined;}
  },

  
  isContains : function (json, value) {
  	let contains = false;
    Object.keys(json).some(key => {
  		contains = typeof json[key] === 'object' ? isContains(json[key], value) : json[key] === value;
  	  return contains;
  	});
    return contains;
  },


  getObjFromList : function (jsonArray, KeyName, valueToSearch){
  	for(var i = 0; i < jsonArray.length; ++i){
     		if (jsonArray[i].hasOwnProperty(KeyName) && (jsonArray[i][KeyName] == valueToSearch)){
      		//console.log(jsonArray[i]);
      		return jsonArray[i];
      	} else {continue;}

  	}
  },

  
  findObjects : function (obj, targetProp, targetValue, finalResults) {

    function getObject(theObject) {
      let result = null;
      if (theObject instanceof Array) {
        for (let i = 0; i < theObject.length; i++) {
          getObject(theObject[i]);
        }
      } else {
        for (let prop in theObject) {
          if (theObject.hasOwnProperty(prop)) {
            //console.log(prop + ': ' + theObject[prop]);
            if (prop === targetProp) {
              //console.log('--found id');
              if (theObject[prop] === targetValue) {
                //console.log('----found porop', prop, ', ', theObject[prop]);
                finalResults.push(theObject);
              }
            }
            if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
              getObject(theObject[prop]);
            }
          }
        }
      }
    }
    getObject(obj);
  },


  
  excel_getTableRow : function (fileName, sheetName, columnName, where, callback){
    	xls_json(fileName, {
        'convert_all_sheet': false,
        'return_type': 'Object',
        'sheetName': sheetName
      }, function(err, result) {
      		  if(err) {
        		    console.error(err);
      		  } else if (result){
      			     for(var row = 0; row < result.length; ++row){
       				         if (result[row].hasOwnProperty(columnName) && (result[row][columnName] == where)){
        				             //console.log(result[row]);
        				              callback(result[row]);
        			          }
    			        }
        	    }
    	    });
  },

 
  excel_getTableRows : function (fileName, sheetName, callback){
      xls_json(fileName, {
        'convert_all_sheet': false,
        'return_type': 'Object',
        'sheetName': sheetName
      }, function(err, result) {
    		    if(err) {
      		      console.error(err);
    		    } else if (result){
    			      //console.log(result);
    			      return callback(result);
      		    }
  	    });
  },

  
  excel_getAllSheetData : function (fileName, callback){
      xls_json(fileName, {
        'convert_all_sheet': true,
        'return_type': 'Object',
      }, function(err, result) {
    		    if(err) {
      		      console.error(err);
    		    } else if (result){
    			      //console.log(result);
    			      return callback(result);
      		    }
  	    });
  },

  
  multiSelector : function (selectorList) {
    for (var lookSelector in selectorList){
      var elem = browser.element(selectorList[lookSelector]);
      if (elem.type != "NoSuchElement" && elem.state != "failure"){
        //console.log("the right selector is: "+elem.selector);
        return elem.selector;
      } else {console.log("this selector does not exists: "+elem.selector);}
    }
  },


  getTimeStamp : function () {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' +
            (now.getDate()) + '/' +
              now.getFullYear() + " " +
              now.getHours() + ':' +
              ((now.getMinutes() < 10)
                  ? ("0" + now.getMinutes())
                  : (now.getMinutes())) + ':' +
               ((now.getSeconds() < 10)
                  ? ("0" + now.getSeconds())
                  : (now.getSeconds())));
  },


  elementWait : function (locater, timeout) {
    try {

      browser.waitForExist(locater, timeout);

      } catch (e) {
        expect(false).toBe(true);
        throw new Error('Timed out while waiting for control to load : ' + e);
      }
    },

} // end of module
