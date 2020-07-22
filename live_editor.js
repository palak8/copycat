$(".togglebutton").hover(function(){
    $(this).addClass("highlightedButton");
},function(){
    $(this).removeClass("highlightedButton");
});

$(".togglebutton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var panelid = $(this).attr("id") + "panel";
    $("#" + panelid).toggleClass("hidden");
    var numberofactivepanel= 4- $(".hidden").length;
    $(".panel").width(($(window).width() / numberofactivepanel )-10);

});

$(".panel").height($(window).height()-$("#header").height()-10);

$(".panel").width(($(window).width() /2 )-10);

$("iframe").contents().find("html").html("<html><head><style type='text/css' >"+ $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() + "</body></html>" );

document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());

$("textarea").on('change keyup paste', function() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css' >"+ $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() + "</body></html>" );
    document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
});

 