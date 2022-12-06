const getUser = (req, res) => {
  res.json([
    {
      id: 1,
      name: "Toledo",
      last_name: "Fernando",
      email: "toledof764@gmail.com"
    },
    {
      id: 2,
      name: "Fernando",
      last_name: "Toledo",
      email: "toledoferchu3@gmail.com"
    }
  ])
}

module.exports = { getUser }