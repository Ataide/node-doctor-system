import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { uuid } from 'uuidv4'

@Entity('users')
export class User {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public name:string;

  @Column({ unique: true })
  public email:string;

  @Column()
  public password:string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  constructor (props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}
