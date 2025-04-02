import nodemailer from "nodemailer";

// Modify to accept email and OTP
export const sendOtpEmailfordelete = async ( otp: string): Promise<void> => {
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
        to: "aaieremail@gmail.com", // The recipient email address (admin's email)
        subject: "OTP for Deleting User",
        html: `<p>You are about to delete a user. Your OTP is: <strong>${otp}</strong></p>
               <p>This OTP will expire in 10 minutes. Please use it to confirm the deletion.</p>`,
    });
};
