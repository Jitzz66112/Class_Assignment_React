console.log("connected")
$("#a").on("click", function() {
    $(".cakeimg").show()
    $(".ccimg").show()
    $(".donimg").show()
    console.log("clicked cake");
});

$("#b").on("click", function() {
    $(".cakeimg").show()
    $(".ccimg").hide()
    $(".donimg").hide()
    console.log("clicked cake");
});
$("#c").on("click", function() {
    $(".ccimg").show()
    $(".cakeimg").hide()
    $(".donimg").hide()
    console.log("clicked cake");
});
$("#d").on("click", function() {
    $(".donimg").show()
    $(".ccimg").hide();
    $(".cakeimg").hide();
    console.log("clicked cake");
});
$("#e").on("click", function() {
    var searching = $("#inputbox").val();
    $("#inputbox").val("");
    console.log(searching)
    if (searching === "cake") {
        $(".cakeimg").show()
        $(".ccimg").hide()
        $(".donimg").hide()
    } else if (searching === "chocolate") {
        $(".ccimg").show()
        $(".cakeimg").hide()
        $(".donimg").hide()
    } else if (searching === "candy") {
        $(".donimg").show();
        $(".ccimg").hide();
        $(".cakeimg").hide();

    }

});