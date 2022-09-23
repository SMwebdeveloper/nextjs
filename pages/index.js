import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Big burgers | Asosiy</title>
        <meta name="title" content="Big burgers" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Asosiy</h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            alt="fat burger"
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          expedita vitae nesciunt? Sapiente, autem aliquid?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam soluta
          ratione repellat quasi?
        </p>
        <Link href="/burgers">
          <a className={styles.btn}>All Burgers</a>
        </Link>
      </div>
    </>
  );
}
