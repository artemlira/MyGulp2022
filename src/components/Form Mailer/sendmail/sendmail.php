<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->IsSMTP(); //Send using SMTP;
$mail->Host = 'smtp.gmail.com'; //Set the SMTP server to send throught
$mail->SMTPAuth = true; //Enable SMTP authentification
$mail->Username = 'artemliradev@gmail.com'; //SMTP username (email)
$mail->Password = 'tvmfgilgywtlageu'; //SMTP password (email, password)
$mail->Port = '587';
$mail->SMTPSecure = 'TLS';

//From SMTP username (email)
$mail->setFrom('artemliradev@gmail.com', 'Send form test');
//To...
$mail->addAddress('9149444@gmail.com');
//Subject
$mail->Subject = 'E-mail from Artem';

//Body
$body = '<h1>Hi it`s Artem</h1>';

if(trim(!empty($_POST['name']))){
  $body .= "<p>Name: <strong>".$_POST['name']."</strong></p>"
}

if(trim(!empty($_POST['email']))){
  $body .= "<p>E-mail: <strong>".$_POST['email']."</strong></p>"
}

if(trim(!empty($_POST['message']))){
  $body .= "<p>Message: <strong>".$_POST['message']."</strong></p>"
}

if(trim(!empty($_POST['like']))){
  $body .= "<p>Some question? <strong>".$_POST['like']."</strong></p>"
}

//Add file
if(trim(!empty($_FILES['image']['tmp_name']))){
  $fileTmpName = $_FILES['image']['tmp_name'];
  $fileName = $_FILES['image']['name'];
$mail->addAttachment($fileTmpName, $fileName);
}

$mail->Body = $body;

//Sending
$mail->send();
$mail->smtpClose();
?>
