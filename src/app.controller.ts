import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PaymentDto } from './dto/payment.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('submit-payment')
  async submitPayment(@Body() paymentDto: PaymentDto): Promise<string> {
    await this.appService.sendPaymentEmail(paymentDto);
    return 'Данные успешно отправлены!';
  }
}
