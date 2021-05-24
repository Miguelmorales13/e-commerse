import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { GetEnv } from "./configs/env.validations";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(GetEnv("PORT") || 3000);
  console.log("is running in port ", GetEnv("PORT") || 3000);
}

bootstrap();
