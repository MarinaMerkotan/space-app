import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.scss';
import logo from '../../public/logo.png'

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Calendar', path: '/calendar' },
];

const Header = () => {
    const {pathname} = useRouter();

    return (
        <header>
            <div className='container'>
                <div>
                    <Image src={logo} width={40} height={40} alt='next.js'/>
                </div>
                <nav className={styles.navbar}>
                    {navigation.map(({id, title, path}) => (
                        <Link href={path} key={id} className={pathname === path ? styles.active : ''}>
                            {title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
  
export default Header;