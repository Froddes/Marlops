# Marlop's & La Trasquilá — web

Web de un negocio de catering para eventos con dos marcas: **Marlop's** (dulce) y **La Trasquilá** (salado). Los visitantes eligen una de las dos experiencias, consultan carta, galería y vídeos, y contactan por formulario o WhatsApp.

🔗 **[marlopsylatrasquila.com](https://marlopsylatrasquila.com/)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

> Proyecto para cliente real. **Rebranding en curso.**

## Funcionalidades

- Portada que divide la web en las dos marcas, cada una con su propia página.
- **Contenido desde JSON**: carta, galería, vídeos y experiencia se pintan con JavaScript a partir de ficheros en `src/json/`, así se actualizan sin tocar el HTML.
- Formulario de contacto con validación en cliente y acceso directo a WhatsApp.
- Componentes HTML reutilizables (cabecera, pie, info) incluidos dinámicamente.
- Páginas legales: privacidad y términos de servicio.

## Estructura

```
src/
├── json/      → carta, galería, vídeos y experiencia de cada marca
├── js/
│   ├── renders/    → pintan menú, galería, experiencia y mensajes desde JSON
│   ├── validator/  → validación del formulario de contacto
│   └── main/       → lógica de cada página
├── html/      → fragmentos reutilizables (footer, info, WhatsApp)
└── sass/      → estilos
```

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción en dist/
```

## Créditos

Maquetación base adaptada de una plantilla de [HTML5 UP](https://html5up.net/) (licencia CCA 3.0, ver `LICENSE.txt`). Iconos de Font Awesome.

---

Desarrollado por **Francisco Javier Rodríguez Martín** ([@Froddes](https://github.com/Froddes)) · [froddes.com](https://froddes.com/)
