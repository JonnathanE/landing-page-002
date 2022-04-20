import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cardL}>
				<h1 className={styles.title}>JEDE CREATIVES.</h1>
				<h1 className={styles.linkTitle}>
					<Link href='/contact'>
						<a>
							<span className={styles.linkText}>Work with us</span>
							<Image src={`/img/link.png`} width='40px' height='40px' alt='' />
						</a>
					</Link>
				</h1>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					12 ADAM STREET NY <br /> USA
				</div>
				<div className={styles.cardItem}>
					CONTACT@LAMA.DEV <br /> 123 4567 8909
				</div>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					FOLLOW US: <br /> __FB__IN__BE__TW
				</div>
				<div className={styles.cardItem}>
					© LAMA INTERACTIVE <br /> ALL RIGHTS RESERVED
				</div>
			</div>
		</div>
	);
};

export default Footer;
