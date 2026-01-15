import React from 'react'
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
 // TimelineContent, <TimelineContent />
 // HealthProtocols, <HealthProtocols />
  PictureGallery,
  ClosingPage,
  Footer,
} from '../../composites'

const WeddingInvitation = () => {
  return (
    <div>
      <WelcomePage />
      <BrideGroom />
      <EventDetails />
      <CountdownTimer />
      <PictureGallery />
      <ClosingPage />
      <Footer />
    </div>
  )
}

export default WeddingInvitation
