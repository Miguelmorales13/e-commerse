import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { GeneralModel } from "../../General.model";
import { CategoriesProduct } from "../../categories-products/entities/categories-product.entity";

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true
})
export class Product extends GeneralModel<Product> {
  @Column({ type: DataType.STRING(100), allowNull: false })
  name?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  hasMultiplesImages?: boolean;

  @Column({ type: DataType.STRING(200), allowNull: false })
  mainImage?: string;

  @Column({ type: DataType.DOUBLE({ precision: 8, decimals: 2 }), allowNull: false })
  price?: number;

  @Column({ type: DataType.DOUBLE({ precision: 8, decimals: 2 }), allowNull: false })
  priceDiscount?: number;

  @Column({ type: DataType.TEXT(), allowNull: false })
  description?: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  brand?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isInDiscount?: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  active?: boolean;

  @ForeignKey(() => CategoriesProduct)
  @Column({ allowNull: false, type: DataType.INTEGER })
  categoryId?: number;

  @BelongsTo(() => CategoriesProduct)
  category?: CategoriesProduct;
}
