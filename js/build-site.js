const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
// Solo lo que necesita la web. Así no se publican el PDF (con el teléfono), .gitignore ni los ficheros de configuración.
const PUBLISHED = ["index.html", "css", "js", path.join("assets", "images"), path.join("assets", "docs"), "mediaprint"];
const HTML_FILES = [path.join("index.html"), path.join("mediaprint", "index.html")];

function getPhone() {
  const phone = process.env.TELEFONO_PRIVADO;
  if (!phone) {
    throw new Error("Falta la variable de entorno TELEFONO_PRIVADO (ej.: +34 600 000 000)");
  }
  return phone;
}

// Sustituye los marcadores del teléfono por el valor de la variable de entorno.
function injectPhone(html, phone) {
  return html
    .replaceAll("{{TELEFONO_PRIVADO_HREF}}", phone.replace(/\s/g, ""))
    .replaceAll("{{TELEFONO_PRIVADO}}", phone);
}

function buildSite() {
  const phone = getPhone();
  fs.rmSync(DIST, { recursive: true, force: true });
  for (const entry of PUBLISHED) {
    const src = path.join(ROOT, entry);
    if (!fs.existsSync(src)) {
      console.warn(`Aviso: no existe ${entry}, se omite. Ejecuta npm run build:pdf antes.`);
      continue;
    }
    const dest = path.join(DIST, entry);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.cpSync(src, dest, { recursive: true });
  }
  for (const file of HTML_FILES) {
    const target = path.join(DIST, file);
    fs.writeFileSync(target, injectPhone(fs.readFileSync(target, "utf8"), phone));
  }
  console.log("Sitio generado en dist/ con el teléfono de TELEFONO_PRIVADO");
}

if (require.main === module) {
  buildSite();
}

module.exports = { injectPhone, getPhone };
