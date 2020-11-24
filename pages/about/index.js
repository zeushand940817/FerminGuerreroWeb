import { useRef, useEffect, useState } from "react";
import fetch from 'isomorphic-unfetch';
import Item from '@components/Press/Item';
import Background from 'components/Background';
import Awards from 'components/Awards';
import Contact from 'components/Contact';


const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


export default function About({data}){
  const articles = data
  const [visibleSection, setVisibleSection] = useState();

  const sidenavRef = useRef(null);
  const backgroundRef = useRef(null);
  const contactRef = useRef(null);
  const awardsRef = useRef(null);
  const pressRef = useRef(null);

  const sectionRefs = [
    { section: "background", ref: backgroundRef },
    { section: "contact", ref: contactRef },
    { section: "awards", ref: awardsRef },
    { section: "press", ref: pressRef },

  ];

 useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(sidenavRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return(
    <>
 <div className="wrapper">
      <div className="topSpacer">
        <img className='image' src="/aboutmepicture.jpg" />
      </div>
      <div className="content">
        <div className="sticky">
          <div className="header" ref={sidenavRef}>
        <button
          type="button"
          className={`header_link ${visibleSection === "background" ? "selected" : ""}`}
          onClick={() => { scrollTo(backgroundRef.current) } }> 
          Background
        </button>
        <button
          type="button"
          className={`header_link ${visibleSection === "contact" ? "selected" : ""}`}
          onClick={() => { scrollTo(contactRef.current) } }>
        Contact
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "awards" ? "selected" : ""}`}
        onClick={() => { scrollTo(awardsRef.current)} }>
        Awards & Distinctions
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "press" ? "selected" : ""}`}
        onClick={() => { scrollTo(pressRef.current) } }>
        Research & Articles
      </button>
    </div>
  </div>

  <div className="section" id="background" ref={backgroundRef}>
    <Background />
  </div>
  <div className="section" id="contact" ref={contactRef}>
    <Contact />
  </div>
  <div className="section" id="awards" ref={awardsRef}>
    <Awards />
  </div>
  <div className="section" id="press" ref={pressRef}>
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
      <div className="bottomSpacer" />
    </div>



<style jsx>{`

  .wrapper{
  font-size:20px;
  display:grid;
  grid-template-columns: 1fr;
  padding: 0px 20px 5px 20px;
  }

  .image{
  width:100%;
  }

  .content{
  margin-top:50px;
  }

  .topSpacer {
  height: auto;
  }

  .bottomSpacer {
  height: 20vh;
  }

  .sticky {
  position: sticky;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 10;
  }

  .header {
  width:auto;
  background-color:transparent;
  display: flex;
  flex-direction:column;
  margin-top: 50px;
  }

  .header_link {
  background-color:transparent;
  display:flex;
  justify-content:left;
  font-size:20px;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  
  }

.selected {
  font-style:italic;
  color: yellow;
}

.section {
  background:transparent;
  height: auto;
}

#background {
  margin-top:-150px;
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