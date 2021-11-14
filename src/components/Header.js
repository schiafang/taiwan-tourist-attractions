import * as S from '../styles/components/header'
import logo from '../assets/logo.svg'
import logoMobile from '../assets/logo-mobile.svg'
import burgerIcon from '../assets/burger-line.svg'
import closeIcon from '../assets/close.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navRouter = [
  {
    label: '探索景點',
    link: 'ScenicSpot',
  },
  {
    label: '節慶活動',
    link: 'Activity',
  },
  {
    label: '品嚐美食',
    link: 'Restaurant',
  },
]

const Header = () => {
  let location = useLocation()

  const [showMobileNav, setShowMobileNav] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)

  useEffect(() => {
    location && setShowMobileNav(false)
  }, [location])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 80) {
        setIsScrollTop(false)
      } else {
        setIsScrollTop(true)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => setIsScrollTop(true))
    }
  }, [])

  return (
    <S.Header>
      {isScrollTop || !showMobileNav ? (
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      ) : null}

      <S.Burger
        onClick={() => setShowMobileNav(!showMobileNav)}
        style={{ opacity: isScrollTop ? 1 : 0.8 }}
      >
        <img src={burgerIcon} />
      </S.Burger>
      <S.Overlay
        style={{ display: showMobileNav ? 'block' : 'none' }}
        onClick={() => setShowMobileNav(false)}
      />

      <S.NavMenu className={`${showMobileNav ? 'display' : ''}`}>
        <div>
          <Link to='/' className='mobile-logo'>
            {showMobileNav ? <img src={logoMobile} alt='logo' /> : null}
          </Link>
          <S.Burger
            className='nav-close-btn'
            onClick={() => setShowMobileNav(false)}
          >
            <img src={closeIcon} />
          </S.Burger>
        </div>
        {navRouter.map((item, index) => {
          let isActive = location.pathname.includes(item.link)

          return (
            <Link
              to={`/explore/${item.link}`}
              key={index}
              className={`${isActive ? 'active' : 'not-active'}`}
            >
              {item.label}
            </Link>
          )
        })}
      </S.NavMenu>
    </S.Header>
  )
}

export default Header
