import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("Contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 60 })
  fullname: string;

  @Column({ type: "varchar", length: 60 })
  email: string;

  @Column({ type: "varchar", length: 11 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt: string | null;

  @ManyToOne(() => User)
  user: User;
}

export default Contact;
