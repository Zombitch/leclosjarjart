import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { htmlToText } from 'html-to-text';
import { MailService } from 'navsii-tools/dist/core/mailing/mail.service';
import { AllowAnonymous } from 'navsii-tools/dist/core/auth/auth.guard';

@Controller('email')
export class EmailController {

    constructor(private readonly mailService: MailService) {}

    @AllowAnonymous()
    @HttpCode(HttpStatus.OK)
    @Post('send')
    async send(@Body() body: {from: string, subject: string, html: string}) {
        if(body?.from && process.env.contactEmail && body?.subject && body?.html){
            const result = await this.mailService.sendMail(body.from, process.env.contactEmail, body.subject, htmlToText(body.html), body.html);
            return result;
        }else{
            throw new BadRequestException("Missing parameter");
        }
    }
}
