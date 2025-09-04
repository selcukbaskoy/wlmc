import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';

// Duplicate function fix script
const fixDuplicateFunctions = async () => {
  const appDir = './src/app';
  
  // Pattern to find all page.jsx files
  const pageFiles = await glob(`${appDir}/**/page.jsx`);
  
  console.log(`Found ${pageFiles.length} page files to process...`);
  
  // Product ID mappings based on file names
  const productIdMap = {
    '2523-mimoza': 1,
    '2534-kral': 2,
    '2536-duhok': 3,
    '2501-denver': 4,
    '2502-seffaf-bogumlu': 5,
    '2504-kanalli': 6,
    '2507-2-emniyet-seritli': 7,
    '2510-duz-3-emniyet-cubuklu': 8,
    '2512-halab': 9,
    '2513-baghdad': 10,
    '2515-arbil': 11,
    '2517-arbil-2-emniyet-cubuklu': 12,
    '2518-mosul-2-emniyet-cubuklu': 13,
    '2519-mosul-3-emniyet-cubuklu': 14,
    '2520-duhok-3-emniyet-cubuklu': 15,
    '2522-yasemen': 16,
    '2525-nazenin': 17,
    '2530-boncuk': 18,
    '2701-duz': 40,
    '2705-seffaf-bogumlu': 41,
    '2801-100luk-kanalli': 42,
    '2804-denver': 43,
    '2815-kral': 41,
    '2817-100luk-bombeli': 44,
    '2818-100luk-dekorlu': 45,
    '2819-100luk-duhok': 46,
    '2822-100luk-yasemen': 47,
    '2844-kare': 43,
    '2866-dubai': 50
  };
  
  let fixedCount = 0;
  
  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if already has import
      if (content.includes('getRandomRelatedProducts') && content.includes('from "../../utils/productUtils"')) {
        console.log(`✓ Already fixed: ${filePath}`);
        continue;
      }
      
      // Extract product code from file path
      const fileName = path.basename(path.dirname(filePath));
      let productId = null;
      
      // Find matching product ID
      for (const [code, id] of Object.entries(productIdMap)) {
        if (fileName.includes(code)) {
          productId = id;
          break;
        }
      }
      
      if (!productId) {
        // Extract ID from existing function if available
        const match = content.match(/const currentProductId = (\d+);/);
        if (match) {
          productId = parseInt(match[1]);
        } else {
          console.log(`⚠ Could not determine product ID for: ${filePath}`);
          continue;
        }
      }
      
      // Add import if not exists
      if (!content.includes('from "../../utils/productUtils"')) {
        content = content.replace(
          /("use client";\s*\n\s*import { useState, useEffect } from "react";)/,
          `$1\nimport { getRandomRelatedProducts } from "../../utils/productUtils";`
        );
      }
      
      // Remove duplicate function definition
      const functionRegex = /\/\/ Rastgele ilgili ürünleri getir \(mevcut ürün hariç\)\s*\n\s*const getRandomRelatedProducts = \(count\) => \{\s*\n[\s\S]*?\n\s*\};\s*\n/;
      content = content.replace(functionRegex, '');
      
      // Also handle alternative comment patterns
      const altFunctionRegex = /const getRandomRelatedProducts = \(count\) => \{\s*\n\s*const currentProductId = \d+;[\s\S]*?\n\s*\};\s*\n/;
      content = content.replace(altFunctionRegex, '');
      
      // Add currentProductId if not exists
      if (!content.includes('const currentProductId =')) {
        // Find a good place to insert it (after handlePhoneCall function)
        const insertPoint = content.indexOf('const handlePhoneCall = () =>');
        if (insertPoint !== -1) {
          const insertAfter = content.indexOf('};', insertPoint) + 2;
          content = content.slice(0, insertAfter) + 
                   `\n\n  // Product ID for related products\n  const currentProductId = ${productId};` +
                   content.slice(insertAfter);
        }
      }
      
      // Update function calls
      content = content.replace(
        /getRandomRelatedProducts\((\d+)\)/g,
        `getRandomRelatedProducts(currentProductId, $1)`
      );
      
      // Write back to file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${filePath} (Product ID: ${productId})`);
      fixedCount++;
      
    } catch (error) {
      console.error(`✗ Error fixing ${filePath}:`, error.message);
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files successfully!`);
};

fixDuplicateFunctions().catch(console.error);
