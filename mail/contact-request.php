<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header('HTTP/1.0 403 Forbidden');
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to autoload.php from Composer's vendor directory

$mail = new PHPMailer();

try {
    $inputData = json_decode(file_get_contents('php://input'));

    if (isset(
        $inputData->firstName,
        $inputData->lastName,
        $inputData->companyName,
        $inputData->jobTitle,
        $inputData->email,
        $inputData->phoneNumber,
        $inputData->topic,
    )) {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'parag.empyreal1@gmail.com';
        $mail->Password = 'yqzm ubnf lebe luto';
        $mail->Port = 465;
        $mail->SMTPSecure = 'ssl';

        //Recipients
        $mail->setFrom('parag.empyreal1@gmail.com', 'Pareto Economics');
        $mail->addAddress('parag.empyreal1@gmail.com');     //Add a recipient

        //Content
        $firstName = (isset($inputData->firstName)) ? $inputData->firstName : '';
        $lastName = (isset($inputData->lastName)) ? $inputData->lastName : '';
        $companyName = (isset($inputData->companyName)) ? $inputData->companyName : '';
        $jobTitle = (isset($inputData->jobTitle)) ? $inputData->jobTitle : '';
        $email = (isset($inputData->email)) ? $inputData->email : '';
        $phoneNumber = (isset($inputData->phoneNumber)) ? $inputData->phoneNumber : '';
        $topic = (isset($inputData->topic)) ? $inputData->topic : '';
        $message = (isset($inputData->message)) ? $inputData->message : '';

        $emailContent = '<!DOCTYPE html>
            <html>
                <head>
                    <title>Contact Inquiry</title>
                </head>
                <body>
                    <div style="background-color: #f8f8f8; padding: 20px;">
                        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
                            <h2 style="color: #0056b3;">Contact Inquiry</h2>
                            <p><strong>First Name:</strong> '.$firstName.'</p>
                            <p><strong>Last Name:</strong> '.$lastName.'</p>
                            <p><strong>Company/Organisation:</strong> '.$companyName.'</p>
                            <p><strong>Job Title:</strong> '.$jobTitle.'</p>
                            <p><strong>Business Email:</strong> '.$email.'</p>
                            <p><strong>Phone Number:</strong> '.$phoneNumber.'</p>
                            <p><strong>Topic:</strong> '.$topic.'</p>
                            <p><strong>Message:</strong></p>
                            <p>'.$message.'</p>
                        </div>
                    </div>
                </body>
            </html>
        ';

        $mail->isHTML(true);
        $mail->Subject = 'Contact / Dashboard Demo / Partnership Inquiry - Pareto Economics';
        $mail->Body    = $emailContent;

        if ($mail->send()) {
            $responseCode = 200;
            $response = [
                'status' => true,
                'message' => 'Thank You! Your message has been sent.',
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
