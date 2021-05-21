import { Column, Entity, PrimaryColumn } from 'typeorm'
import { uuid } from 'uuidv4'

@Entity('doctors')
class Doctor {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public name: string

  @Column()
  public crm: string

  @Column()
  public phone: string

  @Column()
  public cel: string

  @Column()
  public zipcode: string

  @Column()
  public address: string

  @Column()
  public specialties: string

  constructor (props: Omit<Doctor, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    }
  }
}

export default Doctor
