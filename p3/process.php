<?php
function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$name = test_input($_GET['name']);
$email = test_input($_GET['email']);
$message = test_input($_GET['message']);

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
        <title>Anika Niva - Design Portfolio</title>
        <link rel="stylesheet" href="assets/css/nav.css">
        <link rel="stylesheet" href="assets/css/content.css">
        <link href="https://fonts.googleapis.com/css?family=Karla:400,700&amp;subset=latin-ext" rel="stylesheet">
        <script>
            function goToPage2() {
                var selections = document.getElementById('pageSelect');
                var options = selections.getElementsByTagName('option');
                var optionsCount = options.length;
                for (var i = 0; i < optionsCount; i++) {
                    if (options[i].selected == true) {
                        window.location = options[i].value;
                    }
                }
            }

        </script>
    </head>


    <nav>
        <div class="logo">
            <a href="index.html">
                <img src="assets/media/logo.png">
            </a>
        </div>
        <div class="navi">
            <input type="checkbox" class="navcheckbox" id="navtoggle">

            <label for="navtoggle" class="navbutton">
            <span class="hamburger"></span>
        </label>
            <div class="navbg"></div>


            <div class="navbox">
                <div class="navbuts">
                    <div class="portfolionav">
                        <a href="#">
                            <h2>Portfolio</h2>
                        </a>
                    </div>
                    <div class="hiddennav">
                        <a href="uiux.html">
                            <h3>UI/UX</h3>
                        </a>
                        <a href="anim.html">
                            <h3>Animation</h3>
                        </a>
                        <a href="coding.html">
                            <h3>Coding</h3>
                        </a>
                        <a href="graphic.html">
                            <h3>Graphics</h3>
                        </a>
                    </div>
                    <div class="resumenav">
                        <a href="resume.html">
                            <h2>Resume</h2>
                        </a>
                    </div>
                    <div class="contactnav">
                        <a href="contact.html">
                            <h2>Contact</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="contentcontact">
        <div class="contitle">
            <h3>Thanks so much for reaching out! I'll get back to you ASAP!</h3>
        </div>
    </div>

    <footer>
        <form name="form2">
            <select id="pageSelect" size="1" onchange="goToPage2()">
                    <option selected value="none">Select a page and go</option>
                    <option value="uiux.html">UI/UX Design Portfolio</option>
                    <option value="anim.html">Animation Portfolio</option>
                    <option value="coding.html">Coding Portfolio</option>
                    <option value="graphic.html">Graphic Design Portfolio</option>
                    <option value="resume.html">Resume</option>
                    <option value="contact.html">Contact Me</option>
                    <option value="documentation.html">Documentation</option>
                </select>
        </form>
    </footer>

    </html>
