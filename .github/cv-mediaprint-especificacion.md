# Especificación Técnica y Contenido Maestro: CV Cristian Gómez (Versión Media Print & Portfolio)

Este documento contiene la especificación completa, los textos técnicos optimizados y las directivas de arquitectura HTML5/CSS3 para que el agente de desarrollo en Visual Studio Code implemente o actualice la versión de currículum imprimible (`@media print`) y web de Cristian Gómez.

---

## 1. Datos de Cabecera y Metadatos de Contacto

Los siguientes datos constituyen la cabecera formal del currículum vitae. En la vista web pueden incluir iconos y enlaces interactivos, mientras que en la vista de impresión (`@media print`) deben mostrarse con texto limpio y sin elementos flotantes redundantes.

- **Nombre Completo:** Cristian Gómez
- **Titular Profesional:** Desarrollador Web Full-Stack Junior | Estudiante de 2º DAW
- **Localidad:** Almoines, 46723 (Valencia, España)
- **Correo Electrónico:** gscristian95@gmail.com
- **Teléfono de Contacto:** {{TELEFONO_PRIVADO}}
- **Perfil de GitHub:** https://github.com/gscristian95
- **Repositorio Proyecto Principal (PIM):** https://github.com/gscristian95/Project2DAW_CristianGomez.git

---

## 2. Perfil Profesional y Síntesis Técnica ("Sobre Mí")

Este bloque sustituye las descripciones genéricas por un resumen de impacto que pone en valor la madurez metodológica, el perfil técnico y el uso avanzado de herramientas de productividad demostrado por el candidato.

> Desarrollador Web Full-Stack Junior en formación en el ciclo superior de Desarrollo de Aplicaciones Web (2º DAW), con base previa en Sistemas Microinformáticos y Redes (SMR). Especializado en arquitectura backend con PHP orientado a objetos y persistencia estructurada sobre MySQL, consumo asíncrono de APIs RESTful y diseño de interfaces web táctiles bajo principios _mobile-first_. Destaco por una elevada autonomía técnica, rigor en la arquitectura del código y un flujo de trabajo optimizado mediante gestión del conocimiento estructurada en Obsidian y Notion, combinada con asistencia avanzada de modelos de Inteligencia Artificial para acelerar la documentación técnica y el ciclo de vida del software.

---

## 3. Matriz de Habilidades Técnicas y Herramientas

En sustitución de barras porcentuales subjetivas, las habilidades se organizan por áreas de competencia técnica con un enfoque pragmático para reclutadores técnicos:

| Área de Especialización       | Tecnologías, Lenguajes y Protocolos                                                                                                         | Competencias y Enfoque Práctico                                                                                                                         |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Desarrollo Frontend & PWA** | HTML5 semántico, CSS3 moderno (Flexbox, Grid), JavaScript nativo (ES6 Modules), Tailwind CSS, Service Workers, IndexedDB, Web App Manifest. | Maquetación responsiva _mobile-first_, accesibilidad táctil (Touch Targets ≥48px en _Thumb Zone_), retención local de datos y resiliencia offline.      |
| **Desarrollo Backend & BBDD** | PHP 8.x (POO, PDO), Java, MySQL 8.0 (motor InnoDB, UTF8mb4), cURL, endpoints RESTful JSON, migración planificada a Laravel 11.              | Arquitectura desacoplada, ingesta asíncrona de APIs externas, capas de caché en servidor para mitigación de cuotas y normalización relacional estricta. |
| **Sistemas, Redes & DevOps**  | Linux (Ubuntu Server / Bash), Apache, Docker (conceptos base y despliegue), Git & GitHub (Git Flow con ramas de Sprint), SSH, FTP.          | Administración de servidores, despliegue de aplicaciones en entornos VPS, control de versiones por ramas y análisis comparativo de hosting.             |
| **Metodología, Flujo & IA**   | Obsidian (documentación estructurada en Markdown/Zettelkasten), Notion, GitHub Copilot (`copilot-instructions.md`), Gemini.                 | Gestión del conocimiento técnico, especificación de requerimientos de ingeniería, desarrollo asistido por IA y metodología ágil Scrum (3 Sprints).      |

### Habilidades Profesionales y de Gestión

- **Metodología Ágil:** Planificación y ejecución por Sprints, control de versiones semántico y revisiones periódicas de entregables.
- **Resolución Analítica:** Diagnóstico sistemático de errores en servidor, optimización de consultas SQL y control de latencias en red.
- **Documentación Rigurosa:** Capacidad de formalizar esquemas relacionales, wireframes de interfaz, auditorías de usabilidad y guías de arquitectura.
- **Capacidad de Autoaprendizaje:** Incorporación rápida de nuevas tecnologías, librerías y estándares de la industria web.

---

## 4. Formación Académica Reglada

- **C.F.G.S. Desarrollo de Aplicaciones Web (DAW)**  
  _Centro Educativo:_ IES María Enríquez (Gandia, Valencia)  
  _Período:_ 2025 – 2027 (Actualmente cursando 2º curso)  
  _Competencias:_ Desarrollo web en entorno cliente (DIW), entorno servidor (DWES), despliegue de aplicaciones (DAW) y proyecto integrador intermodular (PIM).
- **C.F.G.M. Sistemas Microinformáticos y Redes (SMR)**  
  _Centro Educativo:_ IES Jaume II el Just (Tavernes de la Valldigna, Valencia)  
  _Período:_ 2019 – 2021 (Titulado)  
  _Competencias:_ Montaje y mantenimiento de sistemas, redes de área local, seguridad informática, administración básica de servidores y sistemas operativos cliente/servidor.

---

## 5. Proyectos Técnicos Destacados

Esta sección constituye la prueba empírica del conocimiento técnico y la capacidad de resolución de problemas del candidato.

### Proyecto Principal: Plataforma Web PWA «Estado del Mar»

- **Contexto:** Proyecto Integrador Intermodular (PIM · 2º DAW · IES María Enríquez)
- **Rol:** Lead Full-Stack Developer & UI/UX Designer
- **Repositorio:** https://github.com/gscristian95/Project2DAW_CristianGomez.git (Ramas activas: `main`, `Sprint0`, `Sprint1`)
- **Stack Tecnológico:** PHP 8.x (PDO/POO), MySQL 8.0 (InnoDB), JavaScript Vanilla (ES6 Modules), Service Workers, IndexedDB, Tailwind CSS, REST APIs (AEMET, Puertos del Estado), Copilot IA.

#### Desafíos de Ingeniería e Hitos Implementados:

1. **Capa de Caché en Servidor y Optimización de Cuotas API:**
   Para resolver la estricta limitación de solicitudes de las APIs meteorológicas oficiales (AEMET <10 req/min) y reducir latencias en red, se implementó una tabla de persistencia `telemetria_cache` en MySQL 8.0. Un proceso programado sincroniza los datos cada 10-15 minutos; el cliente consulta únicamente los endpoints locales, logrando tiempos de respuesta de cliente inferiores a 3 segundos y cumplimiento absoluto de cuotas.
2. **Modelo Relacional Normalizado de 7 Entidades:**
   Diseño de un esquema físico robusto con tablas normalizadas (`cuentas_usuarios`, `deportes`, `spots`, `usuario_spots_favoritos`, `telemetria_cache`, `reportes_comunidad`, `alertas_personalizadas`). Incluye claves foráneas con reglas `ON DELETE CASCADE`, coordenadas GPS de alta precisión en `DECIMAL(9,6)` (WGS84) e índices compuestos (`idx_telemetria_spot_fecha`) con clave de unicidad para evitar duplicados.
3. **Resiliencia Offline y Operativa en Playa (PWA):**
   Configuración de Service Workers e IndexedDB para almacenar localmente en el dispositivo los últimos 15-30 minutos de lecturas y cartografía vectorial, permitiendo a los deportistas consultar las condiciones marítimas incluso en zonas de costa con corte de cobertura móvil.
4. **Diseño Táctil y Filosofía «Zero Social Noise»:**
   Sistema de interfaz optimizado para visibilidad bajo luz solar directa (paleta WCAG AA «El Olimpo Náutico»), áreas táctiles seguras (Touch Targets ≥48px en la zona del pulgar) y sustitución de redes sociales complejas por chips de telemetría comunitaria normalizada de 1 solo toque (medusas, aforo y aparcamiento). Auditoría de usabilidad de Nielsen completada con 10/10 PASS.
5. **Ciclo de Vida Ágil y Desarrollo Asistido:**
   Gestión del proyecto mediante Scrum en 3 Sprints con Git Flow formal e integración continua de un agente de IA mediante especificaciones estructuradas en `.github/copilot-instructions.md`.

---

### Proyectos Complementarios en GitHub (Exploración Técnica)

#### 1. Orquestador de Debate Asíncrono entre LLMs (Consola)

- **Tecnologías:** JavaScript / Node.js, Consumo de APIs de Modelos de Lenguaje.
- **Descripción:** Aplicación de terminal que permite ingresar un tema de discusión por línea de comandos y gestiona automáticamente un diálogo argumentativo entre dos instancias independientes de modelos de IA, controlando los turnos, la alternancia de contexto y el parseo de respuestas en tiempo real.

#### 2. CV Animado & Tamagotchi en Consola Java

- **Tecnologías:** Java (JDK), Programación Orientada a Objetos (POO).
- **Descripción:** Implementación de proyectos en terminal que aplican patrones de diseño y modularidad en Java. El CV en consola renderiza banners en arte ASCII de gran escala seguidos de un efecto de desplazamiento vertical continuo simulando los créditos de una película; el Tamagotchi implementa bucles de eventos, máquinas de estado y persistencia de estadísticas del personaje.

---

## 6. Idiomas

| Idioma                   | Competencia Lingüística         | Contexto de Uso                                                                                   |
| :----------------------- | :------------------------------ | :------------------------------------------------------------------------------------------------ |
| **Español**              | Nativo                          | Comunicación profesional y redacción técnica completa.                                            |
| **Valenciano / Catalán** | Competencia Nativa / Bilingüe   | Comunicación fluida oral y escrita en el ámbito autonómico.                                       |
| **Inglés**               | Técnico / Nivel Intermedio (B1) | Lectura fluida de documentación oficial, especificaciones técnicas de APIs y foros de desarrollo. |

---

## 7. Directivas y Código CSS para la Implementación de `@media print` en VSCode

Para que el agente de VSCode genere una hoja de estilo de impresión profesional y calibrada para exportar a **PDF en formato A4 (exactamente 2 páginas equilibradas sin tablas partidas)**, debe aplicar la siguiente lógica en `styles.css`:

```css
/* ==========================================================================
   DIRECTIVAS DE IMPRESIÓN OFICIALES PARA PDF A4 (@media print)
   ========================================================================== */

@media print {
  /* 1. Configuración de página A4 y márgenes normalizados */
  @page {
    size: A4 portrait;
    margin: 1.2cm 1.5cm 1.2cm 1.5cm;
  }

  /* 2. Reseteo de fondo y colores para contraste de impresión óptimo */
  html,
  body {
    background-color: #ffffff !important;
    color: #111827 !important;
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif !important;
    font-size: 9.5pt !important;
    line-height: 1.35 !important;
  }

  /* 3. Ocultación de controles interactivos, botones y elementos web */
  header nav,
  .main-nav,
  .nav-links,
  .btn,
  button,
  #theme-toggle,
  .btn-icon,
  .hero-cta,
  .main-footer,
  .web-only {
    display: none !important;
  }

  /* 4. Cabecera imprimible compacta */
  .main-header,
  .header-container {
    background: none !important;
    border-bottom: 2px solid #0284c7 !important;
    padding-bottom: 0.5rem !important;
    margin-bottom: 1rem !important;
  }

  /* 5. Prevención de saltos huérfanos dentro de cajas y tablas */
  section,
  article,
  table,
  tr,
  .card,
  .skill-card,
  .project-card {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  /* 6. Salto de página controlado: La sección de proyectos abre la página 2 */
  #proyectos {
    page-break-before: always !important;
    break-before: page !important;
    margin-top: 1rem !important;
  }

  /* 7. Estilo de tablas de habilidades e idiomas */
  table {
    width: 100% !important;
    border-collapse: collapse !important;
    margin: 0.5rem 0 !important;
  }

  th,
  td {
    border: 1px solid #d1d5db !important;
    padding: 0.4rem 0.6rem !important;
    font-size: 8.5pt !important;
    text-align: left !important;
  }

  th {
    background-color: #f3f4f6 !important;
    color: #111827 !important;
    font-weight: 700 !important;
  }

  /* 8. Tarjetas de proyectos y contenedor principal */
  .page-content {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    gap: 1rem !important;
  }

  .card {
    box-shadow: none !important;
    border: 1px solid #e5e7eb !important;
    background: #ffffff !important;
    padding: 0.75rem 1rem !important;
  }

  h1 {
    font-size: 1.8rem !important;
    margin-bottom: 0.2rem !important;
    color: #0284c7 !important;
  }
  h2 {
    font-size: 1.2rem !important;
    margin: 0.6rem 0 0.3rem 0 !important;
    border-bottom: 1px solid #e5e7eb !important;
  }
  h3 {
    font-size: 1rem !important;
    margin-bottom: 0.2rem !important;
    color: #0f172a !important;
  }

  /* 9. Enlaces en texto plano sin subrayados estridentes */
  a {
    color: #0284c7 !important;
    text-decoration: none !important;
  }
}
```

---

## 8. Instrucciones de Ejecución para el Agente de VSCode

Al procesar este archivo, el agente debe ejecutar las siguientes acciones en el espacio de trabajo:

1. **Actualizar `index.html`:**
   - Reemplazar el antiguo titular por: _Desarrollador Web Full-Stack Junior | Alumno 2º DAW_.
   - Sustituir la sección «Sobre Mí» con el texto del apartado 2 de este documento.
   - Actualizar la tabla o listado de «Habilidades Técnicas» incorporando los 4 bloques estructurados (Frontend/PWA, Backend/BBDD, Sistemas/DevOps y Metodología/Flujo/IA).
   - Eliminar el proyecto de inventario no realizado y reemplazarlo por la ficha completa del **Proyecto PIM «Estado del Mar»** y los dos proyectos de consola en GitHub.
   - Asegurarse de que los bloques tengan identificadores semánticos (`#hero`, `#sobre-mi`, `#skills`, `#formacion`, `#proyectos`, `#idiomas`, `#contacto`).
2. **Actualizar `styles.css`:**
   - Incorporar al final del archivo el bloque `@media print` especificado en el apartado 7.
   - Comprobar que en el navegador, al pulsar `Ctrl + P` (o `Cmd + P`) con destino «Guardar como PDF» y márgenes predeterminados, la sección de Proyectos salte a la página 2 y el documento quede exactamente en 2 hojas limpias.
