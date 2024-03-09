import React from 'react'
import Navbar from '../components/Navbar'
import toast, { Toaster } from 'react-hot-toast';
import Hero from '../components/Hero';
import MovieSection from '../components/MovieSection';


export const Home = () => {


  return (
    <>
    <Toaster />
    <Navbar />
    <Hero />
    <MovieSection movieSectionName={"popular"} />
    <MovieSection movieSectionName={"trending"} />
    <MovieSection movieSectionName={"upcoming"} />
    <MovieSection movieSectionName={"comedy"} />
    <MovieSection movieSectionName={"topRated"} />
    </>
  )
}


