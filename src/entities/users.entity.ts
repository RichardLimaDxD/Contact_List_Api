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
} from "typeorm";

@Entity("Users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 60, unique: true })
  fullname: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 11, unique: true })
  telephone: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt: string | null;

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
