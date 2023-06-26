import { styles } from "../styles";
import mypic from "../assets/mypic.jpeg";


const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto items-start xl:flex-row flex flex-col-reverse `}
      >
        <div className="flex-[0.8] p-8">
          <p className={styles.sectionSubText}>About Me</p>
          
          <h2 className={`${styles.sectionHeadText}`}>Hi, I'm <span className="text-[#915eff]">Hodan</span></h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I have strong organisational, interpersonal and time management skills Ability to deal with pressure and 
            emotionally charged situations            
            <br className="sm:block hidden" />
            Fluent in four languages
          </p>
        </div>
        <div className="xl:flex xl:h-auto md:h-[550px] h-[350px]">
          <img 
            src={mypic}
            alt="profilepic"
            className="h-80 w-80 rounded-full content-cover border border-indigo-700"
          />
        </div>
      </div>
    </section>
  )
}

export default About