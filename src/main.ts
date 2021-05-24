import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { GetEnv } from "./configs/env.validations";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: true, cors: true });
  const config = new DocumentBuilder()
    .setTitle("e - comerse")
    .setDescription("api e-comerse")
    .addBearerAuth()
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, { ...config });
  SwaggerModule.setup("api", app, document, { customCssUrl: `${process.env.HOST}theme-newspaper.css` });
  await app.listen(GetEnv("PORT") || 3000);
  console.log("is running in port ", GetEnv("PORT") || 3000);
}

bootstrap();
