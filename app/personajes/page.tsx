"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function PersonajesPage() {
  const personajes = [
    {
      id: 1,
      nombre: "EL DIABLO",
      titulo: "EX-LUCHADOR LEGENDARIO",
      edad: "35 años",
      origen: "Ciudad de México",
      habilidad: "Combate Cuerpo a Cuerpo",
      historia:
        "Una leyenda del ring que dejó la lucha libre tras un combate que cambió su vida. Ahora busca redención en las calles, usando su fuerza y honor para proteger a los que no tienen voz. Su máscara representa tanto su pasado glorioso como las cicatrices que nunca sanarán.",
      stats: {
        fuerza: 95,
        resistencia: 90,
        conduccion: 70,
        punteria: 65,
      },
      imagen: "/lucha-libre-wrestler-mask-neon-lights.jpg",
      color: "primary",
    },
    {
      id: 2,
      nombre: "LA REINA",
      titulo: "JEFA DEL CARTEL MORALES",
      edad: "32 años",
      origen: "Guadalajara",
      habilidad: "Estrategia y Liderazgo",
      historia:
        "Nacida en la pobreza, construyó un imperio desde cero. Despiadada en los negocios pero leal con su gente. Su red de contactos se extiende desde políticos hasta artistas callejeros. Sabe que en este mundo, o dominas o te dominan, y ella siempre está arriba.",
      stats: {
        fuerza: 70,
        resistencia: 85,
        conduccion: 80,
        punteria: 88,
      },
      imagen: "/mexico-city-skyline-at-night-with-neon-lights.jpg",
      color: "destructive",
    },
    {
      id: 3,
      nombre: "EL GRINGO",
      titulo: "PILOTO TEMERARIO",
      edad: "28 años",
      origen: "Tijuana",
      habilidad: "Conducción Extrema",
      historia:
        "Criado entre dos mundos, encontró su identidad detrás del volante. Las carreras ilegales son su vida, el asfalto su hogar. Nadie conoce las calles como él, nadie conduce con tanta pasión. Para El Gringo, cada curva es una oportunidad, cada salto una liberación.",
      stats: {
        fuerza: 75,
        resistencia: 80,
        conduccion: 100,
        punteria: 72,
      },
      imagen: "/custom-lowrider-car-with-hydraulics-mexican-street.jpg",
      color: "accent",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black hover:text-primary transition-colors">
            CALLES DE <span className="text-primary">MÉXICO</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-bold hover:text-primary transition-colors">
              INICIO
            </Link>
            <Link href="/misiones" className="font-bold hover:text-primary transition-colors">
              MISIONES
            </Link>
            <Link href="/vehiculos" className="font-bold hover:text-primary transition-colors">
              VEHÍCULOS
            </Link>
            <Link href="/personajes" className="font-bold text-secondary">
              PERSONAJES
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/day-of-the-dead-sugar-skull-graffiti-wall.jpg"
            alt="Personajes Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-secondary animate-pulse" />
            <span className="text-sm tracking-[0.3em] text-secondary uppercase font-bold">3 Protagonistas</span>
            <div className="h-1 w-16 bg-secondary animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight animate-slide-up">
            <span className="block text-balance">LOS</span>
            <span className="block text-secondary text-balance animate-neon-pulse">JEFES</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tres historias entrelazadas, tres formas de sobrevivir. Cada uno con su código, cada uno con su destino.
          </p>
        </div>
      </div>

      {/* Personajes */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          {personajes.map((personaje, i) => (
            <Card
              key={personaje.id}
              className={`group relative overflow-hidden bg-card border-border hover:border-${personaje.color} transition-all duration-500 animate-slide-up`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Imagen */}
                <div className="relative h-[400px] md:h-auto overflow-hidden">
                  <img
                    src={personaje.imagen || "/placeholder.svg"}
                    alt={personaje.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card" />
                  <div
                    className={`absolute inset-0 bg-${personaje.color}/0 group-hover:bg-${personaje.color}/10 transition-all duration-500`}
                  />
                </div>

                {/* Contenido */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-12 h-1 bg-${personaje.color} group-hover:w-20 transition-all duration-300`} />
                    <span className={`text-xs tracking-widest text-${personaje.color} font-bold`}>
                      {`PROTAGONISTA 0${personaje.id}`}
                    </span>
                  </div>

                  <h2
                    className={`text-5xl md:text-6xl font-black mb-2 group-hover:text-${personaje.color} transition-colors duration-300`}
                  >
                    {personaje.nombre}
                  </h2>
                  <p className={`text-lg text-${personaje.color} font-bold mb-6 tracking-wider`}>{personaje.titulo}</p>

                  {/* Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-muted-foreground font-bold mb-1">EDAD</div>
                      <div className="text-sm font-bold">{personaje.edad}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-bold mb-1">ORIGEN</div>
                      <div className="text-sm font-bold">{personaje.origen}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-xs text-muted-foreground font-bold mb-1">HABILIDAD ESPECIAL</div>
                      <div className={`text-sm font-bold text-${personaje.color}`}>{personaje.habilidad}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{personaje.historia}</p>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    {Object.entries(personaje.stats).map(([stat, value]) => (
                      <div key={stat}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground font-bold uppercase">{stat}</span>
                          <span className={`text-${personaje.color} font-bold`}>{value}%</span>
                        </div>
                        <div className="h-1.5 bg-border rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-${personaje.color} transition-all duration-1000 group-hover:animate-pulse`}
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className={`bg-${personaje.color} hover:bg-${personaje.color}/90 text-${personaje.color}-foreground font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(101,240,150,0.4)]`}
                  >
                    JUGAR CON {personaje.nombre}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Calles de México. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
