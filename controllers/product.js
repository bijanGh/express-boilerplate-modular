import fakerData from '../static/fakerDataModel'
// import { prisma } from '../generated/prisma-client'
import _ from 'lodash'

const getLastWinners = async (req, res) => {
  if (!process.env.DATA_TEST) {
    // await prisma.$graphql(q).then(result => res.json(result))
  } else {
    await res.send(
      // faker.helpers.randomize([null, _.orderBy(fakerData.productLastWinners)])
      _.orderBy(fakerData.productLastWinners, 'createdAt', 'desc')
      // null
    )
  }
}

const getProduct = async (req, res) => {
  const postId = req.params
  res.send(postId)
}

export default { getLastWinners, getProduct }
