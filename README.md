# Calles de México 🇲🇽 | Sitio Web Oficial

![Estado del Proyecto](https://img.shields.io/badge/estado-activo-success.svg)
![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)
![Versión](https://img.shields.io/badge/versión-1.0.0-brightgreen.svg)

> Sitio web promocional inspirado en GTA, ambientado en la vibrante cultura mexicana. Una experiencia inmersiva que combina acción urbana con elementos culturales icónicos de México.

## 📋 Descripción

**Calles de México** es un sitio web interactivo que presenta un universo de videojuego ficticio ambientado en las calles de México. El proyecto combina diseño moderno, animaciones fluidas y elementos culturales mexicanos para crear una experiencia visual única inspirada en títulos de acción urbana.

### 🎯 Características Principales

- **🎮 Experiencia Inmersiva**: Navegación fluida con diseño inspirado en videojuegos AAA
- **🎭 Cultura Mexicana**: Elementos auténticos como lucha libre, lowriders, Día de Muertos y gastronomía callejera
- **👥 Sistema de Personajes**: Tres protagonistas únicos con historias entrelazadas
- **🚗 Galería de Vehículos**: Más de 80 vehículos personalizables
- **🗺️ Mapas Extensos**: 12 zonas distintas inspiradas en ciudades mexicanas
- **📱 Diseño Responsivo**: Optimizado para todos los dispositivos
- **⚡ Rendimiento Óptimo**: Carga rápida y animaciones suaves

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: [Next.js](https://nextjs.org/) / React
- **Estilización**: CSS Modules / Tailwind CSS
- **Animaciones**: Framer Motion / CSS Animations
- **Imágenes**: Optimización con Next.js Image
- **Hosting**: Vercel / Netlify
- **Diseño UI/UX**: Figma

## 🚀 Instalación y Configuración

### Prerrequisitos

```bash
Node.js 18.x o superior
npm o yarn
Git
```

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/MiguelMort09/gta5-mexican-page.git
   cd gta5-mexican-page
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus configuraciones
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
gta5-mexican-page/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── characters/
│   │   ├── vehicles/
│   │   └── missions/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Characters/
│   │   └── Footer/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── misiones.tsx
│   │   ├── vehiculos.tsx
│   │   └── personajes.tsx
│   ├── styles/
│   │   └── globals.css
│   └── utils/
├── .env.example
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Secciones del Sitio

### 1. **Inicio**
- Hero section con call-to-action principal
- Estadísticas del juego (misiones, vehículos, jugadores, mapas)
- Features destacados con imágenes temáticas

### 2. **Misiones**
- Catálogo de más de 150 misiones
- Filtros por categoría y dificultad
- Recompensas y requisitos

### 3. **Vehículos**
- Galería de 80+ vehículos
- Lowriders personalizables
- Especificaciones técnicas

### 4. **Personajes**
- El Diablo: Ex-luchador en busca de venganza
- La Reina: Jefa del cartel con poder absoluto
- El Gringo: Piloto temerario especialista en velocidad

## 🎯 Características Culturales

- **🎭 Lucha Libre**: Máscaras legendarias y movimientos épicos
- **🚗 Lowriders**: Personalización extrema con hidráulicos y cromados
- **🌮 Gastronomía Callejera**: Tacos, mezcal y cultura culinaria
- **💀 Día de Muertos**: Calaveras, arte urbano y tradiciones

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar linter
npm run test         # Ejecutar pruebas
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
vercel --prod
```

### Build Manual

```bash
npm run build
npm run start
```

## 📊 Rendimiento

- ⚡ Lighthouse Score: 95+
- 🎯 First Contentful Paint: < 1.5s
- 📱 Mobile Optimizado: 100%
- ♿ Accesibilidad: WCAG 2.1 AA

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Roadmap

- [ ] Modo multijugador online
- [ ] Sistema de logros y trofeos
- [ ] Integración con Discord
- [ ] Editor de personajes
- [ ] Modo historia expandido
- [ ] Aplicación móvil nativa

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Miguel Mort**
- Website: [miguelmort.dev](https://miguelmort.dev)
- GitHub: [@MiguelMort09](https://github.com/MiguelMort09)
- LinkedIn: [Miguel Mort](https://linkedin.com/in/miguelmort)

## 🙏 Agradecimientos

- Inspiración: Rockstar Games (GTA Series)
- Comunidad de desarrolladores mexicanos
- Contribuidores del proyecto
- Beta testers

## 📞 Contacto y Soporte

¿Tienes preguntas o sugerencias? Contáctanos:

- 🐦 Twitter/X: Canal oficial próximamente

---

<div align="center">

**¿Listo para conquistar las calles?**

🎮 Jugar Ahora (Próximamente) | 📖 Documentación (Próximamente) | 🎬 Tráiler (Próximamente)

Hecho con ❤️ en México 🇲🇽

© 2025 Calles de México. Todos los derechos reservados.

</div>
