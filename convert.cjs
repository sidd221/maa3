const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function convertImage(fileName, width) {
  const ext = path.extname(fileName);
  const baseName = path.basename(fileName, ext);
  const inputPath = path.join(publicDir, fileName);
  const outputPath = path.join(publicDir, `${baseName}.webp`);

  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping ${fileName}, not found.`);
    return;
  }

  try {
    let pipeline = sharp(inputPath);
    if (width) {
      pipeline = pipeline.resize({ width });
    }
    await pipeline.webp({ quality: 80 }).toFile(outputPath);
    console.log(`Successfully converted ${fileName} to ${baseName}.webp`);
    
    // Delete the original file to save space and ensure we use the webp
    fs.unlinkSync(inputPath);
  } catch (error) {
    console.error(`Error converting ${fileName}:`, error);
  }
}

async function main() {
  const imagesToConvert = [
    { name: 'c_1.jpeg', width: 400 },
    { name: 'c_2.jpeg', width: 400 },
    { name: 'c_3.jpeg', width: 400 },
    { name: 'c_4.jpeg', width: 400 },
    { name: 'c_5.jpeg', width: 400 },
    { name: 'c_6.jpeg', width: 400 },
    { name: 'd1.jpeg', width: 600 },
    { name: 'd2.jpeg', width: 600 },
    { name: 'hero_section_bg.png', width: 1920 }
  ];

  for (const img of imagesToConvert) {
    await convertImage(img.name, img.width);
  }
}

main();
