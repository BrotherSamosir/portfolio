import { motion }from 'framer-motion'

import { bucket as CosmicBucker } from '../config/cosmic-config'
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes'


const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

export async function getStaticProps() {
    // Fetch data from external API
    let portfolio =  await CosmicBucker.getObjects({
        query: {
          type: 'portfolios'
        },
        props: 'slug,title,content,thumbnail,metadata'
      }).catch(e => { objects: work})
    
    if (!(portfolio.objects && portfolio.objects.length) ) portfolio = { objects: works, cache: true }

    portfolio = portfolio.objects

    // maping data
    if (!portfolio.cache) {
        portfolio =  portfolio.map((p, index)=> {
            return {
                id: index + 1,
                name: p.title,
                image: p.thumbnail,
                paragraph: p.content,
                url: p.metadata.linkportfolio
             }
        })
    }

    // Pass data to the page via props
    return { props: { portfolio } }
  }
  
  

export default function Works({ portfolio = []})  {
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
                portfolio.map(item=> {
                    return (
                        <div key={item.id} className="flex flex-1 flex-row w-full text-white mb-20">
                            <div className={`myimage flex ${item.id % 2 != 0 ? '': 'hidden' }`}>
                                <img
                                    className='w-full h-full'
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
                                <div dangerouslySetInnerHTML={{ __html: item.paragraph }}/>
                                </span>
                                </div>
                                <div className='w-full flex flex-1 justify-center'>
                                    <a href={item.url} target={'_blank'} rel="noreferrer"  className={'rounded-xl	 w-1/2 h-[50px] bg-white text-sm hover:bg-[#508CFF]  text-[#508CFF] hover:text-white ml-3  text-base text-center pt-5 pb-10 cursor-pointer'}>See more details</a>
                                </div>
                            </div>
                            <div className={`myimage flex ${item.id % 2 != 0 ? 'hidden': '' }`}>
                            <img
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
                    portfolio.map(item=>{
                        return (
                            <li key={item.id} className='flex flex-1 w-full mb-1/2'>
                            <div className="w-[300px] h-[700px] m-1 mb-10 rounded overflow-hidden shadow-lg bg-[#2b28288c] opacity-60">
                            <img
                                className='w-full h-1/2'
                                src={item.image}
                                alt="Picture of the author"
                                placeholder="blur" // placeholder="empty" 
                                />
                            <div className="px-6 py-4">
                            <div className="font-bold text-white text-xl mb-2 text-center">{item.name}</div>
                            <div className="text-white text-base">
                                <div dangerouslySetInnerHTML={{ __html: `${item.paragraph.substring(0, 200)} ...` }} className='m-h-4'/>
                            </div>
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