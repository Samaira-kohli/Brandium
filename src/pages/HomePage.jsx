import React from 'react'
import HomeSection from "../section/HomeSection"
import DivsSection from "../section/DivsSection";
import VidSection from "../section/VidSection";
import HelpSection from "../section/HelpSection";
import GuitarString from "../components/GuitarString";
import ImpactSection from "../section/ImpactSection";
import CardSlider from "../components/CardSlider";
import Stories from "../section/Stories";

const HomePage = () => {
  return (
    <>
      <HomeSection/>
      <DivsSection/>
      <VidSection/>
      <GuitarString/>
      <HelpSection/>
      <GuitarString/>
      <ImpactSection/>
      <CardSlider/>
      <GuitarString/>
      <Stories/></>
  )
}

export default HomePage