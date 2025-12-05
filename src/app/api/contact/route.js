export async function POST(request) {
    const nodemailer = require('nodemailer');

    try {
        const body = await request.json();
        const { fullName, phoneNumber, emailAddress, serviceType, message } = body;

        // Create transporter with Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'supbuisdas@gmail.com',
                pass: process.env.EMAIL_PASS || 'lmlriagdtbjblafq',
            },
        });

        // Beautiful HTML email template
        const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                🚚 MoveSafe Packers
                            </h1>
                            <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 14px;">
                                New Contact Inquiry Received
                            </p>
                        </td>
                    </tr>

                    <!-- Alert Badge -->
                    <tr>
                        <td style="padding: 30px 30px 0 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 16px 20px; border-radius: 8px;">
                                        <p style="margin: 0; color: #065f46; font-size: 14px; font-weight: 600;">
                                            ✨ New inquiry from your website!
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Customer Details -->
                    <tr>
                        <td style="padding: 30px;">
                            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                                📋 Customer Details
                            </h2>
                            
                            <!-- Name -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                                <tr>
                                    <td style="width: 140px; padding: 12px 16px; background-color: #f9fafb; border-radius: 8px 0 0 8px;">
                                        <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">Full Name</p>
                                    </td>
                                    <td style="padding: 12px 16px; background-color: #f9fafb; border-radius: 0 8px 8px 0;">
                                        <p style="margin: 0; color: #1f2937; font-size: 15px; font-weight: 600;">${fullName}</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Phone -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                                <tr>
                                    <td style="width: 140px; padding: 12px 16px; background-color: #f9fafb; border-radius: 8px 0 0 8px;">
                                        <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">Phone Number</p>
                                    </td>
                                    <td style="padding: 12px 16px; background-color: #f9fafb; border-radius: 0 8px 8px 0;">
                                        <p style="margin: 0; color: #1f2937; font-size: 15px; font-weight: 600;">
                                            <a href="tel:${phoneNumber}" style="color: #2563eb; text-decoration: none;">${phoneNumber}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Email -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                                <tr>
                                    <td style="width: 140px; padding: 12px 16px; background-color: #f9fafb; border-radius: 8px 0 0 8px;">
                                        <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">Email Address</p>
                                    </td>
                                    <td style="padding: 12px 16px; background-color: #f9fafb; border-radius: 0 8px 8px 0;">
                                        <p style="margin: 0; color: #1f2937; font-size: 15px; font-weight: 600;">
                                            <a href="mailto:${emailAddress}" style="color: #2563eb; text-decoration: none;">${emailAddress}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Service Type -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                                <tr>
                                    <td style="width: 140px; padding: 12px 16px; background-color: #f9fafb; border-radius: 8px 0 0 8px;">
                                        <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">Service Type</p>
                                    </td>
                                    <td style="padding: 12px 16px; background-color: #f9fafb; border-radius: 0 8px 8px 0;">
                                        <span style="display: inline-block; padding: 6px 14px; background-color: #1f2937; color: #ffffff; border-radius: 20px; font-size: 13px; font-weight: 500;">
                                            ${serviceType}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Message Section -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <h2 style="color: #1f2937; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                                💬 Message
                            </h2>
                            <div style="background-color: #f9fafb; border-radius: 12px; padding: 20px; border-left: 4px solid #1f2937;">
                                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message || 'No message provided.'}</p>
                            </div>
                        </td>
                    </tr>

                    <!-- Action Buttons -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td align="center" style="padding: 10px;">
                                        <a href="mailto:${emailAddress}" style="display: inline-block; padding: 14px 28px; background-color: #1f2937; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                                            📧 Reply to Customer
                                        </a>
                                    </td>
                                    <td align="center" style="padding: 10px;">
                                        <a href="tel:${phoneNumber}" style="display: inline-block; padding: 14px 28px; background-color: #10b981; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                                            📞 Call Customer
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                                This email was sent from your MoveSafe Packers website contact form.
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                © ${new Date().getFullYear()} MoveSafe Packers. All rights reserved.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `;

        // Email options
        const mailOptions = {
            from: `"MoveSafe Packers" <${process.env.EMAIL_USER || 'supbuisdas@gmail.com'}>`,
            to: process.env.EMAIL_TO || 'suppritdas@gmail.com',
            subject: `🚚 New Inquiry: ${serviceType} - ${fullName}`,
            html: htmlTemplate,
            replyTo: emailAddress,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json(
            { success: true, message: 'Email sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);
        return Response.json(
            { success: false, message: 'Failed to send email. Please try again.' },
            { status: 500 }
        );
    }
}
