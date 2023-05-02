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
          <h1>Hi, Walle speaking!</h1>
          <p>{"I will show you how beautiful our universe is. Every day, Nasa posts what it thinks is the best image of the day. To view today's image, just click the button below, or go to the calendar page and choose your date."}</p>
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
        <div className={styles.right_block}>
          <Image
            src={walle}
            alt="Robot Walle"
            width={640}
            height={604}
            priority
          />
        </div>
        <Animation />
      </section>
    </>
  )
}

export default Home;
