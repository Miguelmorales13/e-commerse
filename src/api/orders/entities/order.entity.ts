import { BelongsTo, Column, DataType, ForeignKey, Is, Table } from "sequelize-typescript";
import { GeneralModel } from "../../General.model";
import { Client } from "../../clients/entities/client.entity";
import { ClientsAddress } from "../../clients-addresses/entities/clients-address.entity";

export enum EnumStatusOrder {
  InStorage = "in storage",
  Sended = "sended",
  Incoming = "incoming",
  Received = "received",
}

export type TypeStatusOrder = "in storage" | "sended" | "incoming" | "received"

export enum EnumStatusPayment {
  Pending = "pending",
  Canceled = "canceled",
  NoProcessed = "no processed",
  Error = "error",
  Paid = "paid",
}

export type TypeStatusPayment = "pending" | "canceled" | "no processed" | "error" | "paid"


@Table({
  timestamps: true,
  paranoid: true,
  underscored: true
})
export class Order extends GeneralModel<Order> {

  @Column({ type: DataType.ENUM("in storage", "sended", "incoming", "received"), defaultValue: EnumStatusOrder.InStorage })
  statusOrder?: TypeStatusOrder;

  @Column({ type: DataType.ENUM("pending", "canceled", "no processed", "error", "paid"), defaultValue: EnumStatusPayment.Pending })
  statusPayment?: TypeStatusPayment;

  @ForeignKey(() => ClientsAddress)
  @Is(async function Bollongs(clientId: number) {
    if (!this.clientId) return;
    const clientAddress = await ClientsAddress.findOne({ where: { clientId } });
    if (!clientAddress) {
      throw new Error("ups... you don have more nivels in this category");
    }
  })
  @Column({ type: DataType.INTEGER })
  clientAddressId?: number;

  @BelongsTo(() => ClientsAddress)
  clientAddress?: ClientsAddress;

  @ForeignKey(() => Client)
  @Column({ allowNull: false, type: DataType.INTEGER })
  clientId?: number;

  @BelongsTo(() => Client)
  client?: Client;
}
