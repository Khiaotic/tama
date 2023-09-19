'use client'
import { useDateTime } from '../../components/useTimeDate';
import React, {useEffect, useState} from 'react';
import '../../styles/mobile-styles.css'
import { updateDateTimeScroller } from '../../components/DateTimeScroller';
import Navigation from '../../components/Navigation'





 export default function Home() {
  const formattedDate = useDateTime()

  return (
    <div>
      <h1 className='flex justify-center'>TAMA LOGO</h1>
      <Navigation/>

      <p>i have no idea what would go on a homepage 
        for this kind of app...
      </p>
      <p>
        a welcome message
      </p>
      <p>a million dollars but...</p>
      <p>
        mood tracker? collect data
      </p>
      <p>
      Astrological Insights?
      </p>
      <p>
        a rotaion/math.random pick of quotes or inspo
      </p>
      <p>
        dashboard with user activity, data within app
      </p>
      <p>
        notifications?
      </p>
      <p>a profile page?</p>
      <p>cotact/ask for updated content or new content or w.e</p>
<div className='date-scroll-container text-2xl '>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>
      <div className='bebasFont' id='currentDateTimeScroller'>
{formattedDate}
      </div>

</div>
    </div>
  )
}



