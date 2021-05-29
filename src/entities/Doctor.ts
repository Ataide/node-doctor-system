import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import Expertise from './Expertise'

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

  @ManyToMany(() => Expertise)
  @JoinTable()
  public expertises: Expertise[]

  constructor (props: Omit<Doctor, 'id'>) {
    Object.assign(this, props)
  }
}

export default Doctor
