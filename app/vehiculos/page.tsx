"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function VehiculosPage() {
  const [selectedType, setSelectedType] = useState("todos")

  const vehiculos = [
    {
      id: 1,
      nombre: "AZTECA SUPREME",
      tipo: "lowrider",
      velocidad: "85",
      aceleracion: "70",
      manejo: "95",
      precio: "$150,000",
      desc: "El lowrider más legendario. Hidráulicos de lujo y cromados que brillan bajo las luces de neón.",
      imagen: "/custom-lowrider-car-with-hydraulics-mexican-street.jpg",
    },
    {
      id: 2,
      nombre: "RELÁMPAGO ROJO",
      tipo: "deportivo",
      velocidad: "100",
      aceleracion: "98",
      manejo: "85",
      precio: "$280,000",
      desc: "Velocidad pura en las autopistas de México. Perfecto para escapar o dominar las carreras nocturnas.",
      imagen: "/lowrider-car-in-mexican-street-at-sunset.jpg",
    },
    {
      id: 3,
      nombre: "CHEYENNE BLINDADA",
      tipo: "suv",
      velocidad: "75",
      aceleracion: "60",
      manejo: "70",
      precio: "$95,000",
      desc: "Protección máxima para misiones peligrosas. Perfecta para el terreno más difícil.",
      imagen: "/mexico-city-skyline-at-night-with-neon-lights.jpg",
    },
    {
      id: 4,
      nombre: "DIABLO CUSTOM",
      tipo: "lowrider",
      velocidad: "80",
      aceleracion: "75",
      manejo: "92",
      precio: "$175,000",
      desc: "Diseñado por El Diablo mismo. Pintura personalizada con máscaras de luchador.",
      imagen: "/lucha-libre-wrestler-mask-neon-lights.jpg",
    },
    {
      id: 5,
      nombre: "VÍBORA VELOCE",
      tipo: "moto",
      velocidad: "95",
      aceleracion: "100",
      manejo: "88",
      precio: "$75,000",
      desc: "Agilidad suprema entre el tráfico. Ideal para misiones rápidas y escapadas imposibles.",
      imagen: "/day-of-the-dead-sugar-skull-graffiti-wall.jpg",
    },
    {
      id: 6,
      nombre: "EMPERADOR DORADO",
      tipo: "deportivo",
      velocidad: "98",
      aceleracion: "95",
      manejo: "90",
      precio: "$320,000",
      desc: "Lujo y potencia combinados. El carro favorito de La Reina para eventos especiales.",
      imagen: "/mexican-street-tacos-neon-sign-night.jpg",
    },
  ]

  const tipos = [
    { id: "todos", nombre: "TODOS" },
    { id: "lowrider", nombre: "LOWRIDERS" },
    { id: "deportivo", nombre: "DEPORTIVOS" },
    { id: "suv", nombre: "SUV" },
    { id: "moto", nombre: "MOTOS" },
  ]

  const vehiculosFiltrados = selectedType === "todos" ? vehiculos : vehiculos.filter((v) => v.tipo === selectedType)

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
            <Link href="/vehiculos" className="font-bold text-accent">
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
            src="/custom-lowrider-car-with-hydraulics-mexican-street.jpg"
            alt="Vehículos Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-accent animate-pulse" />
            <span className="text-sm tracking-[0.3em] text-accent uppercase font-bold">80+ Vehículos</span>
            <div className="h-1 w-16 bg-accent animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight animate-slide-up">
            <span className="block text-balance">TU</span>
            <span className="block text-accent text-balance animate-neon-pulse">RANFLA</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Desde lowriders clásicos hasta deportivos extremos. Personaliza, mejora y domina las calles con estilo.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="border-y border-border bg-card/30 backdrop-blur-sm py-6 sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tipos.map((tipo) => (
              <button
                key={tipo.id}
                onClick={() => setSelectedType(tipo.id)}
                className={`px-6 py-2 font-black text-sm tracking-wider transition-all duration-300 border-2 rounded ${
                  selectedType === tipo.id
                    ? "bg-accent text-accent-foreground border-accent shadow-[0_0_20px_rgba(255,204,0,0.4)]"
                    : "bg-transparent border-border hover:border-accent hover:text-accent"
                }`}
              >
                {tipo.nombre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vehículos Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiculosFiltrados.map((vehiculo, i) => (
            <Card
              key={vehiculo.id}
              className="group relative overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,204,0,0.3)] cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={vehiculo.imagen || "/placeholder.svg"}
                  alt={vehiculo.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-1 bg-accent group-hover:w-16 transition-all duration-300" />
                  <span className="text-xs tracking-widest text-accent font-bold">{`0${vehiculo.id}`}</span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-balance group-hover:text-accent transition-colors duration-300">
                  {vehiculo.nombre}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{vehiculo.desc}</p>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground font-bold">VELOCIDAD</span>
                      <span className="text-accent font-bold">{vehiculo.velocidad}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${vehiculo.velocidad}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground font-bold">ACELERACIÓN</span>
                      <span className="text-accent font-bold">{vehiculo.aceleracion}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${vehiculo.aceleracion}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground font-bold">MANEJO</span>
                      <span className="text-accent font-bold">{vehiculo.manejo}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${vehiculo.manejo}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-2xl font-black text-accent">{vehiculo.precio}</div>
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    COMPRAR
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
