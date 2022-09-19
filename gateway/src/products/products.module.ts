import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'PRODUCT_SERVICE',
        inject: [ConfigService],
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          name: 'PRODUCT_SERVICE',
          transport: Transport.GRPC,
          options: {
            package: 'product',
            protoPath: join(__dirname, 'proto/product.proto'),
            url: 'localhost:3001',
          },
        }),
      },
    ]),
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
