import { VscTools } from 'react-icons/vsc'

export default function Custom404() {
  return (
    <>
      <div>
        <VscTools color="white" size={60} />
        <h1>PAGE 404 NOT FOUND</h1>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        h1 {
          margin-left: 30px;
        }
      `}</style>
    </>
  )
}
