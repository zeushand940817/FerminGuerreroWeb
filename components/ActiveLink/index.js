import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    color: router.pathname === href ? 'white' : 'white',
    fontWeight: router.pathname === href ? '700' : 'lighter',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <>
      <a href={href} onClick={handleClick} style={style}>
        {children}
      </a>
    </>
  )
}

export default ActiveLink
