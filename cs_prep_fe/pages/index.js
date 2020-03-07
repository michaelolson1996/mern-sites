import React from 'react';
import Head from 'next/head';
import SectionOne from '../components/home/sections/SectionOne';
import SectionTwo from '../components/home/sections/SectionTwo';
import SectionThree from '../components/home/sections/SectionThree';
import SectionFour from '../components/home/sections/SectionFour';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <style jsx>
      {`

      `}
    </style>

  </div>
)

export default Home
