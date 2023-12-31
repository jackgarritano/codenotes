import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

import TextEditor from '@/components/TextEditor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class={styles.textEditorHolder}>
      <TextEditor></TextEditor>
    </div>
  )
}
