import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt='sanBlog' width={50} height={50} />
          <h1 className={styles.logoText}>sanBlog</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque, ratione vitae, nulla excepturi itaque qui animi repellendus id eum minus ullam provident maxime tempora consectetur, enim recusandae corporis cum.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt='' width={18} height={18}></Image>
          <Image src="/instagram.png" alt='' width={18} height={18}></Image>
          <Image src="/twitter.png" alt='' width={18} height={18}></Image>
          <Image src="/youtube.png" alt='' width={18} height={18}></Image>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}
