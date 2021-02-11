import fs from 'fs'
import path from 'path'

// read the json files inside database
const dataDirectory = path.join(process.cwd(), 'database')

const parse = (name) => {
  const filePath = path.join(dataDirectory, name)
  const fileContents = fs.readFileSync(filePath)
  const jsonContent = JSON.parse(fileContents)
  return jsonContent
}

// landing
export function getLandingData() {
  const mobile = []
  const desktop = []
  const parseData = parse('landings.json')
  Object.values(parseData).forEach((element) => {
    if (element.type === 'desktop') {
      desktop.push(element.image)
    } else {
      mobile.push(element.image)
    }
  })
  return {
    mobile,
    desktop,
  }
}

// all projects
export function getProjectsData() {
  const parseData = parse('all-projects.json')
  const ordererProjects = Object.values(parseData).sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )
  return ordererProjects
}

// get project
export function getProject(path) {
  const projects = getProjectsData()
  const filteredContent = projects.filter((element) => element.slug === path)
  return filteredContent
}

// get paths
export function getPaths() {
  const projects = getProjectsData()
  const paths = projects.map((element) => element.slug)

  return paths.map((path) => {
    return {
      params: {
        slug: path,
      },
    }
  })
}

// get paths for tags
export function getPathTags() {
  const tags = [
    'Animation',
    'Editorial',
    'Illustration',
    'Cover-design',
    'Packaging',
    'Photography',
    'Visual-Identity',
    'Poster',
  ]
  const mapTags = tags.map((tag) => {
    return {
      params: {
        tag,
      },
    }
  })
  return mapTags
}

// get articles
export function getArticlesData() {
  const parseData = parse('articles.json')
  return parseData
}

// get Press
export function getPressData() {
  const parseData = parse('press.json')
  return parseData
}

// get Exhibitions
export function getExhibitionsData() {
  const parseData = parse('exhibitions.json')
  return parseData
}

//get awards
export function getAwardsData() {
  const parseData = parse('awards.json')
  return parseData
}

//get Online press
export function getOnlinePressData() {
  const parseData = parse('pressOnline.json')
  return parseData
}
