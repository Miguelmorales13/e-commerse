import { BeforeCreate, Column, DataType, Is, Table } from "sequelize-typescript";
import * as bcrypt from "bcrypt";
import { GeneralModel } from "../../General.model";

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true
})
export class Client extends GeneralModel<Client> {
  @Column({ type: DataType.STRING(100), allowNull: false })
  name?: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  lastName?: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  secondLastName?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  active?: boolean;

  @Is(async function Unique(email: string) {
    const user = await Client.findOne({ where: { email: email.toLowerCase() } });
    if (user && user.id != this.id) {
      throw new Error("the user already exist");
    }
  })
  @Column({ type: DataType.STRING(200), allowNull: false })
  email?: string;

  @Column({ type: DataType.STRING(60), allowNull: false })
  password?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isVerified?: boolean;

  @BeforeCreate
  static async creation(instance: Client) {
    instance.password = await bcrypt.hash(instance.password, 10);
    instance.email = instance.email.toLowerCase();
  }

  async comparePassword(compare: string): Promise<boolean> {
    return await bcrypt.compare(compare, this.password);
  }
}
