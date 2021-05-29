import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('expertise')
export default class Expertise {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public name: string;
}
