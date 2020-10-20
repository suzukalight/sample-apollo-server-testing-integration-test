import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { AuthEmailPasswordDto } from '../../../../entity/auth/AuthEmailPasswordDto';
import { AuthEmailPasswordEntity } from '../../../../entity/auth/AuthEmailPasswordEntity';
import { User } from '../../user/entity/User';

@Entity('authEmailPasswords')
export class AuthEmailPassword {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  userId: number;

  @JoinColumn({ name: 'userId' })
  user?: User;

  @Column()
  email: string;

  @Column()
  passwordEncrypted: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  constructor(userId: number, email: string, passwordEncrypted: string) {
    this.userId = userId;
    this.email = email;
    this.passwordEncrypted = passwordEncrypted;
  }
}

export class OrmAuthEmailPasswordFactory {
  public static toDto(auth: AuthEmailPassword): AuthEmailPasswordDto {
    return {
      email: auth.email,
      passwordEncrypted: auth.passwordEncrypted,
      userId: `${auth.userId}`,
    };
  }

  public static toEntity(auth: AuthEmailPassword): AuthEmailPasswordEntity {
    const schema = OrmAuthEmailPasswordFactory.toDto(auth);
    return new AuthEmailPasswordEntity(schema);
  }
}
