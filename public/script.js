// check off specific Todos by clicking
$("ul").on("click", "li", function () {
    // if the text is gray, turns it into black
    // else turns it to gray with a line-through
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }

    $(this).toggleClass("completed")
});

//click on trash icon to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();   // this refer to li not the span
    }); // remove the entire li
    event.stopPropagation(); // stop the event from bubbling out to the parent 
});

$("input[type = 'text']").keypress(function (event) {
    if (event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");

        // create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-pencil-alt").click(function () {
    $("input[type ='text']").fadeToggle(500);
});

