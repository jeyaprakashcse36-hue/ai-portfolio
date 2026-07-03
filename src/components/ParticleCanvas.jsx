import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, animId
    const particles = []
    const mouse = { x: -999, y: -999 }
    const PALETTE = ['#6c63ff', '#a78bfa', '#2dd4bf', '#f472b6', '#fbbf24']

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY })

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.r = Math.random() * 1.5 + 0.3
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.alpha = Math.random() * 0.5 + 0.1
        this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)]
      }
      update() {
        const dx = this.x - mouse.x, dy = this.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) { this.vx += (dx / dist) * 0.08; this.vy += (dy / dist) * 0.08 }
        this.vx *= 0.98; this.vy *= 0.98
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < 160; i++) particles.push(new Particle())

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 80) {
            ctx.globalAlpha = (1 - d / 80) * 0.12
            ctx.strokeStyle = '#6c63ff'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p) => { p.update(); p.draw() })
      drawConnections()
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
