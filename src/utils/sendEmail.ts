import mailgun, { Mailgun } from 'mailgun-js';

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || '',
});

export async function sendEmail(to: string, subject: string, text: string): Promise<void> {
    const data = {
        from: 'Your Name <your-email@your-domain.com>',
        to,
        subject,
        text,
    };

    try {
        await mg.messages().send(data);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}