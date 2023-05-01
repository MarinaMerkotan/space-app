import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';
import rocket from '../../public/rocket.svg';
import walle from '../../public/walle.png';
import Animation from '@/components/Animation';

const Home = () => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const month = currentDate.getMonth() + 1;
  const date = `2023-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`;

  return (
    <>
      <Head>
        <title>Space</title>
      </Head>
      <section className={styles.section_main}>
        <div className={styles.left_block}>
          <h1>Welcome to space!</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, eum dolorum ea eligendi quia consectetur eos molestiae eius assumenda consequuntur in illum sed facere veritatis quas rerum dignissimos minima maiores.</p>
          <div className={styles.wrapper_link}>
            <Link href={`/calendar/${date}`} className={styles.link}>
              <Image 
                src={rocket}
                alt="rocket"
                width={40}
                height={40}
              />
              {"Today's picture"}
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={walle}
            alt="Robot Walle"
            width={496}
            height={525}
            priority
          />
        </div>
        <Animation />
      </section>
    </>
  )
}

export default Home;