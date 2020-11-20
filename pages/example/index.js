import fetch from 'isomorphic-unfetch';
import Item from '@components/PressShow/Item';
import Media from 'components/PressShow/Media';
import { useState } from 'react';


export default function Example({ data }){
  const articles = data
  const [activeIndex, setActiveIndex ] = useState(-1);
   
  return(
    <>
    
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

    

  <style jsx>{`
    .pageWrapper{
      width:100%;
      display:flex;
      align-items:center;
      position:relative;
      font-size:20px;
      
    }

    .projectList{
      mix-blend-mode:difference;
      z-index:1;

    }

    .projectMedia{
      width:100%;
      height:100%;
      top:0;
      left:0;
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

