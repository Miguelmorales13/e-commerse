import { Client } from "../../clients/entities/client.entity";
import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { GeneralModel } from "../../General.model";

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true
})
export class ClientsAddress extends GeneralModel<ClientsAddress> {
  @Column({ type: DataType.STRING(200), allowNull: false })
  streetAndNumber?: string;
  @Column({ type: DataType.STRING(100), allowNull: false })
  city?: string;
  @Column({ type: DataType.STRING(10), allowNull: false })
  zipCode?: string;
  @Column({ type: DataType.STRING(50), allowNull: false })
  state?: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  lat?: string;
  @Column({ type: DataType.STRING(50), allowNull: true })
  lng?: string;

  @ForeignKey(() => Client)
  @Column({ allowNull: false, type: DataType.INTEGER })
  clientId?: number;

  @BelongsTo(() => Client)
  client?: Client;
}
