const getProducts = (req, res) => {
  res.json([
    {
      id: 1,
      name: "Nombre random",
      precio: 3000
    },
    {
      id: 2,
      name: "Nombre random 2",
      precio: 1000
    },
    {
      id: 3,
      name: "Nombre",
      precio: 2000
    },
    {
      id: 4,
      name: "PC gamer",
      precio: 180000
    }
  ])
}

module.exports = { getProducts };