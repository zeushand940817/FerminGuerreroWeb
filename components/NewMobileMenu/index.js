import { useState } from 'react'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'

export default function NewMobileMenu() {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <style jsx>{``}</style>
    </>
  )
}
