import React from 'react'
import { Button, EventDetailCard, GoogleMapLocation } from '../../components'
import styles from './styles.module.css'

const EventDetails = () => {
  const venueUrl =
    'https://maps.app.goo.gl/KPe4sadtWjSwmhtR6'
  const eventDetails = [
    {
      name: 'Sowmya',
      date: 'Saturday, 22nd FEB 2026',
      time: '08:00 - 09:00',
      venue: 'Kirikodli Mata',
      address:
        'Kirikodli village, near Kodlipet in the Somwarpet Taluk of Coorg (Kodagu) District',
    },
    {
      name: 'Deelaksha',
      date: 'Saturday, 22nd FEB 2026',
      time: '11:00 - 13:00',
      venue: 'Kirikodli Mata',
      address:
        'Kirikodli village, near Kodlipet in the Somwarpet Taluk of Coorg (Kodagu) District',
    },
  ]

  return (
    <div>
      <div className={styles.container}>
        <div>
          <p className={styles.youThere}>
            WE WANT YOU THERE!</p>
          <p className={styles.joinUs}>
            Join our happy moment</p>
          <div className={styles.eventContainer}>
            {eventDetails.map((item, idx) => {
              return (
                <EventDetailCard
                  eventName={item.name}
                  eventDate={item.date}
                  eventTime={item.time}
                  eventVenue={item.venue}
                  venueAddress={item.address}
                  key={idx}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div>
          <GoogleMapLocation />
        </div>
        <Button text="Location" onClick={() => window.open(venueUrl)} />
      </div>
    </div>
  )
}

export default EventDetails
