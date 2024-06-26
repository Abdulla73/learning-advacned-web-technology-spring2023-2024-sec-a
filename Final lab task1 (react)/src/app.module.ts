import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemModule } from './order-item/order-item.module';
import { ApplyinstructorModule } from './applyinstructor/applyinstructor.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ContractFormModule } from './contract-form/contract-form.module';
import { BlogModule } from './post/blog/blog.module';


@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot(config),
    CategoriesModule,
    AuthModule,
    OrdersModule,
    OrderItemModule,
    ApplyinstructorModule,
    InvoiceModule,
    ContractFormModule,
    BlogModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
