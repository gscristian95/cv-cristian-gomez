const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const { injectPhone, getPhone } = require("./build-site");

const CHROME_MAC = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  console.log("Iniciando Chrome para generar el CV...");

  // Se valida el teléfono antes de abrir Chrome.
  let phone;
  try {
    phone = getPhone();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  let browser;
  try {
    // 1. Abre Chrome usando el navegador instalado en el Mac.
    browser = await puppeteer.launch({
      headless: "new",
      // En Netlify se usa el Chrome que instala Puppeteer. En el Mac se usa el Chrome instalado.
      executablePath: process.env.NETLIFY ? undefined : CHROME_MAC,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // 2. Versión de impresión (mediaprint/index.html) con el teléfono de TELEFONO_PRIVADO.
    // Se escribe en un temporal dentro de mediaprint/ y se carga por file:// para que las imágenes relativas funcionen.
    const mediaprintDir = path.resolve(__dirname, "..", "mediaprint");
    const sourcePath = path.join(mediaprintDir, "index.html");
    const tempPath = path.join(mediaprintDir, ".index.tmp.html");
    fs.writeFileSync(tempPath, injectPhone(fs.readFileSync(sourcePath, "utf8"), phone));

    try {
      await page.goto(`file://${tempPath}`, { waitUntil: "networkidle0" });
    } finally {
      fs.rmSync(tempPath, { force: true });
    }

    // 3. Ruta de salida del PDF, la misma que enlaza el botón "Descargar CV".
    const outputDir = path.resolve(__dirname, "..", "assets", "docs");
    fs.mkdirSync(outputDir, { recursive: true });
    const pdfPath = path.join(outputDir, "Currículum Vitae - Cristian Gómez.pdf");
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
    });

    console.log("PDF generado correctamente en assets/docs: Currículum Vitae - Cristian Gómez.pdf");
  } catch (error) {
    console.error("Error al generar el PDF:", error);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
})();
