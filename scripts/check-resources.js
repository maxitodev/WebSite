#!/usr/bin/env node

/**
 * Script para verificar recursos faltantes y generar fallbacks
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const requiredResources = [
  'yo/1.webm',
  'images/photo-2.jpeg',
  'images/maximo-profile.jpg',
  'projects/maxcomgames.png',
  'projects/perfiluam.png',
  'projects/simposio.png',
  'projects/donauam.png',
  'projects/gestorescolar.png',
  'projects/calibreconductor.png',
  'projects/sistemafinanciero.png',
  'icons/react.png',
  'icons/nextjs.png',
  'icons/typescript.png',
  'icons/javascript.png',
  'icons/tailwind.png',
  'icons/nodejs.png',
  'icons/express.png',
  'icons/python.png',
  'icons/mongodb.png',
  'icons/openai.png',
  'icons/vite.png'
];

function checkResources() {
  console.log('🔍 Verificando recursos requeridos...\n');
  
  const missing = [];
  const found = [];
  
  requiredResources.forEach(resource => {
    const fullPath = path.join(publicDir, resource);
    if (fs.existsSync(fullPath)) {
      found.push(resource);
    } else {
      missing.push(resource);
    }
  });
  
  console.log(`✅ Recursos encontrados: ${found.length}`);
  found.forEach(resource => {
    console.log(`   📄 ${resource}`);
  });
  
  if (missing.length > 0) {
    console.log(`\n❌ Recursos faltantes: ${missing.length}`);
    missing.forEach(resource => {
      console.log(`   ⚠️  ${resource}`);
    });
    
    console.log('\n💡 Soluciones sugeridas:');
    console.log('   • Agregar las imágenes faltantes a la carpeta public/');
    console.log('   • Usar placeholders temporales');
    console.log('   • Actualizar las rutas en el código');
  } else {
    console.log('\n🎉 ¡Todos los recursos están disponibles!');
  }
  
  return { found, missing };
}

function generatePlaceholders(missing) {
  if (missing.length === 0) return;
  
  console.log('\n🛠️  Generando placeholders SVG...');
  
  missing.forEach(resource => {
    const fullPath = path.join(publicDir, resource);
    const dir = path.dirname(fullPath);
    const ext = path.extname(resource);
    
    // Crear directorio si no existe
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Generar placeholder según el tipo
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const isProject = resource.includes('projects/');
      const isIcon = resource.includes('icons/');
      const name = path.basename(resource, ext);
      
      let width = 400;
      let height = 300;
      let text = name;
      let bgColor = '#374151';
      let textColor = '#9CA3AF';
      
      if (isProject) {
        width = 800;
        height = 450;
        text = `Proyecto: ${name}`;
        bgColor = '#1F2937';
      } else if (isIcon) {
        width = 64;
        height = 64;
        text = name.toUpperCase();
        bgColor = '#111827';
        textColor = '#6B7280';
      }
      
      const svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${bgColor}"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="${isIcon ? '8' : '16'}" font-family="system-ui, -apple-system, sans-serif">
          ${text}
        </text>
      </svg>`;
      
      // Convertir SVG a base64 y crear archivo SVG
      const svgPath = fullPath.replace(ext, '.svg');
      fs.writeFileSync(svgPath, svgContent);
      console.log(`   📄 Creado placeholder: ${resource.replace(ext, '.svg')}`);
    }
  });
}

// Ejecutar verificación
if (require.main === module) {
  const { found, missing } = checkResources();
  
  if (missing.length > 0) {
    generatePlaceholders(missing);
    console.log('\n📋 Reporte guardado. Recuerda reemplazar los placeholders con las imágenes reales.');
  }
}
