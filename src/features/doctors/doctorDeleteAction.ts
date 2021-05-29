import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Doctor from '../../entities/Doctor'

export async function doctorDeleteAction (request: Request, response: Response):Promise<Response> {
  try {
    const repository = getRepository(Doctor)
    const results = await repository.delete({ id: request.params.id })
    return response.send(results)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
}
