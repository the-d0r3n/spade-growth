import {sendEmail} from "./sendEmail";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;
        try {
            await sendEmail(to, subject, text);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}