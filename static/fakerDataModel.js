import faker from 'faker'

const customData = require('./fakerHelperCustom')
let localeIndex = 0
let cap = faker.random.number({ min: 10, max: 50 })
const sampleMailingAddress = {
  id: faker.random.uuid(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  company: faker.company.companyName(),
  country: faker.address.country(),
  countryCode: faker.address.countryCode(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude(),
  phone: faker.phone.phoneNumber(),
  province: faker.address.state(),
  provinceCode: faker.address.stateAbbr(),
  zip: faker.address.zipCode()
}
module.exports = {
  auctions: new Array(20).fill(null).map(
    e => (
      (localeIndex = faker.random.number(2)),
      (faker.locale = customData.preferedLocales[localeIndex]),
      (cap = faker.random.number({ min: 10, max: 50 })),
      (e = {
        id: faker.random.uuid(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        pic: faker.helpers.randomize(customData.prodImages),
        product: {
          id: faker.random.uuid(),
          name: faker.name.firstName(),
          model:
            customData.modelInLocales[localeIndex] +
            ': ' +
            faker.name.lastName()
        },
        capacity: cap,
        starterBid: faker.finance.amount(100, 400, 0),
        maxBid: faker.finance.amount(1000, 3000, 0),
        currency: customData.currencyTypes[localeIndex],
        auctionStartTime: faker.date.between(
          customData.sampleDateRange.before,
          customData.sampleDateRange.after
        ),
        auctionEndTime: faker.date.between(
          customData.sampleDateRange.between,
          customData.sampleDateRange.after
        ),
        winnerBid: faker.finance.amount(1000, 3000, 0),
        bidMultiplier: faker.random.number({ min: 1, max: 5 }),
        bidBasePrice: faker.random.number({ min: 1, max: 20 }),
        requiredBidCredit: faker.finance.amount(100, 400, 0),
        allowedBidsPerUser: faker.random.number({ min: 100, max: 150 }),
        winner: {
          id: faker.random.uuid(),
          userName: faker.internet.userName(),
          avatar: faker.image.avatar()
        },
        registeredUsers: new Array(cap).fill(null).map(
          e =>
            (e = {
              userName: faker.internet.userName()
            })
        ),
        // bids: new Array(20).fill(null).map(
        //   e =>
        //     (e = {
        //       createdAt: faker.date.recent(),
        //       user: faker.internet.userName()
        //     })
        // ),
        auctionStatus: faker.helpers.randomize(customData.auctionStatusArray)
      })
    )
  ),
  productLastWinners: new Array(20).fill(null).map(
    e => (
      (localeIndex = faker.random.number(2)),
      (faker.locale = customData.preferedLocales[localeIndex]),
      (cap = faker.random.number({ min: 10, max: 50 })),
      (e = {
        username: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        createdAt: faker.date.recent(),
        auctionEndTime: faker.date.recent(),
        winnerPrice: faker.finance.amount(1000, 3000, 0),
        currency: customData.currencyTypes[localeIndex]
      })
    )
  ),
  auctionById: index => {
    faker.locale = customData.preferedLocales[index]
    return {
      id: faker.random.uuid(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      pic: faker.helpers.randomize(customData.prodImages),
      product: {
        name: faker.name.firstName(),
        price: faker.finance.amount(1000, 3000, 0),
        model: customData.modelInLocales[index] + ': ' + faker.name.lastName(),
        description: customData.productDescription[index],
        images: customData.prodImages,
        currency: customData.currencyTypes[index]
      },
      capacity: cap,
      starterBid: faker.finance.amount(100, 400, 0),
      maxBid: faker.finance.amount(1000, 3000, 0),
      currency: customData.currencyTypes[index],
      auctionStartTime: faker.date.between(
        customData.sampleDateRange.before,
        customData.sampleDateRange.after
      ),
      auctionEndTime: faker.date.between(
        customData.sampleDateRange.between,
        customData.sampleDateRange.after
      ),
      winnerBid: faker.finance.amount(1000, 3000, 0),
      bidMultiplier: faker.random.number({ min: 1, max: 5 }),
      bidBasePrice: faker.random.number({ min: 1, max: 20 }),
      requiredBidCredit: faker.finance.amount(100, 400, 0),
      allowedBidsPerUser: faker.random.number({ min: 100, max: 150 }),
      winner: {
        id: faker.random.uuid(),
        userName: faker.internet.userName(),
        avatar: faker.image.avatar()
      },
      registeredUsers: new Array(cap).fill(null).map(
        e =>
          (e = {
            userName: faker.internet.userName()
          })
      ),
      // bids: new Array(20).fill(null).map(
      //   e =>
      //     (e = {
      //       createdAt: faker.date.recent(),
      //       user: faker.internet.userName()
      //     })
      // ),
      auctionStatus: faker.helpers.randomize(customData.auctionStatusArray)
    }
  },
  mailingAddresses: new Array(5)
    .fill(null)
    .map(
      e => (
        (localeIndex = faker.random.number(2)),
        (faker.locale = customData.preferedLocales[localeIndex]),
        (e = sampleMailingAddress)
      )
    ),
  defaultMailingAddress: index => {
    faker.locale = customData.preferedLocales[index]
    return sampleMailingAddress
  }
}
