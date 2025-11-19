import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ showBackButton = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-[rgba(13,6,21,0.8)] backdrop-blur-[20px] border-b border-[rgba(163,216,244,0.2)] transition-colors duration-500">
      <nav className="flex justify-between items-center px-5 py-4 max-w-[1200px] mx-auto">
        <Link to="/" className="text-secondary text-2xl font-bold no-underline">
          Worawich Yimsabai
        </Link>
        <div className={`md:static md:bg-transparent md:w-auto md:h-auto md:translate-x-0 fixed top-[70px] right-0 md:right-auto w-full h-[calc(100vh-70px)] bg-[rgba(13,6,21,0.98)] backdrop-blur-[20px] transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} md:translate-x-0`}>
          <ul className="flex md:flex-row flex-col gap-8 list-none m-0 p-8 md:p-0">
            {showBackButton ? (
              <li>
                <Link to="/" onClick={closeMenu} className="text-text-primary no-underline font-normal transition-colors duration-300 hover:text-secondary">
                  Back to Home
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <a href="#about" onClick={closeMenu} className="text-text-primary no-underline font-normal transition-colors duration-300 hover:text-secondary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={closeMenu} className="text-text-primary no-underline font-normal transition-colors duration-300 hover:text-secondary">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={closeMenu} className="text-text-primary no-underline font-normal transition-colors duration-300 hover:text-secondary">
                    Projects
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="block md:hidden bg-transparent border-none cursor-pointer p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text-primary mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
    </header>
  )
}

export default Header

