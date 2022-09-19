import { Injectable } from '@nestjs/common';
import {
  Product,
  Products,
  RequestQuery,
  RequestBody,
} from './interfaces/product';
import { ProductEntity } from 'src/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { id: '1', name: 'Souris', price: 100 },
    { id: '2', name: 'Clavier', price: 110 },
    { id: '3', name: 'Casque', price: 85 },
  ];

  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  find(requestQuery: RequestQuery): Products {
    return { products: this.products };
  }

  async create(requestBody: RequestBody): Promise<Product> {
    const product = await this.productRepository.create(requestBody);

    await this.productRepository.save(product);

    return product;
  }
}
