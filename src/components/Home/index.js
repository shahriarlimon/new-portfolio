import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h', 'a', 'h', 'r', 'i', 'a', 'r', '', 'L', 'i', 'm', 'o', 'n']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'W',
    'e',
    'b',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _8`}>i,</span>
            <br />
            <span className={`${letterClass} _9`}>I</span>
            <span className={`${letterClass} _10`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={11}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={12}
            />
          </h1>
          <h2>Front End Developer / MERN Stack Developer/ JavaScript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
