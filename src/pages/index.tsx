import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homepage from './components/homepage'
import SideNav from './components/sidenav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="main">
      <SideNav />
      <Homepage />
    </div>
  )
}
