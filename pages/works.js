import Image from 'next/image'
import foodAppImg from '../assets/portfolio/food-app.png'
import learningAppImg from '../assets/portfolio/learning-app.png'
import tiketMovieAppImg from '../assets/portfolio/tiket-movie-app.png'
import { motion }from 'framer-motion'


const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}


const works = [
    {
       id: 1,
       name:'Food delivery app',
       image: foodAppImg,
       paragraph: "Food app is a regional restaurant located on the outskirts of a metropolitan city. food app strives to serve healthy food/drinks at relatively cheap prices that have local flavors. they offer competitive prices food app targets customers such as very busy office workers, users who don't want to queue too long at restaurants and also to make things easier people in ordering a food quickly and easily.",
       url: 'https://docs.google.com/presentation/d/1v2ZrrUu3Xs6GkG6v3DKh0-lrzUld3h12kmcO-0V6fmA/edit#slide=id.p'
    },
    {
        id: 2,
        name:'Ticket booking flow design for cinema',
        image: tiketMovieAppImg,
        paragraph: "INDO XXI, is the largest cinema group in Indonesia which started its work in the entertainment industry since 1987. More than 30 years, INDO XXI is committed to providing the best experience and enjoyment for the people of Indonesia. As of August this year, INDO XXI has a total of 1,045 screens spread across 46 cities in 184 locations throughout Indonesia. In addition to films by the nation's children, INDO XXI also presents world-class films.",
        url: 'https://docs.google.com/presentation/d/1KkNpM_W805A17CwEpY_uSmV-Jbn4q6tBxC4S8UxFhQQ/edit#slide=id.ge4c37861fa_0_559'
     },
     {
        id: 3,
        name:'Learning App And Responsive Website',
        image: learningAppImg,
        paragraph: "The learning platform is an application and responsive website that focuses on quality learning at affordable prices or free for people who can't afford it. affordable so that everyone deserves quality learning.",
        url: 'https://docs.google.com/presentation/d/1vKcQpFv6nftUEhQWI6p7DXBHs8-FtQeSame9d5vydgY/edit#slide=id.ge4c37863e3_0_468'
     }
]


export default function Works() {
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
        <div className="hidden md:hidden lg:block flex flex-col pt-10">
            <div className="flex flex-1 w-full justify-center mb-10">
                <h1 className="text-xl text-white text-center text-2xl">Explore
                My Work</h1>
            </div>
            {
                works.map(item=> {
                    return (
                        <div key={item.id} className="flex flex-1 flex-row w-full text-white mb-20">
                            <div className={`myimage flex ${item.id % 2 != 0 ? '': 'hidden' }`}>
                                <Image
                                    className='w-full h-1/2'
                                    src={item.image}
                                    alt="Picture of the author"
                                    placeholder="blur" // placeholder="empty" 
                                />
                            </div>
                            <div className={`content flex flex-col px-20 w-3/4`}>
                                <div className='w-full flex-1 justify-start'>
                                    <center>
                                        <h1 className='text-3xl mb-10'>{item.name}</h1>
                                    </center>
                                <span>
                                    {item.paragraph}
                                </span>
                                </div>
                                <div className='w-full flex flex-1 justify-center'>
                                    <a href={item.url} target={'_blank'} rel="noreferrer"  className={'rounded-xl	 w-1/2 h-[50px] bg-white text-sm hover:bg-[#508CFF]  text-[#508CFF] hover:text-white ml-3  text-base text-center pt-5 pb-10 cursor-pointer'}>See more details</a>
                                </div>
                            </div>
                            <div className={`myimage flex ${item.id % 2 != 0 ? 'hidden': '' }`}>
                            <Image
                                className='w-full h-full'
                                src={item.image}
                                alt="Picture of the author"
                                placeholder="blur" // placeholder="empty" 
                            />
                            </div>
                        </div>
                    )
                })
            }
       </div>
       <div className='sm:block md:block lg:hidden p-5'>
       <div className="flex flex-1 w-full h-full mb-15 justify-center md:mt-10 md:mb-5">
                <h1 className="text-xl text-white text-center text-2xl">Explore
                My Work</h1>
            </div>
            <ul className='flex flex-row overflow-x-scroll	md:mb-96'>
                {
                    works.map(item=>{
                        return (
                            <li key={item.id} className='flex flex-1 w-full mb-1/2'>
                            <div className="w-[300px] h-[700px] m-1 mb-10 rounded overflow-hidden shadow-lg bg-[#2b28288c] opacity-60">
                            <Image
                                    className='w-full h-1/2'
                                    src={item.image}
                                    alt="Picture of the author"
                                    placeholder="blur" // placeholder="empty" 
                                />
                            <div className="px-6 py-4">
                            <div className="font-bold text-white text-xl mb-2 text-center">{item.name}</div>
                            <p className="text-white text-base">
                                {item.paragraph.slice(0, 150)}...
                            </p>
                            <center>
                            <br/>
                            <a href={item.url} target={'_blank'} rel="noreferrer"  className={'rounded-xl	mt-10 w-1/2 h-[50px] bg-white text-sm hover:bg-[#508CFF]  text-[#508CFF] hover:text-white ml-3  text-base p-5'}>See more details</a>
                            </center>
                            <br/>
                            </div>
                        </div>
                         </li>
                        )
                    })
                }
            </ul>
            <br/>
       </div>
       </motion.main>
       </>
    )
}