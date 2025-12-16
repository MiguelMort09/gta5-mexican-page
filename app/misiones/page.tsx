"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function MisionesPage() {
  const [selectedCategory, setSelectedCategory] = useState("todas")

  const misiones = [
    {
      id: 1,
      titulo: "EL ÚLTIMO LUCHADOR",
      categoria: "historia",
      dificultad: "Difícil",
      recompensa: "$50,000",
      desc: "El Diablo debe enfrentarse a su pasado en el ring más peligroso de México City.",
      imagen: "/lucha-libre-wrestler-mask-neon-lights.jpg",
      color: "primary",
    },
    {
      id: 2,
      titulo: "CARRERA MORTAL",
      categoria: "carreras",
      dificultad: "Extremo",
      recompensa: "Lowrider Único",
      desc: "Compite en la carrera más peligrosa de Tijuana. Solo los mejores sobreviven.",
      imagen: "/custom-lowrider-car-with-hydraulics-mexican-street.jpg",
      color: "accent",
    },
    {
      id: 3,
      titulo: "SABOR A VENGANZA",
      categoria: "secundaria",
      dificultad: "Media",
      recompensa: "$25,000",
      desc: "Ayuda al taquero local a recuperar su puesto de los extorsionadores.",
      imagen: "/mexican-street-tacos-neon-sign-night.jpg",
      color: "secondary",
    },
    {
      id: 4,
      titulo: "NOCHE DE MUERTOS",
      categoria: "historia",
      dificultad: "Difícil",
      recompensa: "$75,000",
      desc: "La Reina debe proteger el territorio durante la celebración más importante.",
      imagen: "/day-of-the-dead-sugar-skull-graffiti-wall.jpg",
      color: "destructive",
    },
    {
      id: 5,
      titulo: "OPERACIÓN FRONTERA",
      categoria: "accion",
      dificultad: "Extremo",
      recompensa: "$100,000",
      desc: "Infiltra el convoy y recupera el cargamento perdido en la frontera.",
      imagen: "/mexico-city-skyline-at-night-with-neon-lights.jpg",
      color: "primary",
    },
    {
      id: 6,
      titulo: "REY DEL VOLANTE",
      categoria: "carreras",
      dificultad: "Media",
      recompensa: "Mejora de Motor",
      desc: "Demuestra tus habilidades en las curvas más cerradas de la ciudad.",
      imagen: "/lowrider-car-in-mexican-street-at-sunset.jpg",
      color: "accent",
    },
  ]

  const categorias = [
    { id: "todas", nombre: "TODAS" },
    { id: "historia", nombre: "HISTORIA" },
    { id: "carreras", nombre: "CARRERAS" },
    { id: "accion", nombre: "ACCIÓN" },
    { id: "secundaria", nombre: "SECUNDARIAS" },
  ]

  const misionesFiltradas =
    selectedCategory === "todas" ? misiones : misiones.filter((m) => m.categoria === selectedCategory)

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
            <Link href="/misiones" className="font-bold text-primary">
              MISIONES
            </Link>
            <Link href="/vehiculos" className="font-bold hover:text-primary transition-colors">
              VEHÍCULOS
            </Link>
            <Link href="/personajes" className="font-bold hover:text-primary transition-colors">
              PERSONAJES
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/mexico-city-skyline-at-night-with-neon-lights.jpg"
            alt="Misiones Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-primary animate-pulse" />
            <span className="text-sm tracking-[0.3em] text-primary uppercase font-bold">150+ Misiones</span>
            <div className="h-1 w-16 bg-primary animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight animate-slide-up">
            <span className="block text-balance">TU</span>
            <span className="block text-primary text-balance animate-neon-pulse">DESTINO</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Desde misiones épicas hasta desafíos secundarios. Cada decisión cuenta, cada victoria tiene su precio.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="border-y border-border bg-card/30 backdrop-blur-sm py-6 sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 font-black text-sm tracking-wider transition-all duration-300 border-2 rounded ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(101,240,150,0.4)]"
                    : "bg-transparent border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Misiones Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {misionesFiltradas.map((mision, i) => (
            <Card
              key={mision.id}
              className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(101,240,150,0.3)] cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={mision.imagen || "/placeholder.svg"}
                  alt={mision.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 bg-${mision.color} text-${mision.color}-foreground text-xs font-bold tracking-wider rounded`}
                >
                  {mision.dificultad.toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-1 bg-${mision.color} group-hover:w-16 transition-all duration-300`} />
                  <span className={`text-xs tracking-widest text-${mision.color} font-bold`}>{`0${mision.id}`}</span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-balance group-hover:text-primary transition-colors duration-300">
                  {mision.titulo}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{mision.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground font-bold">RECOMPENSA</div>
                    <div className="text-lg font-black text-primary">{mision.recompensa}</div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    INICIAR
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
