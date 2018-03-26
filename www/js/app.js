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
    }
    return param;
};

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


