<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header('HTTP/1.0 403 Forbidden');
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to autoload.php from Composer's vendor directory

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer();

try {
    $inputData = json_decode(file_get_contents('php://input'));

    if (isset(
        $inputData->firstName,
        $inputData->lastName,
        $inputData->companyName,
        $inputData->email,
        $inputData->phoneNumber,
        $inputData->eventLocation,
        $inputData->eventDate,
        $inputData->speakerBudget,
    )) {
        //Server settings
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth = $_ENV['SMTP_AUTH'];
        $mail->Username = $_ENV['SMTP_USERNAME'];
        $mail->Password = $_ENV['SMTP_PASSWORD'];
        $mail->Port = $_ENV['SMTP_PORT'];
        $mail->SMTPSecure = $_ENV['SMTP_SECURE'];

        //Recipients
        $mail->setFrom($_ENV['MAIL_FROM'], $_ENV['MAIL_FROM_NAME']);
        $mail->addAddress('chris.q@pareto-economics.com');     //Add a recipient
        $mail->addAddress('klisman.m@pareto-economics.com');     //Add a recipient

        //Content
        $firstName = (isset($inputData->firstName)) ? $inputData->firstName : '';
        $lastName = (isset($inputData->lastName)) ? $inputData->lastName : '';
        $companyName = (isset($inputData->companyName)) ? $inputData->companyName : '';
        $email = (isset($inputData->email)) ? $inputData->email : '';
        $phoneNumber = (isset($inputData->phoneNumber)) ? $inputData->phoneNumber : '';
        $eventLocation = (isset($inputData->eventLocation)) ? $inputData->eventLocation : '';
        $eventDate = (isset($inputData->eventDate)) ? $inputData->eventDate : '';
        $speakerBudget = (isset($inputData->speakerBudget)) ? $inputData->speakerBudget : '';

        $emailContent = '<!DOCTYPE html>
            <html>
                <head>
                    <title>Event Details - Pareto Economics</title>
                </head>
                <body>
                    <div style="background-color: #f8f8f8; padding: 20px;">
                        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
                            <h2 style="color: #0056b3;">Event Details - Pareto Economics</h2>
                            <p><strong>First Name:</strong> '.$firstName.'</p>
                            <p><strong>Last Name:</strong> '.$lastName.'</p>
                            <p><strong>Company/Organisation:</strong> '.$companyName.'</p>
                            <p><strong>Business Email:</strong> '.$email.'</p>
                            <p><strong>Phone Number:</strong> '.$phoneNumber.'</p>
                            <p><strong>Event Location:</strong> '.$eventLocation.'</p>
                            <p><strong>Event Date:</strong> '.$eventDate.'</p>
                            <p><strong>Speaker Budget:</strong> '.$speakerBudget.'</p>
                        </div>
                    </div>
                </body>
            </html>
        ';

        $mail->isHTML(true);
        $mail->Subject = 'Event Details - Pareto Economics';
        $mail->Body    = $emailContent;

        if ($mail->send()) {
            $responseCode = 200;
            $response = [
                'status' => true,
                'message' => 'Thank You! Your request has been sent.',
            ];
        } else {
            $responseCode = 400;
            $response = [
                'status' => false,
                'message' => 'There was a problem with your submission, please try again.'
            ];
        }
    } else {
        $responseCode = 400;
        $response = [
            'status' => false,
            'message' => 'Please fill all the mandatory fields.'
        ];
    }
} catch (Exception $e) {
    $responseCode = 400;
    $response = [
        'status' => false,
        'message' => 'There was a problem with your submission, please try again.'
    ];
}

http_response_code($responseCode);
header('Content-Type: application/json');
echo json_encode($response);
exit;
?>
