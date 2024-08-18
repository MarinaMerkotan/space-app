import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import PhotoOfTheDay from '../../components/PhotoOfTheDay';
import { IPhoto } from '../../types/IPhoto';
import styles from '@/styles/Calendar.module.scss';
import Loader from '@/components/Loader';

let cacheData: null | Array<IPhoto> = null;

const Calendar = () => {
  const [photos, setPhotos] = useState<IPhoto[] | null>(cacheData);
  const [loading, setLoading] = useState(!cacheData);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      if (cacheData) {
        setPhotos(cacheData);
        setLoading(false);
        return;
      }

      try {
        const now = new Date();
        const startDate = new Date(now.getFullYear(), now.getMonth(), 2).toISOString().split('T')[0];

        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}&start_date=${startDate}`
        );
        const data = await response.json();

        cacheData = data.reverse();
        setPhotos(cacheData);
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (notFound) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <section className={styles.wrapper_section}>
        <h2>Astronomy Picture of the Day</h2>
        <p className={styles.description}>
          Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along
          with a brief explanation written by a professional astronomer.
        </p>
        <div className={styles.date_list}>
          {photos && photos.map(({ date }) => <PhotoOfTheDay date={date} key={date} />)}
        </div>
      </section>
    </>
  );
};

export default Calendar;
