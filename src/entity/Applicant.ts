import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('applicant')
export class Applicant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: string;

  @Column()
  bio: string;

  @Column()
  profession: string;
}
