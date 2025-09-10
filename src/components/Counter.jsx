import { useMotionValue, motion, animate, useTransform } from "motion/react"
import { useEffect } from "react"

function Counter({t}) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))
  useEffect(() => {
    const controls = animate(count, t, { duration: 5 })
    return () => controls.stop()
  }, [t])

  return <motion.pre className="text-2xl font-bold font-sans text-green-400">{rounded}</motion.pre>
}

export default Counter