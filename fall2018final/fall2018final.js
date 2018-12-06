$(function () {
    $('.mainmenu').on('click', function () {
        $(this).next('.submenu').slideToggle();
    });

    let text = ("article0.txt") // sets default verse element
//    $("#choose-content").val(text); // changes menu option to default
    $("article").load(text); // retrieves only default element

    $("input[type='radio']").click(function () {
        text = $(this).val();
        $("article").load(text);
    });
});
