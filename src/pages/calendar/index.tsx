import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import PhotoOfTheDay from '../../components/PhotoOfTheDay';

import { IPhoto } from '../../types/IPhoto';
import styles from '@/styles/Calendar.module.scss'

let cacheData: null | Array<IPhoto> = null;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    if (cacheData) {
      return {
        props: {photos: cacheData},
      };
    }

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&start_date=2023-04-01`);
    const data = await response.json();

    cacheData = data.reverse();

    return {
      props: {photos: data.reverse()},
    };
  } catch {
    return {
      notFound: true
    }
  }
}

interface ICalendarParams {
  photos: [IPhoto];
}

const Calendar = ({photos} : ICalendarParams) => (
  <>
    <Head>
      <title>Calendar</title>
    </Head>
    <section className={styles.wrapper_section}>
      <h2>Astronomy Picture of the Day</h2>
      <p className={styles.description}>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer..</p>
      <div className={styles.date_list}>
        {photos && photos.map(({date}) => (
            <PhotoOfTheDay date={date} key={date}/>
        ))}
      </div>
    </section>
  </>
)

export default Calendar;