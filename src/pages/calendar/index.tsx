import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { IPhoto } from '../../types/IPhoto';
import PhotoOfTheDay from '../../components/PhotoOfTheDay';

import styles from '@/styles/Calendar.module.scss'

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&start_date=2023-04-01`);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {photos: data.reverse()}
    }
}

interface ICalendarParams {
  photos: [IPhoto];
}

const Calendar = ({photos} : ICalendarParams) => {
  return (
    <>
      <Head>
        <title>List of days</title>
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
}

export default Calendar;