import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Biography = () => {
  useEffect(() => {
    const bioContent = document.querySelector('#bio-full .section-content')
    if (bioContent) {
      setTimeout(() => {
        bioContent.classList.add('visible')
      }, 200)
    }
  }, [])

  const timeline = [
    {
      title: 'Primary School',
      school: 'Rojvitmala Bieng School',
      description: 'An inspiring start where I first developed a love for problem-solving and logic, setting the foundation for my future in development.'
    },
    {
      title: 'Middle & High School (M.1 - M.6)',
      school: 'Saintnicolas School',
      description: 'This period allowed me to explore various subjects and hone my critical thinking skills. It was here that I began to see the potential of technology to create and innovate.'
    },
    {
      title: 'High School (M.6)',
      school: 'Manawatu College, New Zealand',
      description: 'Studying abroad was a pivotal experience that broadened my perspective, enhanced my English skills, and taught me the importance of adapting to new environments and challenges.'
    },
    {
      title: 'Current (Bachelor\'s Degree)',
      school: 'Chiang Mai University, Faculty of Digital Industry Integration (DII)',
      description: 'My current academic journey is focused on mastering modern development practices, from backend systems to UI/UX design, preparing me to become a versatile Full Stack Developer.'
    },
  ]

  return (
    <div className="min-h-screen">
      <Header showBackButton={true} />
      
      <main>
        <section id="bio-full" className="py-32 px-5 min-h-screen">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-secondary via-primary bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-[#CFCFCF] text-lg text-center mb-12">
              From childhood curiosity to my current path as a developer, here is a detailed look at my educational journey.
            </p>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="bg-[rgba(106,27,154,0.1)] border border-[rgba(224,176,255,0.2)] rounded-xl p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(106,27,154,0.3)]"
                >
                  <h3 className="text-2xl font-bold mb-2 text-secondary">{item.title}</h3>
                  <p className="text-primary text-lg font-semibold mb-3">{item.school}</p>
                  <p className="text-[#CFCFCF] leading-relaxed">{item.description}</p>
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

export default Biography

