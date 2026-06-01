<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = $_POST;
if (empty($input)) {
    $json = json_decode(file_get_contents('php://input'), true);
    if ($json) {
        $input = $json;
    }
}

if (empty($input)) {
    echo json_encode(["success" => false, "message" => "No data provided."]);
    exit();
}

$type = $input['type'] ?? 'contact';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'webanatomysocial@gmail.com';
    $mail->Password = 'ensk hqxk wqks rkua';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    if ($type === 'quiz') {
        $name = $input['name'] ?? 'No Name';
        $email = $input['email'] ?? 'No Email';
        $jobTitle = $input['jobTitle'] ?? 'Not Specified';
        $companyName = $input['companyName'] ?? 'Not Specified';
        $averageScore = $input['averageScore'] ?? '0.0';
        $maturityLevel = $input['maturityLevel'] ?? 'Not Specified';
        
        $strongestArea = $input['strongestArea'] ?? 'Not Specified';
        $weakestArea = $input['weakestArea'] ?? 'Not Specified';
        $strongestScore = $input['strongestScore'] ?? '0';
        $weakestScore = $input['weakestScore'] ?? '0';
        
        $mail->setFrom('webanatomysocial@gmail.com', 'S4Access Maturity Assessment');
        // Send to the user's email
        $mail->addAddress($email, $name);
        // Also copy the admin
        $mail->addBCC('parceldropnetworks@gmail.com');
        $mail->addReplyTo('contact@s4access.com', 'S4Access Team');

        $mail->isHTML(true);
        $mail->Subject = "Your SAP Access Maturity Report - S4Access";

        $htmlBody = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333333; line-height: 1.6;'>
            <div style='background-color: #06090c; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;'>
                <h1 style='color: #40ffc9; margin: 0; font-size: 24px; font-weight: bold;'>S4Access</h1>
                <p style='color: #ffffff; margin: 10px 0 0 0; font-size: 16px;'>SAP Access Governance Maturity Report</p>
            </div>
            
            <div style='padding: 30px; border: 1px solid #dddddd; border-top: none; border-radius: 0 0 8px 8px;'>
                <p>Hello <strong>{$name}</strong>,</p>
                <p>Thank you for taking the <strong>S4Access SAP Access Governance Maturity Assessment</strong>. Based on your inputs, we have generated your compliance report and improvement checklist.</p>
                
                <hr style='border: none; border-top: 1px solid #eeeeee; margin: 20px 0;'>
                
                <h3 style='color: #008a63; margin-top: 0;'>Your Profile</h3>
                <table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>
                    <tr>
                        <td style='padding: 6px 0; color: #666666; width: 120px;'><strong>Name:</strong></td>
                        <td style='padding: 6px 0;'>{$name}</td>
                    </tr>
                    <tr>
                        <td style='padding: 6px 0; color: #666666;'><strong>Job Title:</strong></td>
                        <td style='padding: 6px 0;'>{$jobTitle}</td>
                    </tr>
                    <tr>
                        <td style='padding: 6px 0; color: #666666;'><strong>Company:</strong></td>
                        <td style='padding: 6px 0;'>{$companyName}</td>
                    </tr>
                    <tr>
                        <td style='padding: 6px 0; color: #666666;'><strong>Email:</strong></td>
                        <td style='padding: 6px 0;'>{$email}</td>
                    </tr>
                </table>
                
                <div style='background-color: #f4fdfa; border: 1px solid #40ffc9; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 25px;'>
                    <span style='font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #008a63;'>Overall Maturity Score</span>
                    <div style='font-size: 48px; font-weight: bold; color: #06090c; margin: 5px 0;'>{$averageScore} <span style='font-size: 20px; color: #666666;'>/ 5.0</span></div>
                    <div style='font-weight: bold; font-size: 18px; color: #008a63;'>{$maturityLevel}</div>
                </div>

                <h3 style='color: #06090c; margin-top: 0;'>Key Assessment Insights</h3>
                <div style='margin-bottom: 15px; padding: 15px; border-left: 4px solid #40ffc9; background: #fafafa; border-radius: 0 4px 4px 0;'>
                    <strong style='color: #008a63;'>★ Strongest Governance Area:</strong>
                    <div style='font-weight: bold; margin: 4px 0 2px 0;'>{$strongestArea} (Score: {$strongestScore}/5)</div>
                    <span style='font-size: 13px; color: #666666;'>Keep maintaining these robust workflows and automated procedures.</span>
                </div>
                
                <div style='margin-bottom: 25px; padding: 15px; border-left: 4px solid #ff5e62; background: #fafafa; border-radius: 0 4px 4px 0;'>
                    <strong style='color: #d9383a;'>⚠ Priority Improvement Area:</strong>
                    <div style='font-weight: bold; margin: 4px 0 2px 0;'>{$weakestArea} (Score: {$weakestScore}/5)</div>
                    <span style='font-size: 13px; color: #666666;'>Gaps here introduce compliance vulnerabilities and excess administrative workloads. This should be prioritized in your roadmap.</span>
                </div>

                <hr style='border: none; border-top: 1px solid #eeeeee; margin: 20px 0;'>
                
                <div style='text-align: center; margin-top: 30px;'>
                    <p style='margin-bottom: 15px; font-size: 15px;'>Want a deep-dive security review of your SAP landscape?</p>
                    <a href='https://s4access.com/contact' style='background: linear-gradient(90deg, #008a63 0%, #003377 100%); background-color: #008a63; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 99px; font-weight: bold; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.1);'>Request Free Consultation</a>
                </div>
            </div>
            
            <div style='text-align: center; padding: 20px; font-size: 12px; color: #999999;'>
                <p>© 2026 S4Access. All rights reserved.</p>
                <p>Nordic SAP Access Management & Governance Specialists</p>
            </div>
        </div>";

        $mail->Body = $htmlBody;
    } else {
        // Original Sase contact form logic
        $name = $input['name'] ?? 'No Name';
        $email = $input['email'] ?? 'No Email';
        $phone = $input['phone'] ?? 'No Phone';
        $industry = $input['industry'] ?? 'Not Specified';
        $units = $input['units'] ?? 'Not Specified';
        $timeline = $input['timeline'] ?? 'Not Specified';
        $location = $input['location'] ?? 'Not Specified';
        $message = $input['message'] ?? 'No Message';

        $mail->setFrom('webanatomysocial@gmail.com', 'Sase Contact Form');
        $mail->addAddress('parceldropnetworks@gmail.com');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "New Lead: Sase - " . $name;

        $htmlBody = "
        <h2>New Lead Captured via Contact Form</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Industry:</strong> {$industry}</p>
        <p><strong>Estimated Units Needed:</strong> {$units}</p>
        <p><strong>Project Timeline:</strong> {$timeline}</p>
        <p><strong>Installation Location:</strong> {$location}</p>
        <p><strong>Specific Use Case Details:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";

        $mail->Body = $htmlBody;
    }

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully."]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "PHPMailer Error: " . $mail->ErrorInfo]);
}
?>
