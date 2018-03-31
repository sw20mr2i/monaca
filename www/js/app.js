// This is a JavaScript file


function getAge(h){
    document.getElementById('myid').innerHTML = 50;
    console.log(document.getElementById("myid").textContent);
};

function new_param(){
    [ {"type":"PlugGap", "param":"80"}, {"type":"ExhaustJoint", "param":"60"},
     {"type":"FrontSprocket", "param":"11"},{"type":"RearSprocket", "param":"80"},
     {"type":"DriverFeeling", "param":"50"}];
//    this.PlugGap = 80;
//    this.ExhaustJoint = 60;
//    this.FrontSprocket = 11;
//    this.RearSprocket = 80;
//    this.DriverFeeling = 50;
};

function set_param(obj,type,param){
    if(type=='PlugGap'){
        obj[0].param = param;
    }else if(type=='ExhaustJoint'){
        obj[1].param = param;
    }else if(type=='FrontSprocket'){
        obj[2].param = param;
    }else if(type=='RearSprocket'){
        obj[3].param = param;
    }else if(type=='FrontColdAirPressure'){
        obj[4].param = param;
    }else if(type=='RearColdAirPressure'){
        obj[5].param = param;
    }else if(type=='FrontHotAirPressure'){
        obj[6].param = param;
    }else if(type=='RearHotAirPressure'){
        obj[7].param = param;
    }else if(type=='FrontTread'){
        obj[8].param = param;
    }else if(type=='RearTread'){
        obj[9].param = param;
    }else if(type=='HandlingFeeling'){
        obj[10].param = param;
    }else if(type=='EngineFeeling'){
        obj[11].param = param;
    }else if(type=='CarburetorLow'){
        obj[12].param = param;
    }else if(type=='CarburetorHi'){
        obj[13].param = param;
    }
};
function get_param(obj,type){
    if(type=='PlugGap'){
        param = obj[0].param;
    }else if(type=='ExhaustJoint'){
        param = obj[1].param;
    }else if(type=='FrontSprocket'){
        param = obj[2].param;
    }else if(type=='RearSprocket'){
        param = obj[3].param;
    }else if(type=='DriverFeeling'){
        param = obj[4].param;
    }else if(type=='FrontColdAirPressure'){
        param = obj[4].param;
    }else if(type=='RearColdAirPressure'){
        param = obj[5].param;
    }else if(type=='FrontHotAirPressure'){
        param = obj[6].param;
    }else if(type=='RearHotAirPressure'){
        param = obj[7].param;
    }else if(type=='FrontTread'){
        param = obj[8].param;
    }else if(type=='RearTread'){
        param = obj[9].param;
    }else if(type=='HandlingFeeling'){
        param = obj[10].param;
    }else if(type=='EngineFeeling'){
        param = obj[11].param;
    }else if(type=='CarburetorLow'){
        param = obj[12].param;
    }else if(type=='CarburetorHi'){
        param = obj[13].param;
    }
    return param;
};


function getDistance(lat1, lng1, lat2, lng2) {
var lat1 = (+lat1),
lng1 = (+lng1),
lat2 = (+lat2),
lng2 = (+lng2),
lat_average = Math.PI / 180 * ( lat1 + ((lat2 - lat1) / 2) ),
lat_difference = Math.PI / 180 * ( lat1 - lat2 ),
lon_difference = Math.PI / 180 * ( lng1 - lng2 ),
curvature_radius_tmp = 1 - 0.00669438 * Math.pow(Math.sin(lat_average), 2),
meridian_curvature_radius = 6335439.327 / Math.sqrt(Math.pow(curvature_radius_tmp, 3)),
prime_vertical_circle_curvature_radius = 6378137 / Math.sqrt(curvature_radius_tmp),
distance = 0,
distance_unit = "";
//２点間の距離をメートルで取得する（単位なし）
distance = Math.pow(meridian_curvature_radius * lat_difference, 2) + Math.pow(prime_vertical_circle_curvature_radius * Math.cos(lat_average) * lon_difference, 2);
distance = Math.sqrt(distance);
distance = Math.round(distance);
// ２点間の距離を単位ありで取得する（1000m以上は、kmで表示）
distance_unit = Math.round(distance);
if (distance_unit < 1000) {
distance_unit = distance_unit + "m";
} else {
distance_unit = Math.round(distance_unit / 100);
distance_unit = (distance_unit / 10) + "km";
}
return {
"distance": distance,
"distance_unit": distance_unit
};
}
function getNearCircuit(lat1, lng1, CircuitList) {
    var near=50000;
    var nearnum=-1;
    var count = 0;
    for(var i=0; i< CircuitList.length; i++){
        tmpnear = getDistance(lat1, lng1, CircuitList[i].lat,Circuit[i].lon)
        if(near>tmpnear.distance){
            near=tmpnear.distance
            nearnum=i
            count = count++;
        }
    }
    return nearnum
}
//function set_param(obj,type,param){
//    if(type=='PlugGap'){
//        obj.PlugGap = param;
//    }else if(type=='ExhaustJoint'){
//        obj.ExhaustJoint = param;
//    }else if(type=='FrontSprocket'){
//        obj.FrontSprocket = param;
//    }else if(type=='RearSprocket'){
//        obj.RearSprocket = param;
//    }else if(type=='DriverFeeling'){
//        obj.DriverFeeling = param;
//    }
//};
//function get_param(obj,type){
//    if(type=='PlugGap'){
//        param = obj.PlugGap;
//    }else if(type=='ExhaustJoint'){
//        param = obj.ExhaustJoint;
//    }else if(type=='FrontSprocket'){
//        param = obj.FrontSprocket;
//    }else if(type=='RearSprocket'){
//        param = obj.RearSprocket;
//    }else if(type=='DriverFeeling'){
//        param = obj.DriverFeeling;
//    }
//    return param;
//};
//

//mobile backendのAPIキーを設定
var ncmb = new NCMB("685944190187950d7131d2bf636e79ebcc415e63be864d86467b6a9725cc2320","2d32489c0a06a6fbb2542311aebe4075a439fde94d20b51b3f3270081ae74321");


//データをmobile backendに保存するメソッド
function saveData(){
    //クラス名を指定して新規クラスを作成
    var Data = ncmb.DataStore("Data");

    //Dataクラスのインスタンスを作成
    var data = new Data();

    //作成したインスタンスのaisatsuというフィールドに文字データを設定
    data.set("aisatsu", "hello, world!");

    //設定したデータをmobile backendに保存
    data.save()
        .then(function(object) {
              //成功する時の処理
              $("#message").html("<p>データ保存に成功!</p>");
          })
        .catch(function(error) {
              //エラーが発生する時の処理
              $("#message").html("error:" + error.message);
          });
}
//データをmobile backendに保存するメソッド
function saveLoad(){
    //クラス名を指定して新規クラスを作成
    var Data = ncmb.DataStore("Data");

    //Dataクラスのインスタンスを作成
    var data = new Data();

    //作成したインスタンスのaisatsuというフィールドに文字データを設定
    data.set("aisatsu", "hello, world!");

    //設定したデータをmobile backendに保存
    data.save()
        .then(function(object) {
              //成功する時の処理
              $("#message").html("<p>データ保存に成功!</p>");
          })
        .catch(function(error) {
              //エラーが発生する時の処理
              $("#message").html("error:" + error.message);
          });
}

//memoアプリから転記
///// Save memo and return to top page
function onSaveBtn() {
    var text = $("#Memo").val();
    if (text != '') {
        // Save to local storage
        addMemo(text);
        // Clear form
        $("#Memo").val("");
        // Initialize top page
        initTopPage();
    }
    $.mobile.changePage("#TopPage", { reverse: true });
}

///// Initialize top page
function initTopPage() {
    $("#TopListView").empty();
    
    var list = getMemoList();
    for (var i in list) {
        var memo = list[i];
        var d = new Date(memo.time);
        var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        
        $li = $("<li><a href='#' class='show'><h3></h3><p></p></a><a href='#' class='delete'>Delete</a></li>");
        $li.data("id", memo.id);
        $li.find("h3").text(date);
        $li.find("p").text(memo.text);
        $("#TopListView").prepend($li);
    }
    if (list.length == 0) {
        $li = $("<li>No memo found</li>");
        $("#TopListView").prepend($li);
    }
    $("#TopListView").listview("refresh");  // Call refresh after manipulating list
}

///// Move to detail page
function onShowLink() {
    var $li = $(this).parent();
    var memoTitle = $li.find("h3").text();
    var memoHtml = $li.find("p").html().replace(/\n/g, "<br>");
    
    $("#ShowPage h1").text(memoTitle);
    $("#ShowPage p").html(memoHtml);
    $.mobile.changePage("#ShowPage");
}

///// Delete memo
function onDeleteLink() {
    if (!confirm("Are you sure to delete this memo?")) {
      return;
    }
    var $li = $(this).parent();
    var id = $li.data("id");
    deleteMemo(id);
    
    initTopPage();
    
    // Return to top
    $.mobile.changePage("#TopPage", { reverse: true });
}

///// Called when app launch
function onReady() {
    initTopPage();
    $("#SaveBtn").click(onSaveBtn);
    $("#TopListView").on("click", "a.show", onShowLink);
    $("#TopListView").on("click", "a.delete", onDeleteLink);
}

//$(onReady); // on DOMContentLoaded


