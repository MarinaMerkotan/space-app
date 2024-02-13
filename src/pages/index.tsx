import React, { useState, useEffect, useRef } from 'react';
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
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    console.log('handleClick');
    if (wrapperRef && wrapperRef.current) {
      console.log('handleClick if');
      wrapperRef.current.style.border = '2px solid red';
    }
  };
  return (
    <>
      <Head>
        <title>Space</title>
      </Head>
      <section className={styles.section_main}>
        <div className={styles.left_block}>
          <>
            <TelegramLoginButton
              dataOnauth={(user) => {
                console.log(user);
              }}
              botName={'TestCustomButtonBot'}
              wrapperProps={{
                ref: wrapperRef,
                onClick: handleClick,
              }}
            />
          </>
          <h1>Hi, Walle speaking!</h1>
          <p>
            {
              "I will show you how beautiful our universe is. Every day, Nasa posts what it thinks is the best image of the day. To view today's image, just click the button below, or go to the calendar page and choose your date."
            }
          </p>
          <button
            onClick={() => {
              console.log('first');
              if (wrapperRef && wrapperRef.current) {
              console.log('first if');
                wrapperRef?.current?.click();
              }
            }}
          >
            tets click
          </button>
          <h1>STYLE</h1>
          <TelegramLoginButton
                dataOnauth={(user) => console.log(user)}
                botName={'TestCustomButtonBot'}
                className={styles.telegram}
              />
          {/* <TelegramButtonOverlay handleTelegramResponse={(user: any) => console.log(user)} /> */}
          <div className={styles.wrapper_link}>
            <div className={styles.container}>
              {/* Звичайна зовнішня кнопка */}
              <button className={styles.normalButton}>Your Button</button>

              {/* TelegramLoginButton з прозорими стилями */}
              <TelegramLoginButton
                dataOnauth={(user) => console.log(user)}
                botName={'TestCustomButtonBot'}
                className={styles.telegramButton}
              />
            </div>
            {/* <TelegramLoginButton
              botName='TestCustomButtonBot'
              dataOnauth={(user) => console.log(user)}
              className={styles.link}
            >
                <Image src={rocket} alt='rocket' width={40} height={40} />
                {"Today's picture"}
            </TelegramLoginButton> */}
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
