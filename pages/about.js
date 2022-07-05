import Image from 'next/image'
import mypic from '../assets/about-profile.png'
import { motion }from 'framer-motion'


const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

export default function About() {
    return (
        <>
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
            delay={0.2}
        >
        <div className="hidden md:hidden lg:block flex flex-col md:p-40 lg:p-52 m-10 ">
        <div className="flex flex-1 flex-row w-full text-white mb-20">
            <div className={`myimage flex z-30 `}>
                <Image
                    className='w-full h-1/2'
                    src={mypic}
                    alt="Picture of the author"
                    placeholder="blur" // placeholder="empty" 
                />
            </div>
            <div className={`content flex flex-col px-20 w-3/4`}>
                <div className='w-full flex-1 justify-start '>
                    <br/>
                    <span>
                        <h1 className='text-3xl '>Alders Antonius Samosir</h1>
                        <p>{'Entry Level Ui & Ux Designer'}</p>
                    </span>
                    <br/><br/><br/>
                    <span className='w-[200px]'>
                    {"I'm Alders, an entry-level UI&UX designer who takes up the challenge of turning complex goals into designs that are simple, accessible, fun and easy to use. "}
                    </span>
                </div>
            </div>
        </div>
       </div>
       <div className="lg:hidden md:block sm:block flex flex-col p-15 mb-15 md:p-52">
        <div className="flex flex-1 flex-col w-full text-white mb-40">
            <div className={`myimage flex flex-col justify-center p-20 `}>
                <div className='flex flex-1 w-full px-10'>
                <Image
                    className='w-full  h-full w-100 h-100  z-40'
                    src={mypic}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    placeholder="blur" // placeholder="empty" 
                />
                </div>
                <div className='flex flex-1 w-full'>
                <div className='w-1/2 flex-1 justify-start '>
                    <br/>
                    <span>
                        <h1 className='text-3xl '>Alders Antonius Samosir</h1>
                        <p>{"Entry Level Ui & Ux Designer"}</p>
                    </span>
                    <br/><br/><br/>
                    <span className='w-[200px]'>
                    {"I'm Alders, an entry-level UI&UX designer who takes up the challenge of turning complex goals into designs that are simple, accessible, fun and easy to use."}
                    </span>
                </div>
                </div>
            </div>
        </div>
       </div>
       </motion.main>
       </>
    )
}