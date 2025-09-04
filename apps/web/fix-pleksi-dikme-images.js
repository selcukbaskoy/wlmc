const fs = require('fs');
const path = require('path');

// Pleksi dikme ile ilgili tüm klasörleri bul
function findPleksiDikmeDirectories() {
  const appDir = path.join(__dirname, 'src', 'app');
  const directories = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('pleksiglas-korkuluk-dikme-'))
    .map(dirent => dirent.name);
  
  return directories;
}

// Bir dosyada WalmcoImage import'u var mı kontrol et
function hasWalmcoImageImport(content) {
  return content.includes('import WalmcoImage');
}

// WalmcoImage import'u ekle
function addWalmcoImageImport(content) {
  if (hasWalmcoImageImport(content)) {
    return content;
  }
  
  // Header import'undan sonra WalmcoImage import'u ekle
  const headerImportRegex = /import Header from "\.\.\/\.\.\/components\/Header";/;
  if (headerImportRegex.test(content)) {
    return content.replace(
      headerImportRegex,
      `import Header from "../../components/Header";
import WalmcoImage from "../../components/WalmcoImage";`
    );
  }
  
  return content;
}

// img tag'lerini WalmcoImage ile değiştir
function replaceImgWithWalmcoImage(content, productName) {
  // Ana ürün görseli
  content = content.replace(
    /<img\s+src={([^}]+)}\s+alt={([^}]+)}\s+className="([^"]*)"([^>]*)\s*\/>/g,
    `<WalmcoImage\n                  src={$1}\n                  alt={$2}\n                  productName="${productName}"\n                  className="$3"$4\n                />`
  );
  
  // Sabit URL'li img tag'leri
  content = content.replace(
    /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s+className="([^"]*)"([^>]*)\s*\/>/g,
    `<WalmcoImage\n                   src="$1"\n                   alt="$2"\n                   productName="${productName}"\n                   className="$3"$4\n                 />`
  );
  
  // Style özellikli img tag'leri
  content = content.replace(
    /<img\s+src={([^}]+)}\s+alt={([^}]+)}\s+className="([^"]*)"\s+style={([^}]+)}\s*\/>/g,
    `<WalmcoImage\n                  src={$1}\n                  alt={$2}\n                  productName="${productName}"\n                  className="$3"\n                  style={$4}\n                />`
  );
  
  return content;
}

// Ürün adını klasör adından çıkar
function extractProductName(directoryName) {
  const parts = directoryName.replace('pleksiglas-korkuluk-dikme-', '').split('-');
  
  // Model numarasını bul
  const modelMatch = directoryName.match(/(\d{4})/);
  const modelNumber = modelMatch ? modelMatch[1] : '';
  
  // Son kısmı model adı olarak al
  const modelName = parts[parts.length - 1];
  
  return `${modelNumber} ${modelName} Model`.replace(/^\s+|\s+$/g, '');
}

// Ana fonksiyon
function fixPleksiDikmeImages() {
  const directories = findPleksiDikmeDirectories();
  let fixedCount = 0;
  let errorCount = 0;
  
  console.log(`Bulunan pleksi dikme klasörleri: ${directories.length}`);
  
  directories.forEach(dir => {
    try {
      const pageFilePath = path.join(__dirname, 'src', 'app', dir, 'page.jsx');
      
      if (!fs.existsSync(pageFilePath)) {
        console.log(`❌ ${dir}: page.jsx dosyası bulunamadı`);
        errorCount++;
        return;
      }
      
      let content = fs.readFileSync(pageFilePath, 'utf8');
      const originalContent = content;
      
      // WalmcoImage import'u ekle
      content = addWalmcoImageImport(content);
      
      // Ürün adını çıkar
      const productName = extractProductName(dir);
      
      // img tag'lerini WalmcoImage ile değiştir
      content = replaceImgWithWalmcoImage(content, productName);
      
      // Değişiklik var mı kontrol et
      if (content !== originalContent) {
        fs.writeFileSync(pageFilePath, content, 'utf8');
        console.log(`✅ ${dir}: Başarıyla düzeltildi (${productName})`);
        fixedCount++;
      } else {
        console.log(`ℹ️  ${dir}: Zaten güncel`);
      }
      
    } catch (error) {
      console.error(`❌ ${dir}: Hata - ${error.message}`);
      errorCount++;
    }
  });
  
  console.log(`\n📊 Özet:`);
  console.log(`✅ Düzeltilen: ${fixedCount}`);
  console.log(`❌ Hata: ${errorCount}`);
  console.log(`📁 Toplam: ${directories.length}`);
}

// Script'i çalıştır
fixPleksiDikmeImages();
