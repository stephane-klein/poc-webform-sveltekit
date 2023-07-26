import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 1025,
    secure: false
});

export const actions = {
    default: async({ request }) => {
        const data = await request.formData();

        let info = await transporter.sendMail({
            from: "noreply@example.com",
            to: data.get("email"),
            subject: "We have received your request",
            text: "We have received your request and will reply as soon as possible.",
            html: "<p>We have received your request and will reply as soon as possible.</p>"
        });

        console.log("Message sent: %s", info.messageId);

        info = await transporter.sendMail({
            from: "noreply@example.com",
            to: data.get("email"),
            subject: "We have received your request",
            text: `${data.get("name")} <${data.get("email")}> sent this message:\n\n${data.get("message")}\n`,
            html: `
                <p>${data.get("name")} <${data.get("email")}> sent this message:</p>

                <pre>
${data.get("message")}
                </pre>
            `
        });

        console.log("Message sent: %s", info.messageId);

        return { success: true };
    }
};
