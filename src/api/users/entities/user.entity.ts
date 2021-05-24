import { BeforeCreate, Column, DataType, Is, Table } from "sequelize-typescript";
import * as bcrypt from "bcrypt";
import { GeneralModel } from "../../General.model";

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "users",
  underscored: true
})
export class User extends GeneralModel<User> {

  @Column({ type: DataType.STRING(100), allowNull: false })
  name?: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  lastName?: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  secondLastName?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  active?: boolean;

  @Is(async function Unique(email: string) {
    const user = await User.findOne({ where: { email: email.toLowerCase() } });
    if (user && user.id != this.id) {
      throw new Error("the user already exist");
    }
  })
  @Column({ type: DataType.STRING(200), allowNull: false })
  email?: string;

  @Column({ type: DataType.STRING(60), allowNull: false })
  password?: string;


  @BeforeCreate
  static async creation(instance: User) {
    instance.password = await bcrypt.hash(instance.password, 10);
    instance.email = instance.email.toLowerCase();
  }

  async comparePassword(compare: string): Promise<boolean> {
    return await bcrypt.compare(compare, this.password);
  }

}


