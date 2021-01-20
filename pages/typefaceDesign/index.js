import Link from 'next/link'

//Components
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import Footer from 'components/Footer'
import { makeStyles } from '@material-ui/core/styles'

//Data fetching
import { getProjectsData } from 'utils/getData'

//Media queries
import device from 'utils/media-queries'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  imageList: {
    ['@media (max-width:677px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

export default function TypefaceDesign({ data }) {
  const classes = useStyles()
  return (
    <>
      <div className="mainWrapper">
        <div className={classes.root}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={13}
            className={classes.imageList}
          >
            {data.map((projectFilter) => (
              <Link
                key={projectFilter.id}
                href={`/projects/[slug]`}
                as={`/projects/${projectFilter.slug}`}
              >
                <a>
                  <div className="container">
                    <ImageListItem key={projectFilter.id}>
                      <img
                        className="imagen"
                        alt={projectFilter.name}
                        src={projectFilter.image}
                      />

                      <div className="text">
                        <p>{projectFilter.name}</p>
                      </div>
                    </ImageListItem>
                  </div>
                </a>
              </Link>
            ))}
          </ImageList>
        </div>

        <Footer />
        <style jsx>{`
          .mainWrapper {
            width: 100%;
            padding: 30px 15px 0px 15px;
          }
          .imagen {
            width: 100%;
            height: 100%;
            padding-right: 0px;
          }
          .videoClass {
            width: 100%;
            height: 100%;
            padding-right: 0px;
          }

          .container:hover {
            opacity: 1;
            -webkit-animation: flash 1.5s;
            animation: flash 1.5s;
            font-weight: bold;
          }

          @-webkit-keyframes flash {
            0% {
              opacity: 0.4;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes flash {
            0% {
              opacity: 0.4;
            }
            100% {
              opacity: 1;
            }
          }

          .container:hover .videoClass {
            opacity: 1;
            -webkit-animation: flash 1.5s;
            animation: flash 1.5s;
          }

          .text {
            font-size: 20px;
            color: white;
            padding-top: 20px;
            padding-bottom: 25px;
          }

          @media only Screen and ${device.tablet} {
            .text{
              font-size: 18px;
              color: white;
              line-height: 18px;
              padding-top: 5px;
            }
          }

          @media only Screen and ${device.desktop} {
            .mainWrapper {
              padding: 30px 20px 0px 20px;
            }
         
            .text{
              font-size: 20px;
              line-height: 0px;
              padding-top: 20px;
            }
        `}</style>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await getProjectsData()
  const filteredData = data.filter((element) => element.type === 'typeface')
  return {
    props: {
      data: filteredData,
    },
  }
}
