import { useRouter } from 'next/router'
import { VscDebugBreakpointFunctionUnverified } from 'react-icons/vsc'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'white' : 'white',
    fontWeight: router.pathname === href ? 'bold' : 'lighter',
    borderBottom: router.pathname === href ? '1px solid white' : 'none',
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

      <style jsx>{``}</style>
    </>
  )
}

export default ActiveLink
