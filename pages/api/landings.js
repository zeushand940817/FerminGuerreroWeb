import landings from 'database/landings'

  export default (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify(landings))
  }