$(function () {
    $('.mainmenu').on('click', function () {
        $(this).next('.submenu').slideToggle();
    });

    let text = ("article0.txt") // sets default verse element
    $("article").load(text); // retrieves only default element

    $("input[type='radio']").click(function () {
        text = $(this).val();
        $("article").load(text);
    });

//    $("#clickme").click(function() {
//    $('#count').html(function(i, val) { return +val+1 });
//}
});


var counter = 0;

function countit(){
    counter+=1;
    document.getElementById("count").innerHTML=counter;
}
