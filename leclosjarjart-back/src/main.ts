import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    "origin": "https://dev.front.vinais.ovh",
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

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
