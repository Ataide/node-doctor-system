import * as yup from 'yup'

const doctorSchema = yup.object({
  name: yup.string().required().length(120),
  crm: yup.string().required()
})

export default doctorSchema
