import Head from 'next/head';
import { GetStaticProps } from 'next';
import { IPhoto } from '@/types/IPhoto';
import Image from 'next/image';
import styles from '@/styles/Photo.module.scss';

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}&start_date=2023-04-01`
  );
  const data = await response.json();

  const paths = data.map(({ date }: IPhoto) => ({
    params: { date: date },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { date }: any = context.params;
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}&date=${date}`
  );
  const data = await response.json();

  if (!data || data.code === 400) {
    return {
      notFound: true,
    };
  }

  return {
    props: { photo: data },
  };
};

interface IPhotoPatams {
  photo: IPhoto;
}

const Photo = ({ photo }: IPhotoPatams) => {
  return (
    <>
      <Head>
        <title>Picture</title>
      </Head>
      <section className={styles.section_photo}>
        <h1>{photo.title}</h1>
        <p className={styles.date}>{photo.date}</p>
        <div className={styles.wrapper_image}>
          {photo.media_type === 'image' ? (
            <Image src={photo.url} quality={100} alt={photo.title} width={960} height={639} />
          ) : (
            <iframe
              className={styles.video}
              width='560'
              height='300'
              src={photo.url}
              allow='autoplay; encrypted-media'
              allowFullScreen
            ></iframe>
          )}
        </div>
        <p className={styles.explanation}>{photo.explanation}</p>
      </section>
    </>
  );
};

export default Photo;
