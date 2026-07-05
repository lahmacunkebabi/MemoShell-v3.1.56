import inquirer from 'inquirer';
import chalk from 'chalk';
import crypto from 'crypto';
import fs from 'fs';

export async function hashFile() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'path',
      message: 'Hash\'ini kontrol edeceğin dosya yolu:',
      validate: (input) => input.length > 0 || 'Lütfen bir yol gir'
    }
  ]);

  try {
    if (!fs.existsSync(answers.path)) {
      console.log(chalk.red('✗ Hata: Dosya bulunamadı!'));
      return;
    }

    console.log(chalk.blue('\n⏳ Hash hesaplanıyor...'));

    const fileBuffer = fs.readFileSync(answers.path);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');

    console.log(chalk.green('\n✓ SHA256 Hash:'));
    console.log(chalk.cyan(hex));
    console.log('');

  } catch (error) {
    console.error(chalk.red('✗ Hata:'), error.message);
  }

  console.log('');
}