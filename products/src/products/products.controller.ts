import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  Products,
  Product,
  RequestQuery,
  RequestBody,
} from './interfaces/product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @GrpcMethod('ProductsService', 'find')
  find(requestQuery: RequestQuery): Products {
    return this.productService.find(requestQuery);
  }

  @GrpcMethod('ProductsService', 'create')
  create(requestBody: RequestBody): Promise<Product> {
    return this.productService.create(requestBody);
  }
}
