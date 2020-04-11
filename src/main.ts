import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "nestjs-config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('Music Api')
      .setDescription('The music API description')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(ConfigService.get("applicationprop.port", 3000));
}
bootstrap();
