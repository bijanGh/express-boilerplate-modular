const sayHi = async (req, res) => {
  // const q = 'query{auctions{id}}'
  if (!process.env.DATA_TEST) {
    await res.send('say hi to production enviroment')
  } else {
    await res.send('say hi to development enviroment')
  }
}

export default { sayHi }
