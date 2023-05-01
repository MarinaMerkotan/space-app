import Head from "next/head";
import { GetStaticProps } from "next";
import { IPhoto } from "@/types/IPhoto";
import Image from "next/image";
import styles from '@/styles/Photo.module.scss'

export const getStaticPaths = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&start_date=2023-04-01`);
    const data = await response.json();

    const paths = data.map(({date} : IPhoto) => ({
        params: {date: date}
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {date}: any = context.params;
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {photo: data}
    }
}

interface IPhotoPatams {
    photo: IPhoto
}

const Photo = ({photo}: IPhotoPatams) => {
    return (
        <>
            <Head>
                <title>Picture</title>
            </Head>
            <section className={styles.section_photo}>
                <h1>{photo.title}</h1>
                <p className={styles.date}>{photo.date}</p>
                <div className={styles.wrapper_image}>
                    <Image
                        src={photo.url}
                        quality={100}
                        alt={photo.title}
                        width={960}
                        height={639}
                    />
                </div>
                <p className={styles.explanation}>{photo.explanation}</p>
            </section>
        </>
    )
}
  
export default Photo;