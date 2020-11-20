import Background from 'components/Background';
import SideNav from 'components/SideNav';
import Awards from 'components/Awards';
import Prensa from 'components/Prensa';
import Contact from 'components/Contact';

import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Item from '@components/PressShow/Item';
import Media from 'components/PressShow/Media';



export default function About({ data }) {
  const articles = data
  const [activeIndex, setActiveIndex ] = useState(-1);

  return(
  <>
  <div className='mainWrapper'>
    <img className='image' src="/aboutmepicture.jpg" />
  <div className="container">
    <div className="wrap">
      <div className="sidebar">
        <SideNav />
      </div>
      <div className="content">
        <Background />
        <Contact />
        <Awards />
        {/* <Prensa /> */}

     
      <div className='pageWrapper'>

      <div className='projectList'>

     
      {articles.map(({title, id, description, year}, index) => 
        <div key={id}>
          <Item 
            description={description} 
            year={year} 
            title={title} 
            setActiveIndex={setActiveIndex} 
            index={index}/>
        </div>
      )}
    
      </div>

      <div className='projectMedia'>
     
        {articles.map(({image, id}, index) => {
          const isActive = index === activeIndex; 
        return (
        <div key={id}>
          <Media image={image} active={isActive} />
        </div>
        )})}
      
      </div>  
    </div>
  </div>
  </div>
</div>



   
</div>

    <style jsx>{`
  
    .mainWrapper {
    overflow:hidden;
    padding: 0px 20px 5px 20px;
    font-size:20px;
    
    }

    .container {
      height: calc(100vh - 50px);
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      margin-top:50px;
    }
    .image{
      width:100%;
    }
    .wrap {
      display: grid;
      grid-template-columns: 1fr 5fr;
      overflow: hidden;
    }

    .content {
      overflow-y: scroll;
      scroll-behavior: smooth;
    }

    @media screen and (max-width: 667px) {
      .wrap{
        grid-template-columns: 1fr;
      }

      .sidebar{
        margin-bottom:40px;
      }
    }

    .pageWrapper{
      display:flex;
    }
   

      `}</style>
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/press`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}


