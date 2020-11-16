import { useRouter } from 'next/router'

function ActiveLinkSideNav({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'blue' : 'yellow',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLinkSideNav;
