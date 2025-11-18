import { useEffect, useRef } from 'react'

// Simple canvas-based neon bubble rain effect
export default function NeonBurst({ run, onDone, duration = 800, color = '#3DEC55' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef()
  const startRef = useRef(0)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const createParticles = () => {
      const rect = canvas.getBoundingClientRect()
      const count = 24
      particlesRef.current = new Array(count).fill(0).map(() => ({
        x: rect.width / 2 + (Math.random() - 0.5) * 40,
        y: rect.height / 2,
        r: 3 + Math.random() * 5,
        vx: (Math.random() - 0.5) * 2,
        vy: -2 - Math.random() * 2,
        alpha: 1,
      }))
    }

    const draw = (t) => {
      if (!startRef.current) startRef.current = t
      const elapsed = t - startRef.current
      const progress = Math.min(1, elapsed / duration)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'

      particlesRef.current.forEach(p => {
        p.vy += 0.05
        p.x += p.vx * 2
        p.y += p.vy * 2
        p.alpha *= 0.97
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2)
        grad.addColorStop(0, `${color}`)
        grad.addColorStop(1, `${color}00`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(draw)
      } else {
        onDone && onDone()
      }
    }

    const handleResize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    handleResize()
    createParticles()
    rafRef.current = requestAnimationFrame(draw)

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [run, duration, color, onDone])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
