import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  last_name: string 

  @Column({unique: true})
  email: string; 

  @Column()
  password: string 

  @Column({default: true})
  is_ambassador: boolean; 
}