import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 1025,
    secure: false
});

export const actions = {
    default: async() => {
        const info = await transporter.sendMail({
            from: "\"Fred Foo 👻\" <foo@example.com>",
            to: "bar@example.com, baz@example.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>"
        });

        console.log("Message sent: %s", info.messageId);
    }
};
