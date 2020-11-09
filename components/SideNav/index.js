const SideNav = () => {
  return(
    <>
    <div className="container" id="outer-container">
        <nav className="nav" id="page-wrap">
          <a href="#bckg">Background</a>
          <a  href="#contact">Contact</a>
          <a  href="#research">Reaserch, Papers & Articles</a>
          <a  href="#awards">Awards & Distinctions</a>
          <a  href="#exhibitions">Exhibitions</a>
       </nav> 
      </div>
      
      <style jsx>{`
        .container{
          position:relative;
          top:150px;
        }
        .nav{
          top: 0;
          margin-top:5px;
        }
        a{
          text-decoration: none;
          font-size: 20px;
          color: white;
          display: block;
        }

        @media screen and (max-width: 667px) {
          .container{
          position:relative;
          top:0px;
          margin-bottom:20px;
          }
        }
        `}</style>
      
      </>
  )
}
export default SideNav;



// import { makeStyles } from '@material-ui/core/styles';
// const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
//   nav:{
//     top: 0,
//     marginTop:5,
//   },
//   container:{
//     position:'relative',
//     top:'150px',
//   },
//   a:{
//     textDecoration: 'none',
//     fontSize: 20,
//     color: 'white',
//     display: 'block',
//   }
// }));