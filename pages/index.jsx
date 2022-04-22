import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { data } from '../data';
import styles from '../styles/Home.module.css';

export default function Home({ services }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Website Design Home | JEDE</title>
				<meta
					name='description'
					content='This is a practice page made by Jonnathan Espinoza'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Intro />
			<Services services={services} />
			<Testimonials />
		</div>
	);
}

export const getStaticProps = async () => {
	const services = data;
	return {
		props: { services },
	};
};
