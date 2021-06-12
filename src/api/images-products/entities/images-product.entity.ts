import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { Product } from "../../products/entities/product.entity";
import { GetEnv } from "../../../configs/env.validations";
import { EnumUploads } from "../../../configs/helpers.config";
import { GeneralModel } from "../../General.model";

@Table({
  underscored: true,
  paranoid: true,
  timestamps: true
})
export class ImagesProduct extends GeneralModel<ImagesProduct> {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    get() {
      if (this.getDataValue("file") === "") {
        return this.getDataValue("file");
      } else {
        return `${GetEnv("HOST")}uploads/${EnumUploads.images}/${this.getDataValue("file")}`;
      }
    }
  })
  file?: string;

  @Column({ type: DataType.STRING(100), defaultValue: "title product" })
  title?: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  size?: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  dimensions?: string;

  @ForeignKey(() => Product)
  @Column({ allowNull: false, type: DataType.BIGINT })
  productId?: number;

  @BelongsTo(() => Product)
  product?: Product;
}
