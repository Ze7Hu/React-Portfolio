import { motion } from "framer-motion";

import { SectionWrapper } from "../utils/hoc";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import resume from '../assets/resume.pdf';



const Resume = () => {
  return (
    <>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]  loading-[30px]"
        >
          <h2 className={styles.sectionHeadText}>Resume</h2>
          <p className="py-2 text-white p-2">
          Welcome to my portfolio website. In this section, you can explore my professional background and qualifications through my resume. Get a comprehensive overview of my skills, experience, and educational achievements. Discover how my expertise aligns with your needs and how I can contribute to your projects. Take a closer look at my work history, education, skills, certifications, and notable projects. Feel free to download or print a copy of my resume for a more detailed review. 
          </p>

          <a
            href={`${resume}`}
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl mt-4 float-right'
            download
          >
            Download
          </a>
          
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Resume, "resume")