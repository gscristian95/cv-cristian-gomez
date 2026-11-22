# CV Cristian Gómez

CV web interactivo en HTML5 con tres estilos visuales (formal, animado y diver) y una versión para imprimir de 2 páginas en A4. El PDF se genera automáticamente a partir de la versión de impresión.

## Estructura

- `index.html`: CV web. El teléfono se inyecta desde una variable de entorno.
- `mediaprint/index.html`: versión de impresión generada con un agente mediante las especificaciones de `.github/cv-mediaprint-especificacion.md` en base a `index.html` (2 páginas A4).
- `css/`: estilos (`formal.css`, `PARTE1_CV/animado.css`, `diver.css`, `base.css`, `variables.css`).
- `js/generate-pdf.js`: genera el PDF en `assets/docs/` a partir de `mediaprint/index.html`.
- `js/build-site.js`: prepara la carpeta `dist/` con los archivos publicados.
- `netlify.toml`: configuración del despliegue en Netlify.

## Requisitos

- Node.js 18 o superior.
- Google Chrome instalado (para generar el PDF en local).

## Instalación

```bash
npm install
```

## Variable de entorno

El teléfono no está en el código. Se define en la variable `TELEFONO_PRIVADO`:

```bash
export TELEFONO_PRIVADO="+34 600 00 00 00"
```

Si la variable no está definida, el build falla a propósito.

## Uso

Generar el PDF y el sitio:

```bash
TELEFONO_PRIVADO="+34 600 00 00 00" npm run build:pdf
TELEFONO_PRIVADO="+34 600 00 00 00" npm run build
```

- `npm run build:pdf` crea `assets/docs/Currículum Vitae - Cristian Gómez.pdf`.
- `npm run build` copia los archivos publicados a `dist/` y rellena el teléfono.

## Despliegue en Netlify

1. Sube el repositorio a GitHub y conéctalo a Netlify.
2. En **Site configuration > Environment variables**, se añade `TELEFONO_PRIVADO`.
3. Netlify ejecuta `npm run build:pdf && npm run build` (definido en `netlify.toml`) y publica `dist/`.

El PDF no se sube al repositorio: `*.pdf` y `dist/` están en `.gitignore`. Se genera en cada build, así que al actualizar el CV basta con volver a desplegar.

## Botón de descarga

El botón "Descargar CV" apunta a `assets/docs/Currículum Vitae - Cristian Gómez.pdf`. Ese archivo solo existe en el sitio desplegado en Netlify, porque el build lo genera con el teléfono de `TELEFONO_PRIVADO`.

- **En Netlify:** el PDF se genera en cada build y el botón descarga el CV.
- **En GitHub:** el PDF no está en el repositorio, así que el botón no funciona. Es lo esperado, para no publicar el teléfono.
- **En local:** el botón funciona solo si antes has ejecutado `npm run build:pdf`.

## Demo
<img width="280" height="569" alt="demo-web" src="https://github.com/user-attachments/assets/ed289133-aff8-4ce3-8239-eb496d57372d" />


