import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Link href='/'>
				<a>JEDE</a>
			</Link>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href='/products/design'>
						<a>DESIGN</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/products/development'>
						<a>DEVELOPMENT</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/products/production'>
						<a>PRODUCTION</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/products/photography'>
						<a>PHOTOGRAPHY</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/contact'>
						<a>CONTACT</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
