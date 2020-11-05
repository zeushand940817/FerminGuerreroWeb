import React, { useState, useCallback } from 'react'
import { HamburgerCollapse } from 'react-animated-burgers'
import Header from 'components/Header'

const MobileMenu = () => {

  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

  return (
    <>
    <HamburgerCollapse
      barColor="white"
      buttonStyle={{ backgroundColor: "none", outline:'none' }}
      {...{ isActive, toggleButton }}
    >
      <Header />
    </HamburgerCollapse>
    
    </>
  )
}

export default MobileMenu;
