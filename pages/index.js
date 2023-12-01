'use client'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from '../components/searchBar'
import SearchLogo from '../public/search-logo.png'
import styles from '../styles/home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-header-left'>
          <Link href='/about'>About</Link>
          <Link href='/store'>Store</Link>
        </div>

        <div className='home-header-right'>
          <Link href='/gmail'>Gmail</Link>
          <Link href='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className='home-body'>
        <Image
          src={SearchLogo}
          alt='Google'
          //className={styles.homeBody}
          width={272}
          height={200}
          priority
        />
        <div className='home-input-container'>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}
