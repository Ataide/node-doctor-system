import { getRepository } from 'typeorm'
import Expertise from '../../entities/Expertise'

export default {

  mockWithoutExpertises: {
    name: 'Ataide Bastos',
    crm: '11.222.33',
    phone: '88 9915-9133',
    cel: '88 99234-8255',
    zipcode: '62.620.000',
    address: 'Irauçuba',
    expertises: []
  },
  mockWithNameTooBig: {
    name: 'aisuhdaiushdiasuhdiasuhdiaushdiashdiaushdiuashdiusahdiuashdiuashdiuashdiuashdiusahdasiudhaisuhdaiushdasdsadsadsadasdsadsadsadsadsadsadsadasi',
    crm: '11.222.33',
    phone: '88 9915-9133',
    cel: '88 99234-8255',
    zipcode: '62.620.000',
    address: 'Irauçuba',
    expertises: []
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async listExpertises () {
    const repo = getRepository(Expertise)
    const listExpertises = await repo.find({ where: [{ name: 'Alergologia' }, { name: 'Angiologia' }] })
    return listExpertises
  }
}
