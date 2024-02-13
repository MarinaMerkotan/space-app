import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';
import rocket from '../../public/rocket.svg';
import walle from '../../public/walle.png';
import Animation from '@/components/Animation';
import TelegramLoginButton from 'telegram-login-button';
declare global {
    interface Window {
        onTelegramAuth: (user: any) => void;
    }
}
const Home = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const dateNow = new Date();
    setDate(dateNow.toISOString().substring(0, 10));
  }, []);

  // useEffect(() => {
  //   function getParameterByName(name: string) {
  //     const url = window.location.href;
  //     console.log('URL', url)
  //     name = name.replace(/[\[\]]/g, '\\$&');
  //     const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  //       results = regex.exec(url);
  //     if (!results) return null;
  //     if (!results[2]) return '';
  //     return decodeURIComponent(results[2].replace(/\+/g, ' '));
  //   }

  //   const id = getParameterByName('id');
  //   const first_name = getParameterByName('first_name');
  //   const last_name = getParameterByName('last_name');
  //   const username = getParameterByName('username');
  //   const photo_url = getParameterByName('photo_url');
  //   const auth_date = getParameterByName('auth_date');
  //   const hash = getParameterByName('hash');

  //   console.log('ID:', id);
  //   console.log("first_name:", first_name);
  //   console.log('last_name:', last_name);
  //   console.log('username:', username);
  //   console.log('photo_url:', photo_url);
  //   console.log('auth_date:', auth_date);
  //   console.log('hash:', hash);
  // }, []);


    window.onTelegramAuth = user => {
        alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
        // Тут ви можете виконати будь-які подальші дії з отриманими даними користувача
    };

  return (
    <>
      <Head>
        <title>Space</title>
      </Head>
      <section className={styles.section_main}>
        <div className={styles.left_block}>
          <h1>Hi, Walle speaking!</h1>
          <p>
            {
              "I will show you how beautiful our universe is. Every day, Nasa posts what it thinks is the best image of the day. To view today's image, just click the button below, or go to the calendar page and choose your date."
            }
          </p>
          <h1>container</h1>
              <div>
      {/* Кнопка для виклику скрипта */}
        <div>
            {/* Код для вбудовування скрипту Telegram Login Widget */}
            <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="TestCustomButtonBot" data-size="large" data-userpic="false" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
            {/* Кнопка для виклику автентифікації через Telegram */}
            <button
                onClick={() => {
                    // Виклик функції, що починає автентифікацію через Telegram
                    window.loginWithTelegram();
                }}
            >
                Увійти за допомогою Telegram
            </button>
        </div>

    </div>
          <div className={styles.container}>
            <button className={styles.normalButton}>Button</button>

{/*             <TelegramLoginButton
              dataOnauth={(user) => console.log(user)}
              botName={'TestCustomButtonBot'}
              className={styles.telegramButton}
              dataAuthUrl='https://space-sigma-three.vercel.app/'
            /> */}
          </div>
          <div className={styles.wrapper_link}></div>
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
