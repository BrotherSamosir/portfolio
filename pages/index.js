import  { useState, useEffect } from 'react';
import Image from 'next/image'
import mypic from '../assets/home-profile-foto.png'
import figmaLogo from '../assets/skills/figma-logo.png'
import modalImg from '../assets/modal-image.png'
import { motion }from 'framer-motion'

import styles from '../styles/Home.module.css'
import {FIGMA_IMG_DATA, XD_IMAGE_DATA, PROTO_TYPE_IMG_DATA, WIRE_FRAME_IMG_DATA} from '../data/skill-image.json'
import { useRouter } from 'next/router'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}




export default function Home() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight)
  }, []);

  return (
    <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
            delay={0.2}
        >
    <div className={styles.container} style={{height: screenHeight}}>
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
              },{
                name: 'Wireframing',
                background: WIRE_FRAME_IMG_DATA,
                imgId: 'image0_181_67'
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
        <button className={styles.button} onClick={() => router.push('/works')}>
        Check out My Work
        </button>
        <a className={styles.button} style={{cursor:'pointer'}} href='https://drive.google.com/file/d/1SZq1bUcE8nxJ38LIWPvrtUP9tU-ODAoi/view?usp=sharing' target={'_blank'} rel="noreferrer" >
        <button  style={{padding: 10}}>
           Download Resume</button>
           </a>
        <button className={styles.button} onClick={() => setShowModal(true)}
>Contact</button>
      </div>
      <div className='lg:hidden h-[200px]'>small show</div>

      {/* modal contact */}
      {showModal ? (
        <>
          <motion.div
         initial="hidden"
         animate="enter"
         exit="exit"
         variants={variants}
         transition={{ type: 'linear' }}
         delay={0.2}
      >
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative my-6 mx-auto max-w-3xl sm:w-3/4 sm:w-3/4 lg:w-1/4 lg:h-3/4 m-20">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full lg:h-[600px] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="items-start justify-center p-5 rounded-t">
                  <center>
                  <h3 className="text-center text-3xl font-semibold">
                  Let’s connect!
                  </h3>
                  </center>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <center>
                  <Image
                    className={''}
                    src={modalImg}
                    alt="Picture of the author"
                    placeholder="blur" // placeholder="empty" 
                />
                </center>
                  <p className="my-4 text-black text-lg leading-relaxed">
                  Thank you for taking your time to visit my portfolio website. If you want to talk further, please contact me, my contact information is provided below.
                  </p>
                  <span className='flex flex-row justify-center'>
 
                     <a id='facebook' href='https://web.facebook.com/alders.samosir.1/' target={'_blank'} rel="noreferrer" className='cursor-pointer	ml-10 '>
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.7703 12.3132C24.7703 5.69813 19.4202 0.335815 12.8213 0.335815C6.21945 0.337303 0.869263 5.69813 0.869263 12.3147C0.869263 18.2915 5.23963 23.2462 10.9513 24.1449V15.7755H7.9192V12.3147H10.9543V9.67374C10.9543 6.67269 12.7391 5.01519 15.468 5.01519C16.7764 5.01519 18.1431 5.24879 18.1431 5.24879V8.19479H16.636C15.1529 8.19479 14.6898 9.11876 14.6898 10.0665V12.3132H18.0027L17.474 15.774H14.6883V24.1434C20.4 23.2447 24.7703 18.2901 24.7703 12.3132Z" fill="black"/>
                      </svg>
                     </a>
                     <a id='instagram' href='https://www.instagram.com/alders_antonius_samosir/' target={'_blank'} rel="noreferrer" className='cursor-pointer	ml-3'>
                     <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.0836 13.4934C17.0836 14.1439 16.8865 14.7798 16.5173 15.3207C16.148 15.8616 15.6231 16.2831 15.009 16.5321C14.395 16.781 13.7192 16.8461 13.0673 16.7192C12.4154 16.5923 11.8166 16.2791 11.3466 15.8191C10.8766 15.3591 10.5566 14.7731 10.4269 14.1351C10.2972 13.4971 10.3638 12.8358 10.6181 12.2348C10.8725 11.6338 11.3032 11.1201 11.8559 10.7587C12.4085 10.3973 13.0583 10.2044 13.723 10.2044C14.6134 10.2072 15.4666 10.5545 16.0963 11.1708C16.7259 11.787 17.0809 12.622 17.0836 13.4934ZM24.2251 8.97107V18.0158C24.2251 19.5423 23.6054 21.0063 22.5025 22.0857C21.3996 23.1651 19.9037 23.7716 18.3439 23.7716H9.10206C7.54227 23.7716 6.04637 23.1651 4.94344 22.0857C3.84051 21.0063 3.22089 19.5423 3.22089 18.0158V8.97107C3.22089 7.44456 3.84051 5.98056 4.94344 4.90115C6.04637 3.82174 7.54227 3.21533 9.10206 3.21533H18.3439C19.9037 3.21533 21.3996 3.82174 22.5025 4.90115C23.6054 5.98056 24.2251 7.44456 24.2251 8.97107ZM18.764 13.4934C18.764 12.5177 18.4683 11.5638 17.9144 10.7525C17.3605 9.94123 16.5732 9.30889 15.6521 8.93549C14.731 8.56209 13.7174 8.46439 12.7395 8.65475C11.7617 8.84511 10.8634 9.31497 10.1584 10.0049C9.45345 10.6949 8.97334 11.574 8.77883 12.531C8.58433 13.488 8.68415 14.4799 9.0657 15.3814C9.44724 16.2829 10.0934 17.0534 10.9223 17.5955C11.7513 18.1376 12.726 18.4269 13.723 18.4269C15.0599 18.4269 16.3421 17.9072 17.2875 16.9819C18.2329 16.0567 18.764 14.8019 18.764 13.4934ZM20.4443 8.14882C20.4443 7.90489 20.3704 7.66643 20.2319 7.4636C20.0934 7.26077 19.8966 7.10269 19.6663 7.00934C19.4361 6.91599 19.1827 6.89156 18.9382 6.93915C18.6937 6.98674 18.4692 7.10421 18.2929 7.2767C18.1167 7.44919 17.9967 7.66895 17.948 7.90821C17.8994 8.14746 17.9244 8.39545 18.0197 8.62082C18.1151 8.84619 18.2767 9.03881 18.4839 9.17434C18.6912 9.30986 18.9348 9.3822 19.1841 9.3822C19.5183 9.3822 19.8389 9.25225 20.0752 9.02095C20.3115 8.78965 20.4443 8.47594 20.4443 8.14882Z" fill="black"/>
                      </svg>
                     </a>

                     <a id='linkedin' href='https://www.linkedin.com/in/alders-antonius-samosir-a1b7481a6/' target={'_blank'} rel="noreferrer" className='cursor-pointer	ml-3'>
                     <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.65314 3.15253C1.65314 2.669 1.84252 2.20527 2.17962 1.86337C2.51672 1.52146 2.97392 1.32938 3.45065 1.32938H21.3691C21.6053 1.32899 21.8393 1.37586 22.0577 1.46732C22.2761 1.55878 22.4745 1.69303 22.6416 1.86237C22.8088 2.03172 22.9414 2.23284 23.0318 2.45422C23.1222 2.67561 23.1687 2.9129 23.1685 3.15253V21.3265C23.1688 21.5661 23.1224 21.8035 23.0322 22.025C22.9419 22.2465 22.8094 22.4477 22.6424 22.6173C22.4753 22.7868 22.277 22.9212 22.0587 23.0129C21.8403 23.1046 21.6063 23.1517 21.37 23.1516H3.45065C3.21452 23.1516 2.98069 23.1044 2.76255 23.0127C2.5444 22.921 2.3462 22.7867 2.17927 22.6173C2.01234 22.4479 1.87996 22.2468 1.78968 22.0255C1.69941 21.8041 1.65301 21.567 1.65314 21.3275V3.15253ZM10.1693 9.6496H13.0827V11.1335C13.5032 10.2805 14.579 9.51271 16.1956 9.51271C19.2948 9.51271 20.0292 11.2119 20.0292 14.3295V20.1044H16.8929V15.0397C16.8929 13.2642 16.4724 12.2623 15.4044 12.2623C13.9228 12.2623 13.3067 13.3425 13.3067 15.0397V20.1044H10.1693V9.6496ZM4.79047 19.9685H7.92781V9.51271H4.79047V19.9675V19.9685ZM8.3767 6.10249C8.38261 6.37495 8.33481 6.64585 8.2361 6.89932C8.13739 7.15278 7.98976 7.38369 7.80188 7.5785C7.61399 7.77331 7.38963 7.92809 7.14196 8.03377C6.8943 8.13944 6.62832 8.19387 6.35963 8.19387C6.09094 8.19387 5.82496 8.13944 5.5773 8.03377C5.32963 7.92809 5.10527 7.77331 4.91738 7.5785C4.72949 7.38369 4.58186 7.15278 4.48315 6.89932C4.38445 6.64585 4.33665 6.37495 4.34256 6.10249C4.35417 5.56771 4.57178 5.05879 4.94879 4.68473C5.3258 4.31067 5.83223 4.10122 6.35963 4.10122C6.88703 4.10122 7.39346 4.31067 7.77047 4.68473C8.14747 5.05879 8.36509 5.56771 8.3767 6.10249Z" fill="black"/>
                      </svg>
                     </a>

                     <a id='twitter' href='https://twitter.com/BrotherSamosir' target={'_blank'} rel="noreferrer" className='cursor-pointer	ml-3'>
                     <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6051 1.82535C6.83126 1.82535 2.14966 6.48892 2.14966 12.2405C2.14966 17.9921 6.83126 22.6557 12.6051 22.6557C18.3789 22.6557 23.0605 17.9921 23.0605 12.2405C23.0605 6.48892 18.3789 1.82535 12.6051 1.82535ZM17.6297 9.67623C17.6367 9.7855 17.6367 9.89942 17.6367 10.011C17.6367 13.4238 15.0276 17.3551 10.2596 17.3551C8.78931 17.3551 7.42637 16.9296 6.27815 16.1973C6.48819 16.2206 6.6889 16.2299 6.9036 16.2299C8.11718 16.2299 9.23274 15.8207 10.1219 15.1279C8.98302 15.1047 8.02616 14.3607 7.69943 13.3378C8.09851 13.3959 8.45791 13.3959 8.86866 13.2913C8.28224 13.1726 7.75515 12.8554 7.37694 12.3934C6.99872 11.9315 6.79272 11.3534 6.79392 10.7573V10.7247C7.13698 10.9177 7.54073 11.0362 7.96315 11.0525C7.60804 10.8168 7.31682 10.4974 7.11531 10.1227C6.91379 9.74795 6.80821 9.32949 6.80792 8.9044C6.80792 8.42316 6.93394 7.98377 7.16032 7.6025C7.81122 8.40069 8.62345 9.05351 9.54421 9.51853C10.465 9.98355 11.4737 10.2504 12.5047 10.3016C12.1383 8.54638 13.4546 7.12592 15.0369 7.12592C15.7837 7.12592 16.4558 7.43744 16.9296 7.9396C17.5154 7.83033 18.0755 7.6118 18.5749 7.31888C18.3812 7.91635 17.9751 8.42084 17.436 8.73933C17.9588 8.68354 18.4629 8.5394 18.9297 8.33714C18.5773 8.85325 18.1362 9.31124 17.6297 9.67623Z" fill="black"/>
                      </svg>

                     </a>
                  </span>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </motion.div>
        </>
      ) : null}
    </div>
    </motion.main>
  )
}

