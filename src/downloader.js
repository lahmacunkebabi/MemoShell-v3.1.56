import inquirer from 'inquirer';
import axios from 'axios';
import extract from 'extract-zip';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function downloadFile() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'İndir linki:',
      validate: (input) => input.length > 0 || 'Lütfen bir link gir'
    },
    {
      type: 'input',
      name: 'filename',
      message: 'Kaydedilecek isim (orn: dosya.zip):',
      validate: (input) => input.length > 0 || 'Lütfen bir isim gir'
    }
  ]);

  try {
    console.log(chalk.blue('\n⏳ İndiriliyor...'));
    
    const response = await axios.get(answers.url, {
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(answers.filename);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log(chalk.green('✓ Dosya indirildi!'));

    // ZIP dosyası mı kontrol et
    if (answers.filename.endsWith('.zip')) {
      const extractPath = path.join(__dirname, 'Downloads');
      if (!fs.existsSync(extractPath)) {
        fs.mkdirSync(extractPath, { recursive: true });
      }

      console.log(chalk.blue('⏳ Dosya çıkartılıyor...'));
      await extract(answers.filename, { dir: extractPath });
      console.log(chalk.green(`✓ Dosya çıkartıldı! Klasör: ${extractPath}`));
    } else {
      console.log(chalk.yellow('⚠ ZIP dosyası değil. Manuel olarak açabilirsin.'));
    }

  } catch (error) {
    console.error(chalk.red('✗ Hata:'), error.message);
  }

  console.log('');
}