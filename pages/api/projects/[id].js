import projects from 'database/projects';

export default (req, res) => {
  const { id } = req.query
  const filteredProject = projects.find((project) => {
    return project.id === id
  })
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(filteredProject))
}