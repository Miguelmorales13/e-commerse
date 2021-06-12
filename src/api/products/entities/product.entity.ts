import { BeforeUpdate, BelongsTo, Column, DataType, DefaultScope, ForeignKey, HasMany, Table } from "sequelize-typescript";
import { GeneralModel } from "../../General.model";
import { CategoriesProduct } from "../../categories-products/entities/categories-product.entity";
import { GetEnv } from "../../../configs/env.validations";
import { EnumUploads } from "../../../configs/helpers.config";
import { ImagesProduct } from "../../images-products/entities/images-product.entity";


@DefaultScope(() => ({
  include: [
    {
      model: CategoriesProduct,
      required: true
    }, {
      model: ImagesProduct,
      required: false
    }
  ]
}))
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

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    get() {
      if (this.getDataValue("mainImage") === "") {
        return this.getDataValue("mainImage");
      } else {
        return `${GetEnv("HOST")}uploads/${EnumUploads.images}/${this.getDataValue("mainImage")}`;
      }
    }
  })
  mainImage?: string;

  @Column({ type: DataType.DOUBLE({ precision: 8, decimals: 2 }), allowNull: false })
  price?: number;

  @Column({ type: DataType.DOUBLE({ precision: 8, decimals: 2 }), allowNull: false })
  priceDiscount?: number;

  @Column({ type: DataType.TEXT(), allowNull: false })
  description?: string;

  @HasMany(() => ImagesProduct)
  images?: ImagesProduct[];

  @Column({ type: DataType.STRING(100), allowNull: false })
  brand?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isInDiscount?: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  active?: boolean;

  @ForeignKey(() => CategoriesProduct)
  @Column({ allowNull: false, type: DataType.BIGINT })
  categoryId?: number;

  @BelongsTo(() => CategoriesProduct)
  category?: CategoriesProduct;

  @BeforeUpdate
  static onUpdate(instance: Product) {
    if (instance.mainImage) {
      return instance.mainImage.replace(`${GetEnv("HOST")}uploads/${EnumUploads.images}/}`, "");
    }
  }
}
