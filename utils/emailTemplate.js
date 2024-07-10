const emailTemplate = (name, topic, status) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      padding: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
    }
    p {
      color: #666;
    }
    .btn {
      display: inline-block;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Hello, ${name}</p>
    <p>Thank you for ${
      status === "pending" ? "reaching out to us" : "your patience"
    }.</p>
    <p>We would like to inform you that your issue related to ${topic} ${
  status === "pending"
    ? "has been sent to our team. We will reach out to you soon!"
    : "has been resolved!"
}.</p>
    <p>Best regards,<br>TEAM TO-LET GLOBE</p>
  </div>
</body>
</html>
`;

module.exports = emailTemplate;
