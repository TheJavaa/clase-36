import {createTransport} from 'nodemailer';
import logger from '../../loggers/Log4jsLogger.js';
import dotenv from 'dotenv';

import nodemailer from 'nodemailer';

dotenv.config({path: '../../.env' });
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'javier999@ethereal.email',
        pass: 'FdB377Ktt1zb1UqQfc'
    }
});
const NewmailOptions = {
    from: 'Servidor Node.js',
    to: 'javier999@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;"> Contenido de prueba desde <span style="color:green;">Node.js con Nodemailer</span></h1>'
}

const htmlNewUserTemplate = (id, date) => {
    return `
    <h2>¡Nuevo usuario Creado!</h2>
    <p>Se ha creado un nuevo usuario a través de la API</p>
    <ul>
        <li><strong>UUID:</strong> ${id}</li>
        <li><strong>Fecha:</strong> ${date}</li>
    </ul>
    `
};
export async function sendEmailNode(subject, htmlTemplate) {
try {
    await transporter.sendMail(NewmailOptions);
    logger.info(`Email sent`)
} catch (error) {
    logger.error(error);
}
}