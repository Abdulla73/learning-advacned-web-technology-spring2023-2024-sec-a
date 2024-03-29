import { Module } from '@nestjs/common';
import { AuthService } from './login.service';
import { AuthController } from './login.controller';

import { RegistrationModule } from 'src/registration/registration.module';
import { RegistrationService } from 'src/registration/registration.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Registration } from 'src/entities/registration.entity';


@Module({
  imports: [
    RegistrationModule,
    TypeOrmModule.forFeature([Registration,]), 
  ],
  controllers: [AuthController],
  providers: [AuthService, RegistrationService],
  exports: [AuthService],
})
export class LoginModule {}
