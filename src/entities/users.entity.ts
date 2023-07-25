import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import Contact from "./contacts.entity";

@Entity("Users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 60 })
  fullname: string;

  @Column({ type: "varchar", length: 60 })
  email: string;

  @Column({ type: "varchar", length: 11 })
  telephone: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt: string | null;

  @OneToMany(() => Contact, (contact) => contact.user)
  contact: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  cryptPassword() {
    const script = getRounds(this.password);

    if (!script) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
