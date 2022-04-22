import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '../../data';
import styles from '../../styles/Product.module.css';

const Products = ({ product }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Website Design Product {product.title} | JEDE</title>
				<meta
					name='description'
					content='This is a practice page made by Jonnathan Espinoza'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.cardL}>
				{product.images.map(img => (
					<div key={img.id} className={styles.imgContainer}>
						<Image src={img.url} objectFit='cover' layout='fill' alt='' />
					</div>
				))}
			</div>
			<div className={styles.cardS}>
				<h1 className={styles.title}>{product.title}</h1>
				<p className={styles.desc}>{product.longDesc}</p>
				<button className={styles.button}>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</button>
			</div>
		</div>
	);
};

export const getStaticPaths = async () => {
	const products = data;
	const paths = products.map(item => {
		return {
			params: { name: item.name },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ctx => {
	const name = ctx.params.name;
	const product = data.filter(item => item.name === name)[0];
	return {
		props: { product },
	};
};

export default Products;
