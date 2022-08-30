import { Linking } from 'react-native';

type SendEmail = {
    to: string;
    subject: string;
    body: string;
};

const useSendEmail = async ({ to, subject, body }: SendEmail) => {
    const email = {
        to,
        subject,
        body,
    };
    const url = `mailto:${email.to}?subject=${email.subject}&body=${email.body}`;

    try {
        let canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
            await Linking.openURL(url);
        } else {
            throw new Error('Cannot open email');
        }
    }
    catch (error) {
        console.log(error);
    }
}


export default useSendEmail;
