import press from 'database/press'

  export default (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify(press))
  }