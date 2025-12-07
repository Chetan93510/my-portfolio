import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  try {
    // SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to you (portfolio owner)
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Confirmation email to sender
    const confirmationMail = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="color: #4b5563;">${message}</p>
          </div>
          <p>Best regards,<br/>Chetan Malav</p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMail);

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
}
