// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

const pageFiles = [
  // Agregar diferentes páginas aquí
  { name: 'marlops', file: 'marlops.html' },
  { name: 'la-trasquila', file: 'la-trasquila.html' },
  { name: 'contact', file: 'contact.html' },
  { name: 'quienes-somos', file: 'quienes-somos.html' },
  { name: 'politica-de-privacidad', file: 'politica-de-privacidad.html'},
  { name: 'terminos-de-servicio', file: 'terminos-de-servicio.html'},


  // Agrega los archivos adicionales aquí
  { name: 'whatsapp', file: 'whatsapp.html' },
  { name: 'footer', file: 'footer.html' },
  { name: 'info', file: 'info.html' },
  { name: 'viajesmarlops', file: 'viajesmarlops.html'}
];

const inputEntries = {};
pageFiles.forEach(({ name, file }) => {
  inputEntries[name] = path.resolve(__dirname, file);
});

// Agrega los archivos HTML ubicados en src/html/
const additionalHtmlFiles = ['whatsapp', 'footer', 'info', 'viajesmarlops'];
additionalHtmlFiles.forEach((file) => {
  inputEntries[file] = path.resolve(__dirname, 'src/html/', `${file}.html`);
});

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        ...inputEntries,
      },
    },
  },
});
