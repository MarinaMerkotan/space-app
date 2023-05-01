import { IPhoto } from "@/types/IPhoto";
import Link from "next/link";

import styles from '@/styles/Calendar.module.scss'

interface IPhotoOfTheDayParams {
  date: string
}

const PhotoOfTheDay = ({date}: IPhotoOfTheDayParams) => {
  return (
    <Link href={`/calendar/${date}`} className={styles.apod_info}>
        <p>{date}</p>
    </Link>
  )
}

export default PhotoOfTheDay;