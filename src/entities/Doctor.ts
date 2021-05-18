import { Column, Entity, PrimaryColumn } from 'typeorm'
import { uuid } from 'uuidv4'

@Entity('doctors')
export class Doctor {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  constructor (props: Omit<Doctor, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    }
  }
}
