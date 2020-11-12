import fetch from 'isomorphic-unfetch';
import { Component } from 'react';
import landings from 'database/landings';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: [
        landings[0].image,
        landings[1].image,
        landings[2].image,
        landings[3].image,
      ],
      activeImageIndex: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      let newActiveIndex =
        this.state.activeImageIndex === 3 ? 0 : this.state.activeImageIndex + 1
      this.setState({
        activeImageIndex: newActiveIndex,
      })
    }, 3000)
  }

  render() {
    const imgIndex = this.state.activeImageIndex;
    return (
      <>
        <div>
          <img src={this.state.imgs[imgIndex]} />
        </div>

        <style jsx>{`
          .image {
            height: 100vh;
            position: center;
          }
        `}</style>
      </>
    )
  }
}
export default Home

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/landings`)
  const data = await res.json()
  console.log(data, 'data')

  return {
    props: {
      data: data,
    },
  }
}