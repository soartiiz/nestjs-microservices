import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { RequestBody, ProductServiceClient } from '../products/pb/main.pb';

@Controller('products')
export class ProductsController {
  private productService: ProductServiceClient;

  @Inject('PRODUCT_SERVICE')
  private readonly client: ClientGrpc;

  onModuleInit() {
    this.productService =
      this.client.getService<ProductServiceClient>('ProductsService');
  }

  @Get()
  async find() {
    return this.productService.find({ name: '' });
  }

  @Post('create')
  async create(@Body() body: RequestBody) {
    return this.productService.create(body);
  }
}
