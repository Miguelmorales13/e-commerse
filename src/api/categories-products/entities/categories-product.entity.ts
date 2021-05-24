import { BeforeCreate, BelongsTo, Column, DataType, ForeignKey, Is, Table } from "sequelize-typescript";
import { GeneralModel } from "../../General.model";

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true
})
export class CategoriesProduct extends GeneralModel<CategoriesProduct> {
  @Column({ type: DataType.STRING(100), allowNull: false })
  name?: string;

  @Is(async function MinThree(value: string) {
    if (!this.categoryId) return;
    const upCategory = await CategoriesProduct.findByPk(this.categoryId);
    if (upCategory.nivel >= 3) {
      throw new Error("ups... you don have more nivels in this category");
    }
  })
  @Column({ type: DataType.INTEGER({ length: 1 }), allowNull: true })
  nivel?: number;

  @ForeignKey(() => CategoriesProduct)
  @Column({ allowNull: true, type: DataType.INTEGER })
  categoryId?: number;

  @BelongsTo(() => CategoriesProduct)
  category?: CategoriesProduct;


  @BeforeCreate
  static async creation(instance: CategoriesProduct) {
    if (instance.categoryId) {
      const upCategory = await CategoriesProduct.findByPk(instance.categoryId);
      instance.nivel = upCategory.nivel + 1;
    } else {
      instance.nivel = 1;
    }
  }
}
