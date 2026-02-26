'use client'
// 1. Import ReactNode
import { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'

// 2. Define the type for your props
interface Props {
  children: ReactNode
}

// 3. Apply the type to the component
export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  )
}
