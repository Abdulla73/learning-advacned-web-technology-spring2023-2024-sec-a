import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('Registration')
export class Registration {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ unique: false, nullable: false })
    user_name: string;

    @Column({ unique: true, nullable: false }) 
    user_email: string;

    @Column({ unique: false, nullable: false })
    date_of_birth: Date;

    @Column({ unique: false, nullable: false })
    user_password: string;

    @Column({ unique: false, nullable: false })
    role: string;

    @Column ({ unique: false, nullable: true })
    notification : string;

    @BeforeInsert()
  async HashPassword() {
    this.user_password = await bcrypt.hash(this.user_password, 10);
  }
}
