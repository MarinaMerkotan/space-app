import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';
import rocket from '../../public/rocket.svg';
import walle from '../../public/walle.png';
import Animation from '@/components/Animation';
import TelegramLoginButton from 'telegram-login-button';

const Home = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const dateNow = new Date();
    setDate(dateNow.toISOString().substring(0, 10));
  }, []);

  return (
    <>
      <Head>
        <title>Space</title>
      </Head>
      <section className={styles.section_main}>
        <div className={styles.left_block}>
          <TelegramLoginButton botName='TestCustomButtonBot' dataOnauth={(user) => console.log(user)} />
          <h1>Hi, Walle speaking!</h1>
          <p>
            {
              "I will show you how beautiful our universe is. Every day, Nasa posts what it thinks is the best image of the day. To view today's image, just click the button below, or go to the calendar page and choose your date."
            }
          </p>
          <div className={styles.wrapper_link}>
            <Link href={`/calendar/${date}`} className={styles.link} prefetch={false}>
              <Image src={rocket} alt='rocket' width={40} height={40} />
              {"Today's picture"}
            </Link>
          </div>
        </div>
        <div className={styles.right_block}>
          <Image src={walle} alt='Robot Walle' width={640} height={604} priority />
        </div>
        <Animation />
      </section>
    </>
  );
};

export default Home;
