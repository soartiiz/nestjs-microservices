import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'integer' })
  price: number;
}
