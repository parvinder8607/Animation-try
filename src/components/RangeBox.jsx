import React, { useRef } from 'react'
import { motion } from 'motion/react'

const RangeBox = ({t, setT}) => {
    const rangeRef = useRef(null);

    const handleTime = (e) => {
        setT(e.target.value)
    }
  return (
    <div className="w-1/2">

        <input type="range" onChange={handleTime} value={t} min={-4000} max={4000}   className='w-full'  />
    </div>
  )
}

export default RangeBox
