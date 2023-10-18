/**import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 
const Home: NextPage = () => {
  return (
    
  );
};

export default Home;
**/
// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired page when the component mounts
    router.push('/buy');
  }, []);

  return <div>This is the root page. You will be redirected shortly.</div>;
}

export default Home;