import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from 'src/entities/invoice.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invoice]), 
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
