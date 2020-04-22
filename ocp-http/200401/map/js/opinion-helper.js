function opinionContentSetWidth() {
    var b = $("opinionFrame").getWidth();
    var a = b - 12;
    $("opinionContent").setStyle({
        width: a + "px"
    })
};