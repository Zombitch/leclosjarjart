import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { AccessControlMiddleware} from 'navsii-tools/dist/core/security/accesscontrol.middleware'
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    "origin": process.env.allowOrigin?.replaceAll('[',"").replaceAll(']',"").replaceAll(/\s+/g,"").split(","),
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  });
  app.use(helmet());
  app.use(
    session({
      secret: 'sqsdfhrlkojlmSnbdufs-9877778-',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(new AccessControlMiddleware().use);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
