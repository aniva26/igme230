/* Don't use <script> tags in a linked js file! */
$(function () {
    $('.menuitem').on('click', function () {
        $(this).next('.submenu').slideToggle();
    });

    let text = ("content1.txt") // sets default verse element
    $("#choose-content").val(text); // changes menu option to default
    $("#content").load(text); // retrieves only default element

    $("#choose-content").change(function () {
        text = $(this).val();
        $("#content").load(text);
    });
});
