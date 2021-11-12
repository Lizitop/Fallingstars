$(document).ready(function(){
    // 点击切换搜素引擎
    // bing.com
    $("span.bing").click(function(){
        $('.searchform').attr("action","https://cn.bing.com/search");
    });
    //baidu.com
    $("span.baidu").click(function(){
        $('.searchform').attr("action","https://www.baidu.com/s");
    });
    // Google.com
    $("span.google").click(function(){
        $('.searchform').attr("action","https://www.google.com/search");
    });

    //js获取系统当前时间
    var time = new Date();//获取系统当前时间
    var hour= time.getHours();//得到小时数
    var minute= time.getMinutes();//得到分钟数

    // 当分钟数小于10时在minute前面加上0
    // if (minute<10) {
    //     minute='0'+minute;
    //     return minute;
    // }

    document.getElementById("spanhours").innerHTML=hour;
    document.getElementById("spanminute").innerHTML=minute;
});