<?php
// Receive the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the target address where the email should be sent (in this case, to Sjoerd)
$to = "dat_nguyen1@outlook.com";

// Set the subject and headers of the email
$subject = "New Contact Form Submission from " . $name;
$headers = "From: " . $email . "\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "Content-Type: text/html; charset=UTF-8\r\n";

// Build the message
$body = "<h2>Contact Form Submission</h2>
         <p><strong>Name:</strong> $name</p>
         <p><strong>Email:</strong> $email</p>
         <p><strong>Message:</strong><br>$message</p>";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    // If the email is successfully sent
    echo "Your message has been sent successfully!";
} else {
    // If something went wrong while sending the email
    echo "There was an error sending your message. Please try again.";
}
?>
