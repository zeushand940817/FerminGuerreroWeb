import Grid from '@material-ui/core/Grid'
import fetch from 'isomorphic-unfetch'



export default function DetailPage({data}) {
  console.log(data, 'HOLA SOY DATA EN DETAIL PAGE')

  return (
    <>
   <div className='container'>
     <Grid container lg={12}>
       <img className='mainImage' src={data.image} />
     </Grid> 

   <Grid container lg={12}>
    <div className='gridContainer'>
     <Grid item xs={3} lg={2}>
       <div className='name'>
        {data.name}
       </div>
     </Grid>
     <Grid item xs={12} sm={6} lg={4}>
       <div className='yearandtags'>
        <p>{data.year}</p>
        <p>Tags: Poster, Illustration, Visual Identity</p>
       </div>
     </Grid>
     <Grid item xs={12} sm={3} lg={6}>
       <div className="description">
        {data.attributes.description}
       </div>

     </Grid>
     </div>
   </Grid>

   <Grid container spacing={1}>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img1} />
        </Grid>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img2} />
        </Grid>
       </Grid>
      <Grid container spacing={1}>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img3} />
        </Grid>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img4} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img5} />
        </Grid>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img6} />
        </Grid>
      </Grid>

      <Grid container  spacing={1}>
        <Grid item lg={12}>
          <img className='imgGallery' src={data.images.img7} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img8} />
        </Grid>
        <Grid item lg={6}>
          <img className='imgGallery' src={data.images.img9} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item lg={12}>
          <img className='imgGallery' src={data.images.img10} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item lg={12}>
          <img className='imgGallery' src={data.images.img12} />
        </Grid>
      </Grid>
 


 </div>
          
      <style jsx>{`
      .container{
        width: 100%;
        font-size:20px;
        padding: 3px 20px 5px 20px;
      }
      .imageContainer{
        max-width: 100vw;
        height:auto;
        padding: 10px 10px 0px 10px;
        column-count: 3;
      }

      .gridContainer{
        display:flex;
        flex-direction:row;
        height:auto;
        margin-bottom:30px;
        padding: 3px 20px 5px 20px;
        
      }
      .mainImage{
        width:100vw;
        height:auto;
        padding: 3px 20px 5px 20px;

    
      }
      .name{
        display:flex;
        flex-direction:row;
        margin:20px 0px;
       
      }

      .description{
        display:flex;
        height:auto;
        flex-wrap:wrap; 
        margin:20px 0px;
      }

      .yearandtags{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:100%;
      }

      .imgGallery{
        width:100%;
      }
        `}</style>
    </>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { id } = context.params
  const res = await fetch(`${API_URL}/api/projects/${id}`)
  const data = await res.json()
  console.log(data, 'data')
  return {
    props: {
      data: data,
    },
  }

}