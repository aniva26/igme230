<?php
function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$name = test_input($_POST['name']);
$email = test_input($_POST['email']);
$message = test_input($_POST['message']);

//$destination_email = "aln3339@g.rit.edu";
$destination_email = "aln3339@g.rit.edu";

$email_subject = "Anika Portfolio - Visitor Contact";
$email_body = "Visitor's Name $name\n";
$email_body .= "Visitor's Email $email\n";
$email_body .= "Visitor's Message $message\n";

mail($destination_email, $email_subject, $email_body);
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Thanks for Contacting Me</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="portfolio.css">
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700&amp;subset=latin-ext" rel="stylesheet">
</head>

<body>
    <div class="portcontent">
        <div class="logo">
            <a href="index.html">
                <h1>AnikaNiva</h1>
            </a>
        </div>

        <div class="topbar">

        </div>

        <div class="nav" id="myNav">
            <!--            <a href="javascript:void(0);" class="icon" onclick="openHam()">-->
            <h3 class="icon" onclick="openHam()">menu</h3>
            <div class="nav1 navhov">
                <h3><a href="#">Portfolio</a></h3>
            </div>
            <div class="nav2box">
                <div class="nav2">
                    <h4><a href="uiux.html">UI/UX</a></h4>
                </div>
                <div class="nav2">
                    <h4><a href="anim.html">Animation</a></h4>
                </div>
                <div class="nav2">
                    <h4><a href="coding.html">Coding</a></h4>
                </div>
                <div class="nav2">
                    <h4><a href="graphic.html">Graphics</a></h4>
                </div>
            </div>
            <div class="nav1">
                <h3><a href="resume.html">Resume</a></h3>
            </div>
            <div class="nav1">
                <h3><a href="contact.html">Contact</a></h3>
            </div>

        </div>



        <div class="contacts">
            <div class="contitle">
                <h3>Thank you for contacting me! I'll get back to you ASAP!</h3>
            </div>

        </div>

        <script>
            function openHam() {
                var x = document.getElementById("myNav");
                if (x.className === "nav") {
                    x.className += " responsive";
                    document.getElementsByClassName("logo")[0].style.display = "none";
                } else {
                    x.className = "nav";
                    document.getElementsByClassName("logo")[0].style.display = "block";
                }
            }

        </script>
</body>
