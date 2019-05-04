import fakerData from '../static/fakerDataModel'
// import { prisma } from '../generated/prisma-client'
import _ from 'lodash'

const getMailingAddresses = async (req, res) => {
  await res.send(_.orderBy(fakerData.mailingAddresses, 'createdAt', 'desc'))
}

const getDefaultMailingAddress = async (req, res) => {
  await res.send(fakerData.defaultMailingAddress(1))
}

export default {
  getMailingAddresses,
  getDefaultMailingAddress
}
