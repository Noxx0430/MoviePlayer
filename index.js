setInterval(function(){
    const week = ("月火水木金土日").split("");
    const time = new Date();
    const y = time.getFullYear();
    const m = ("00" + (time.getMonth() + 1)).slice(-2);
    const d = ("00" + time.getDate()).slice(-2);
    const w = week[time.getDay()];
    const h = ("00" + time.getHours()).slice(-2);
    const mi = ("00" + time.getMinutes()).slice(-2);
    const s = ("00" + time.getSeconds()).slice(-2);
    const mil = ("000" + time.getMilliseconds()).slice(-3);
    $(".time").text(y + "年" + m + "月" + d + "日（" + w + "）" + h + "時" + mi + "分" + s + "秒" + mil)
},1)

$(window).on("load", function(){
    const arr = ("①②③④⑤⑥⑦⑧⑨").split("");
    for(let i = 0; i < $(".view").length; i++){
        const num = i + 1;
        $(".view" + num + "").append("<div style=\"margin-top: 20px; z-index: -10;\">" + arr[i] + "</div>");
    }

    const url1 = localStorage.getItem("url1");
    const url2 = localStorage.getItem("url2");
    const url3 = localStorage.getItem("url3");
    const url4 = localStorage.getItem("url4");
    const url5 = localStorage.getItem("url5");
    const url6 = localStorage.getItem("url6");
    const url7 = localStorage.getItem("url7");
    const url8 = localStorage.getItem("url8");
    const url9 = localStorage.getItem("url9");

    $(".url1").val(url1);
    $(".url2").val(url2);
    $(".url3").val(url3);
    $(".url4").val(url4);
    $(".url5").val(url5);
    $(".url6").val(url6);
    $(".url7").val(url7);
    $(".url8").val(url8);
    $(".url9").val(url9);

    $(".url").trigger("change");
})

$(".menu").on("click", function(){
    $(".menu_content").slideToggle(300);
})

$(".url").on("change", function(){
    const cl = Number($(this).prop("outerHTML").substr(33, 1));
    const url = $(this).val();
    const id1 = url.replace(/.*shorts\/(.*)/, "$1");
    const id = id1.replace(/.*v=(.*)/, "$1");
    localStorage.setItem("url" + cl +"", url);
    $(".iframe" + cl +"").remove();
    $(".view" + cl +"").append("<iframe src=\"https://www.youtube.com/embed/" + id + "?autoplay=1&meta=1\" frameborder=\"0\" allowfullscreen class=\"iframe" + cl + "\"></iframe>");
})

$(".reload").on("click", function(){
    location.reload();
})

$(".remove").on("click", function(){
    $(".url").val("");
    $(".url").trigger("change");
})

$(".exm").on("click", function(){
    $(".exm_content").slideToggle(300);
})