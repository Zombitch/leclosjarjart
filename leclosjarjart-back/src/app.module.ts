import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule} from 'navsii-tools/dist/core/auth/auth.module'
import { UserModule} from 'navsii-tools/dist/core/user/user.module'
import { MailController} from 'navsii-tools/dist/core/mailing/mail.controller'
import { MailService} from 'navsii-tools/dist/core/mailing/mail.service'
import { SecurityService} from 'navsii-tools/dist/core/security/security.service'
import { UserController } from 'navsii-tools/dist/core/user/user.controller'
import { SystemService} from 'navsii-tools/dist/core/system/system.service'
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { UserService } from 'navsii-tools/dist/core/user/user.service'
import { EmailController } from './email/email.controller';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: "smtp.gmail.com",
          secure: true,
          port: 465,
          auth: { user: process.env.smtpUser, pass: process.env.smtpPwd },
        },
      }),
    }),
    AuthModule, UserModule,
    ConfigModule.forRoot({ignoreEnvFile: true})
  ],
  controllers: [AppController, UserController, EmailController],
  providers: [
    AppService, 
    SecurityService,
    SystemService,
    MailService,
    UserService
  ],
})
export class AppModule {}
