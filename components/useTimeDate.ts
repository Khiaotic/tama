'use client' 
 
 
 ///useSTATE DATE TIME/////
 import React, {useEffect, useState} from 'react'
import { updateDateTimeScroller } from './DateTimeScroller'

export function useDateTime(){
    
    const [formattedDate, setFormattedDate] = useState<string>('')
    useEffect(() => {
      const updateDateTime = () => {
        const currentDate = new Date()
        const updatedFormattedDate = updateDateTimeScroller(currentDate)
      setFormattedDate(updatedFormattedDate)
      }
      updateDateTime()
    
      const timeId = setInterval(updateDateTime)
    
      return () => {
        clearInterval(timeId)
      }
    }, [])
    ///useState DATE TIME/////////////

    return formattedDate
}