const Footer = () => {
  return (
    <footer className="bg-[rgba(13,6,21,0.8)] backdrop-blur-[20px] border-t border-[rgba(163,216,244,0.2)] py-8 px-5 mt-16">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-primary text-sm m-0">
          &copy; 2025 Worawich Yimsabai. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://discord.gg/y8UzsmpGYG" target="_blank" rel="noopener noreferrer" className="text-text-primary text-xl transition-colors duration-300 hover:text-secondary">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://github.com/WorawxxhOfficial" target="_blank" rel="noopener noreferrer" className="text-text-primary text-xl transition-colors duration-300 hover:text-secondary">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.facebook.com/Worrawit.Yimsabai" target="_blank" rel="noopener noreferrer" className="text-text-primary text-xl transition-colors duration-300 hover:text-secondary">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/imyourjxmmy_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-text-primary text-xl transition-colors duration-300 hover:text-secondary">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

