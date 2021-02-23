import Grid from '@material-ui/core/Grid'

//Styles
import styles from 'styles/project.module.scss'

const DescriptionProject = ({ element }) => {
  return (
    <Grid item xs={12} sm={12} lg={6}>
      <div className={styles.description}>
        <p
          dangerouslySetInnerHTML={{
            __html: element.description,
          }}
        ></p>
      </div>
    </Grid>
  )
}

export default DescriptionProject
