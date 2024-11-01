import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'n.sannikov1988@gmail.com',
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};