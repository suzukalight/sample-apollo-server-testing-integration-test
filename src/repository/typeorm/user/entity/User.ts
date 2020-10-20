import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { RoleType } from '../../../../entity/common/Role';
import { UserDto } from '../../../../entity/user/UserDto';
import { UserEntity } from '../../../../entity/user/UserEntity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  email: string;

  @Column('simple-array')
  roles: RoleType[];

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  @DeleteDateColumn()
  readonly deletedAt?: Date;

  constructor(email: string, roles: RoleType[]) {
    this.email = email;
    this.roles = roles;
  }
}

export class OrmUserFactory {
  public static fromDto(user: UserDto): User {
    return {
      id: +user.id,
      email: user.email,
      roles: user.roles,
      createdAt: user.createdAt ?? undefined,
      updatedAt: user.updatedAt ?? undefined,
    };
  }

  public static fromEntity(userEntity: UserEntity) {
    const userSchema = userEntity.toDto();
    return OrmUserFactory.fromDto(userSchema);
  }

  public static toDto(user: User): UserDto {
    return {
      id: `${user.id}`,
      email: user.email,
      roles: user.roles,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  public static toEntity(user: User): UserEntity {
    const schema = OrmUserFactory.toDto(user);
    return new UserEntity(schema);
  }
}
