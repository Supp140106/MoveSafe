export async function POST(request) {
    const nodemailer = require('nodemailer');

    try {
        const body = await request.json();
        const { pickupCity, dropCity, phoneNumber } = body;

        // Validate required fields
        if (!pickupCity || !dropCity || !phoneNumber) {
            return Response.json(
                { success: false, message: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Create transporter with Gmail (same config as contact form)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'supbuisdas@gmail.com',
                pass: process.env.EMAIL_PASS || 'lmlriagdtbjblafq',
            },
        });

        // Beautiful HTML email template for quote request
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
                        <td style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                🚚 MoveSafe Packers
                            </h1>
                            <p style="color: #fecaca; margin: 10px 0 0 0; font-size: 14px;">
                                New Quote Request Received
                            </p>
                        </td>
                    </tr>

                    <!-- Route Banner -->
                    <tr>
                        <td style="padding: 30px 30px 0 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #1f2937 0%, #374151 100%); border-radius: 12px; overflow: hidden;">
                                <tr>
                                    <td style="padding: 24px; text-align: center;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="width: 40%; text-align: center; padding: 10px;">
                                                    <p style="margin: 0; color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                                                    <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 700;">${pickupCity}</p>
                                                </td>
                                                <td style="width: 20%; text-align: center; padding: 10px;">
                                                    <span style="display: inline-block; color: #10b981; font-size: 28px;">→</span>
                                                </td>
                                                <td style="width: 40%; text-align: center; padding: 10px;">
                                                    <p style="margin: 0; color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">To</p>
                                                    <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 700;">${dropCity}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Alert Badge -->
                    <tr>
                        <td style="padding: 24px 30px 0 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 20px; border-radius: 8px;">
                                        <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
                                            ⚡ Hot Lead! Customer is looking for a quote.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Customer Contact -->
                    <tr>
                        <td style="padding: 24px 30px;">
                            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                                📱 Customer Contact
                            </h2>
                            
                            <!-- Phone -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                                <tr>
                                    <td style="width: 140px; padding: 16px 20px; background-color: #f9fafb; border-radius: 8px 0 0 8px;">
                                        <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">Mobile Number</p>
                                    </td>
                                    <td style="padding: 16px 20px; background-color: #f9fafb; border-radius: 0 8px 8px 0;">
                                        <p style="margin: 0; color: #1f2937; font-size: 18px; font-weight: 700;">
                                            <a href="tel:${phoneNumber}" style="color: #2563eb; text-decoration: none;">${phoneNumber}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Action Button -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td align="center" style="padding: 10px;">
                                        <a href="tel:${phoneNumber}" style="display: inline-block; padding: 18px 48px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);">
                                            📞 Call Customer Now
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Summary Box -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <p style="margin: 0; color: #166534; font-size: 14px; line-height: 1.6;">
                                            <strong>Quick Summary:</strong><br>
                                            Customer wants to move goods from <strong>${pickupCity}</strong> to <strong>${dropCity}</strong>.<br>
                                            Contact them at <strong>${phoneNumber}</strong> to provide a quote.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                                This quote request was sent from your MoveSafe Packers website.
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
            subject: `🚚 New Quote Request: ${pickupCity} → ${dropCity}`,
            html: htmlTemplate,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json(
            { success: true, message: 'Quote request sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);
        return Response.json(
            { success: false, message: 'Failed to send quote request. Please try again.' },
            { status: 500 }
        );
    }
}
