"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 transition-transform duration-200"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="/lowrider-car-in-mexican-street-at-sunset.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div
          className={`relative z-10 text-center px-4 max-w-5xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-primary animate-pulse" />
            <span className="text-sm tracking-[0.3em] text-primary uppercase font-bold">Disponible Ahora</span>
            <div className="h-1 w-16 bg-primary animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
            <span className="block text-balance">CALLES DE</span>
            <span className="block text-primary text-balance animate-neon-pulse">MÉXICO</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            {
              "Vive la experiencia más intensa en las calles de México. Acción sin límites, cultura vibrante y libertad total."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(101,240,150,0.5)]"
            >
              JUGAR AHORA
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 font-bold bg-transparent transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            >
              VER TRÁILER
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-card/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "MISIONES", value: "150+", icon: "🎯" },
              { label: "VEHÍCULOS", value: "80+", icon: "🚗" },
              { label: "JUGADORES", value: "5M+", icon: "👥" },
              { label: "MAPAS", value: "12", icon: "🗺️" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:animate-neon-pulse">
                  {stat.value}
                </div>
                <div className="text-sm tracking-widest text-muted-foreground font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Card className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(101,240,150,0.3)]">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/lucha-libre-wrestler-mask-neon-lights.jpg"
                alt="Lucha Libre"
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-1 bg-primary group-hover:w-16 transition-all duration-300" />
                <span className="text-xs tracking-widest text-primary font-bold">01</span>
              </div>
              <h3 className="text-3xl font-black mb-3 text-balance group-hover:text-primary transition-colors duration-300">
                CULTURA LUCHADORA
              </h3>
              <p className="text-muted-foreground text-pretty">
                {"Entra al ring y demuestra tu valor. Máscaras legendarias, movimientos épicos y honor callejero."}
              </p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,204,0,0.3)]">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/custom-lowrider-car-with-hydraulics-mexican-street.jpg"
                alt="Lowriders"
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-1 bg-accent group-hover:w-16 transition-all duration-300" />
                <span className="text-xs tracking-widest text-accent font-bold">02</span>
              </div>
              <h3 className="text-3xl font-black mb-3 text-balance group-hover:text-accent transition-colors duration-300">
                LOWRIDERS SUPREMOS
              </h3>
              <p className="text-muted-foreground text-pretty">
                {"Personaliza tu ranfla. Hidráulicos, cromados y pintura que deslumbra en cada esquina."}
              </p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border hover:border-secondary transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(253,186,116,0.3)]">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/mexican-street-tacos-neon-sign-night.jpg"
                alt="Street Food"
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-all duration-500" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-1 bg-secondary group-hover:w-16 transition-all duration-300" />
                <span className="text-xs tracking-widest text-secondary font-bold">03</span>
              </div>
              <h3 className="text-3xl font-black mb-3 text-balance group-hover:text-secondary transition-colors duration-300">
                SABOR DE CALLE
              </h3>
              <p className="text-muted-foreground text-pretty">
                {"Recorre puestos de tacos, mezcal y cultura. Cada esquina tiene su historia y su sabor."}
              </p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border hover:border-destructive transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(228,106,118,0.3)]">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/day-of-the-dead-sugar-skull-graffiti-wall.jpg"
                alt="Día de Muertos"
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="absolute inset-0 bg-destructive/0 group-hover:bg-destructive/10 transition-all duration-500" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-1 bg-destructive group-hover:w-16 transition-all duration-300" />
                <span className="text-xs tracking-widest text-destructive font-bold">04</span>
              </div>
              <h3 className="text-3xl font-black mb-3 text-balance group-hover:text-destructive transition-colors duration-300">
                TRADICIÓN Y RESPETO
              </h3>
              <p className="text-muted-foreground text-pretty">
                {"Día de Muertos, calaveras y arte urbano. Una ciudad que nunca olvida sus raíces."}
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-sm tracking-[0.3em] text-primary uppercase font-bold">Protagonistas</span>
              <div className="h-1 w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-balance">CONOCE A LOS JEFES</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {"Tres historias, un destino. Controla a los personajes más peligrosos de México."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "EL DIABLO", role: "EX-LUCHADOR", desc: "Venganza en el ring y en las calles" },
              { name: "LA REINA", role: "JEFA DEL CARTEL", desc: "Poder absoluto, lealtad inquebrantable" },
              { name: "EL GRINGO", role: "PILOTO TEMERARIO", desc: "Velocidad extrema, riesgos máximos" },
            ].map((char, i) => (
              <div
                key={i}
                className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(101,240,150,0.2)]"
              >
                <div className="text-6xl font-black mb-2 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  {`0${i + 1}`}
                </div>
                <h3 className="text-3xl font-black mb-2 group-hover:text-primary transition-colors duration-300">
                  {char.name}
                </h3>
                <div className="text-xs tracking-widest text-primary font-bold mb-3">{char.role}</div>
                <p className="text-muted-foreground">{char.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-bold">VER MÁS</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="/mexico-city-skyline-at-night-with-neon-lights.jpg"
              alt="CTA Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          </div>

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-balance hover:animate-neon-pulse transition-all duration-300">
              {"¿LISTO PARA CONQUISTAR LAS CALLES?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {"Únete a millones de jugadores en el mundo más vibrante y peligroso jamás creado."}
            </p>
            <Button
              size="lg"
              className="text-xl px-12 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(101,240,150,0.6)] animate-float"
            >
              COMPRAR AHORA
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{"© 2025 Calles de México. Todos los derechos reservados."}</p>
        </div>
      </footer>
    </div>
  )
}
