import { Observable } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Products {
  products: Product[];
}

export interface RequestQuery {
  name: string;
}

export interface RequestBody {
  name: string;
  price: number;
}

export interface ProductServiceClient {
  find(query: RequestQuery): Observable<Products>;
  create(body: RequestBody): Observable<Product>;
}
