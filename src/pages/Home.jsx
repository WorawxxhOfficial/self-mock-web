import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const skills = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'Java', percent: 85, color: 'java' },
        { name: 'Kotlin', percent: 70, color: 'kotlin' },
        { name: 'Python', percent: 60, color: 'python' },
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: 'fas fa-sitemap',
      skills: [
        { name: 'Spring Boot', percent: 65, color: 'spring' },
        { name: 'Ktor', percent: 55, color: 'ktor' },
      ]
    },
    {
      id: 'database',
      title: 'Database',
      icon: 'fas fa-database',
      skills: [
        { name: 'MySQL', percent: 70, color: 'mysql' },
        { name: 'PostgreSQL', percent: 65, color: 'postgresql' },
      ]
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: 'fas fa-user-friends',
      skills: [
        { name: 'Communication', percent: 75, color: 'communication' },
        { name: 'Teamwork', percent: 80, color: 'teamwork' },
        { name: 'Problem-Solving', percent: 70, color: 'problemsolving' },
      ]
    },
  ]

  const projects = [
    { category: 'web', img: '/imgs/ecom.png', title: 'E-commerce Website', desc: 'A full-stack e-commerce platform with a user-friendly interface, payment gateway integration, and order management system.' },
    { category: 'web', img: '/imgs/hy.png', title: 'Hypixel Server Website (Fork)', desc: 'A forked and customized version of the Hypixel server website, featuring new themes and modified functionalities for a unique community experience.' },
    { category: 'web', img: '/imgs/FR.png', title: 'Flood Relief Website', desc: 'A community-driven platform to help victims of floods by connecting them with volunteers and providing real-time updates on relief efforts.' },
    { category: 'web', img: '/imgs/BB.png', title: 'Bluebik Website Mockup', desc: 'A front-end mockup of the Bluebik website, showcasing design skills and modern web development techniques with a focus on user experience.' },
    { category: 'game', img: '/imgs/muthai.png', title: 'Mu Origin Private Server', desc: 'A custom private server for the mobile game Mu Origin, with modified features and unique gameplay content for a new player experience.' },
    { category: 'game', img: '/imgs/Bdopv.png', title: 'Black Desert Online Private Server', desc: 'A private server for Black Desert Online, featuring custom events, balance changes, and community-driven content updates.' },
    { category: 'game', img: '/imgs/CTR.jpg', title: 'Talesrunner Private Server (Chubby)', desc: 'A unique private server for the game Talesrunner, featuring custom items, maps, and events to create a fresh and nostalgic experience.' },
    { category: 'game', img: '/imgs/TS.png', title: 'Talesrunner Star', desc: 'A separate project based on Talesrunner, with a focus on new game modes and a streamlined user interface to enhance gameplay.' },
    { category: 'game', img: '/imgs/fw.png', title: 'FlufflyWorld', desc: 'A custom Minecraft server network that integrates massive multiplayer online (MMO) elements like quests, unique classes, and an in-depth skill system.' },
    { category: 'game', img: '/imgs/Candy.png', title: 'CandyCraft', desc: 'A themed Minecraft server with a focus on creative building and community events, using custom plugins to create a unique sugary world.' },
    { category: 'game', img: '/imgs/CCM.png', title: 'ChubbyCraft', desc: 'A Minecraft server designed for a specific community, featuring custom mini-games and a strong emphasis on player interaction.' },
    { category: 'game', img: '/imgs/armory.png', title: 'ArmoryCraft', desc: 'A Minecraft server that focuses on combat and unique weapons, with a custom-developed armory system and special abilities.' },
    { category: 'game', img: '/imgs/bjb.png', title: 'BangJaBin Minecraft Server', desc: 'A small-scale Minecraft server built for a specific group, featuring custom plugins and a unique survival experience.' },
    { category: 'game', img: '/imgs/legacyRealms.png', title: 'LegacyRealms Network', desc: 'A comprehensive Minecraft server network that includes multiple game modes, a central hub, and custom backend systems for smooth performance.' },
    { category: 'etc', img: '/imgs/Ama.png', title: 'Amasun Network (Cisco Packet Tracer)', desc: 'A network topology designed and simulated using Cisco Packet Tracer, demonstrating knowledge in network configuration, routing protocols, and security principles.' },
  ]

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)


  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-32 px-5">
          <div className="max-w-[1200px] w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-secondary shadow-[0_0_30px_rgba(224,176,255,0.3)]">
                  <img src="/imgs/image0.jpg" alt="Profile of Worawich Yimsabai" className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-4">
                  <a href="https://discord.gg/y8UzsmpGYG" target="_blank" rel="noopener noreferrer" className="text-text-primary text-2xl transition-colors duration-300 hover:text-secondary">
                    <i className="fab fa-discord"></i>
                  </a>
                  <a href="https://github.com/WorawxxhOfficial" target="_blank" rel="noopener noreferrer" className="text-text-primary text-2xl transition-colors duration-300 hover:text-secondary">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.facebook.com/Worrawit.Yimsabai" target="_blank" rel="noopener noreferrer" className="text-text-primary text-2xl transition-colors duration-300 hover:text-secondary">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/imyourjxmmy_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-text-primary text-2xl transition-colors duration-300 hover:text-secondary">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-milky-blue bg-clip-text text-transparent">
                  Yo, I'm Tatoo
                </h1>
                <div className="bg-[rgba(106,27,154,0.2)] backdrop-blur-[10px] border border-[rgba(224,176,255,0.3)] rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">My Journey</h3>
                  <p className="text-text-primary mb-4 leading-relaxed">
                    My educational path has shaped my skills and perspective. I've gone through various
                    schools, both locally and abroad, and you can learn more about this journey in my
                    full biography.
                  </p>
                  <Link to="/biography" className="inline-block bg-primary text-text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#7B2FAF] hover:shadow-[0_0_20px_rgba(106,27,154,0.5)]">
                    More about Me :)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-5">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-milky-blue bg-clip-text text-transparent">
                My Skills
              </h2>
              <p className="text-[#CFCFCF] text-lg">Here are my core competencies, categorized for clarity.</p>
            </div>
            <div className="space-y-4">
              {skills.map((skillGroup) => (
                <div key={skillGroup.id} className="border border-[rgba(224,176,255,0.2)] rounded-xl overflow-hidden bg-[rgba(106,27,154,0.1)]">
                  <button
                    onClick={() => toggleAccordion(skillGroup.id)}
                    className="w-full flex justify-between items-center p-6 bg-transparent border-none cursor-pointer text-left"
                  >
                    <h3 className="text-xl font-bold text-text-primary flex items-center gap-3">
                      <i className={skillGroup.icon}></i>
                      {skillGroup.title}
                    </h3>
                    <i className={`fas fa-chevron-down transition-transform duration-300 ${activeAccordion === skillGroup.id ? 'rotate-180' : ''}`}></i>
                  </button>
                  {activeAccordion === skillGroup.id && (
                    <div className="p-6 pt-0 space-y-4">
                      {skillGroup.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-4">
                          <span className="text-text-primary font-medium min-w-[120px]">{skill.name}</span>
                          <div className="flex-1 h-3 bg-[rgba(224,176,255,0.1)] rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000`}
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                          <span className="text-text-primary font-medium min-w-[50px] text-right">{skill.percent}%</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-5">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-secondary via-primary to-milky-blue bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-[#CFCFCF] text-lg text-center mb-12">
              A selection of my projects, showcasing my skills and dedication to problem-solving.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'web', 'game', 'etc'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-text-primary shadow-[0_0_20px_rgba(106,27,154,0.5)]'
                      : 'bg-[rgba(224,176,255,0.1)] text-text-primary hover:bg-[rgba(224,176,255,0.2)]'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat === 'web' ? 'Website' : cat === 'game' ? 'Game Server' : 'ETC'}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[rgba(106,27,154,0.1)] border border-[rgba(224,176,255,0.2)] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,27,154,0.3)] hover:scale-105"
                >
                  <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-text-primary">{project.title}</h3>
                    <p className="text-[#CFCFCF] leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home

