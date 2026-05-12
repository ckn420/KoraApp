# KORA — Landing web

Página web del proyecto **KORA**, una aplicación móvil de asistencia silenciosa para situaciones de peligro.

## Estructura

```
kora-web/
├── index.html        ← HTML principal (todas las secciones)
├── css/
│   └── styles.css    ← Estilos completos (dark, tech)
├── js/
│   └── script.js     ← Animaciones, smooth scroll, tilt 3D
└── README.md
```

## Cómo abrirlo

Hay tres formas:

**1. Doble clic** sobre `index.html` (lo abre el navegador directamente).

**2. Servidor local con Python** (recomendado, evita problemas con rutas):
```bash
cd kora-web
python3 -m http.server 8000
```
Después abrir `http://localhost:8000` en el navegador.

**3. Con VSCode** + extensión *Live Server* → clic derecho sobre `index.html` → *Open with Live Server*.

## Secciones

1. **Hero** — Presentación principal con mockup interactivo del teléfono
2. **Producto** — Alcance, valor y público objetivo
3. **Módulos** — Los 8 módulos funcionales de KORA
4. **Requisitos funcionales** — Listado completo (14 puntos)
5. **Interfaces externas** — UI, Hardware, Software, Comunicación
6. **Requisitos no funcionales** — Seguridad, capacidad, escalabilidad, etc.
7. **Caso de uso** — Flujo paso a paso de activación de alerta
8. **Futuro** — Roadmap de funcionalidades planificadas
9. **CTA + Footer**

## Personalización rápida

- **Colores**: variables CSS al inicio de `styles.css` (`:root { ... }`). Cambiá `--accent` para mover toda la paleta.
- **Texto**: editá directamente `index.html`.
- **Email de contacto**: buscá `contacto@kora.app` en `index.html` y `js/script.js` y reemplazalo.

## Tecnologías

- HTML5 semántico
- CSS3 puro (variables, grid, animaciones, sin frameworks)
- JavaScript vanilla (IntersectionObserver, smooth scroll)
- Tipografías: Fraunces (display), Manrope (body), JetBrains Mono (técnica) — desde Google Fonts
- Sin dependencias externas más allá de las fuentes
