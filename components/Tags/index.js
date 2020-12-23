import Projects from 'database/projects'
import projects from 'pages/api/projects'

export default function Tags() {
  console.log(projects.Tags, 'SOY LOS TAGS')
  return (
    <>
      <p> soy projects </p>
      {projects.map((poject, key) => (
        <p>{project.name}</p>
      ))}
    </>
  )
}
