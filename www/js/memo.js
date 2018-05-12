// This is a JavaScript file

///// Return list of title
function gettitleList() {
    var list = localStorage.getItem("KartSettingTitleList");
    if (list == null) {
        return new Array();
    } else {
        return JSON.parse(list);
    }
}
function unique(array) {
　var storage = {};
　var uniqueArray = [];
　var i,value;
　for ( i=0; i<array.length; i++) {
   　value = array[i];
      if (!(value in storage)) {
      　storage[value] = true;
         uniqueArray.push(value);
       }
   }
   return uniqueArray;
}
///// Return list of title
function gettitleCircuitNameList() {
    var list = localStorage.getItem("KartSettingTitleList");
    if (list == null) {
        return new Array();
    }
    else {
        title = JSON.parse(list);
        var items = [];
        for(key in title){
            items.push(title[key].Circuitid);
        }
        result = unique(items);
        //console.log( result );
        return result;
    }
}

///// Save title
function savetitleList(list) {
    try {
        localStorage.setItem("KartSettingTitleList", JSON.stringify(list));
    } catch (e) {
        alert('Error saving to storage.');
        throw e;
    }
}

///// Add title
function addtitle(CircuitName,datatime,text) {
  var list = gettitleList();
  console.log(list.length);
  if((list.filter(function(item, index){
    if (item.id == datatime) return true;
    else return false;
    }))==false | list.length==0){
    //var time = new Date().toLocaleString();
    list.push({Circuitid:CircuitName, id: datatime, time: datatime, text: text });
    savetitleList(list);
  }
  return list;
}

///// Delete specified title
function deletetitle(id) {
    var list = gettitleList();
    for (var i in list) {
        if (list[i].id == id) {
            list.splice(i, 1);
            break;  // Quit for loop when found
        }
    }
    savetitleList(list);
}
