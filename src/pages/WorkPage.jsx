import React from 'react'
import WorkSection from '../section/WorkSection'
import DivsSection from '../section/DivsSection'
import WorkDivSection from '../section/WorkDivSection'
import Work3Section from '../section/Work3Section'
import CardSlider from '../components/CardSlider'

const WorkPage = () => {
  return (
    <>
    <WorkSection/>
    <WorkDivSection/>
    <Work3Section/>
    <div className='h-[100vh] pt-10'>
      <h3 className='ml-5'>We grind ‘til the walls shake</h3>
      <CardSlider/>
    </div>
    </>
  )
}

export default WorkPage