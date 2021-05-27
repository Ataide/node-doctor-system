import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('doctors')
class Doctor {
  @PrimaryGeneratedColumn()
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

  constructor (props: Omit<Doctor, 'id'>) {
    Object.assign(this, props)
  }
}

export default Doctor
