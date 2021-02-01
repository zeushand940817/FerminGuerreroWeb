import { useRouter } from 'next/router'

export default function Custom404() {
  const { asPath } = useRouter()
  if (asPath.startsWith('/posts')) {
    Router.push('/fallback', asPath)
  }

  return (
    <>
      <div
        className="errorPage"
        style={{
          backgroundImage: `url('/404.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <style jsx>{`
        .errorPage {
          width: 100vw;
          height: 100vh;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
