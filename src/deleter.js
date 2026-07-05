import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export async function deleteFile() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'path',
      message: 'Silinecek dosya/klasör yolu:',
      validate: (input) => input.length > 0 || 'Lütfen bir yol gir'
    }
  ]);

  try {
    if (!fs.existsSync(answers.path)) {
      console.log(chalk.red('✗ Hata: Yol bulunamadı!'));
      return;
    }

    const stats = fs.statSync(answers.path);
    const isDir = stats.isDirectory();

    const confirm = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'sure',
        message: `${isDir ? 'Klasör' : 'Dosya'} silmek istediğine emin misin?`,
        default: false
      }
    ]);

    if (!confirm.sure) {
      console.log(chalk.yellow('İşlem iptal edildi.'));
      return;
    }

    console.log(chalk.blue('\n⏳ Siliniyor...'));

    if (isDir) {
      fs.rmSync(answers.path, { recursive: true, force: true });
    } else {
      fs.unlinkSync(answers.path);
    }

    console.log(chalk.green('✓ Silme işlemi tamamlandı!'));

  } catch (error) {
    console.error(chalk.red('✗ Hata:'), error.message);
  }

  console.log('');
}