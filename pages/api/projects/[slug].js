import projects from 'database/projects'

export default (req, res) => {
  const { slug } = req.query
  const filteredProject = projects.find((project) => {
    return project.slug === slug
  })
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(filteredProject))
}
