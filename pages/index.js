import Image from 'next/image'
import mypic from '../assets/home-profile-foto.png'
import figmaLogo from '../assets/skills/figma-logo.png'

import styles from '../styles/Home.module.css'
import {FIGMA_IMG_DATA, XD_IMAGE_DATA, PROTO_TYPE_IMG_DATA} from '../data/skill-image.json'


export default function Home() {
  return (
    <div className={styles.container}>
    <div  className={styles.container_image}>  
      <Image
            className={styles.images}
            src={mypic}
            width={200}
            height={200}
            alt="Picture of the author"
            placeholder="blur" // placeholder="empty" 
        />
      </div>
      <span className={styles.greetings}>Nice to see you.</span>
      <span className={styles.greet_word}>
      Hi Everyone! I Am Alders Antonius Samosir <br/> I Am An Entry Level UI UX Designer <br/> Currently Studying In Google Ux Certification 
      </span>
      <div className={styles.skill}>
          <span className={styles.skill_title}>
             <center>Tools & skills</center>
          </span>
          <div className={styles.skill_list}>
            {
              [{
                name: 'Figma',
                background: FIGMA_IMG_DATA,
                imgId: 'image0_42_19'
              },
              {
                name: 'Adobe XD',
                background: XD_IMAGE_DATA,
                imgId: 'image0_178_62'
              },
              {
                name: 'Prototype',
                background: PROTO_TYPE_IMG_DATA,
                imgId: 'image0_181_66'
              }].map(({imgId, name, background}) => {
                return (
                  <div key={imgId} className={styles.skill_item}>
                    <div className="relative w-[80px] h-[80px] sm:rounded-full overflow-hidden">
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <circle cx={15} cy={15} r={15} fill={`url(#pattern${imgId})`} />
                          <defs>
                            <pattern id={`pattern${imgId}`} patternContentUnits="objectBoundingBox" width={1} height={1}>
                              <use xlinkHref={`#${imgId}`} transform="scale(0.00195312)" />
                            </pattern>
                            <image id={imgId}  width={512} height={512}   xlinkHref={background} />
                          </defs>
                        </svg>
                        <div className="absolute w-full  hover:h-full hover:py-10 hover:transition-all py-2 bottom-0 inset-x-0 bg-black bg-opacity-60 text-white text-xs text-center leading-4">{name}</div>
                      </div>
                    </div>
                )
              })
            }
          </div>
      </div>
      <div className={styles.link_buttons}>
        <button className={styles.button}>Check out My Work</button>
        <button className={styles.button}>Download Resume</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className='lg:hidden h-[200px]'>small show</div>
    </div>
  )
}

