import Expertise from '../../entities/Expertise'

export interface IDoctorDTO {
  name: string
  crm: string
  phone: string
  cel: string
  zipcode: string
  address: string
  expertisesNames: string[]
  expertises: Expertise[]

}
