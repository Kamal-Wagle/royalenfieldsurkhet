import nodemailer from "nodemailer";

// Modify to accept email and OTP
export const sendEmail = async (email: string, otp: string): Promise<void> => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "badengineer202@gmail.com",
            pass: "zvvp ayuc grnq fhvo",
        },
    });

    await transporter.sendMail({
        from: "eetc8700@gmail.com",
        to: email,
        subject: "Your Password Reset OTP",
        html: `<p>Your OTP for password reset is: <strong>${otp}</strong></p><p>This OTP will expire in 10 minutes.</p>`,
    });
};
