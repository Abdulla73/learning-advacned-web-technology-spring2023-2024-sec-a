import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), RegistrationModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
