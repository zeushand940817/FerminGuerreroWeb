import Background from 'components/Background';
import SideNav from 'components/SideNav';
import Awards from 'components/Awards';
import Contact from 'components/Contact';

import fetch from 'isomorphic-unfetch';
import Item from '@components/Press/Item';




export default function About({ data }) {
  const articles = data

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
        

      <div className='boxPress'>
        <div className="pageWrapper">
        <div className="projectList">
          {articles.map(({ title, id, description, year }, index) => (
            <div key={id}>
              <Item
                description={description}
                year={year}
                title={title}
                index={index}
                articles={articles}
              />
            </div>
          ))}
        </div>
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

    .boxPress{
      margin-bottom:200px;
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


