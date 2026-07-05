import inquirer from 'inquirer';
import chalk from 'chalk';
import { downloadFile } from './src/downloader.js';
import { deleteFile } from './src/deleter.js';
import { hashFile } from './src/hasher.js';

async function main() {
  console.clear();
  console.log(chalk.cyan('==========================================='));
  console.log(chalk.cyan('           MemoShell v3.1.69'));
  console.log(chalk.cyan('        Developer: Memo\'s Projects'));
  console.log(chalk.cyan('===========================================\n'));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Bir işlem seç:',
      choices: [
        { name: '1. Dosya indir ve Klasöre çıkar', value: 'download' },
        { name: '2. Dosya veya Klasör sil', value: 'delete' },
        { name: '3. Dosya Hash (Güvenlik) Kontrolu', value: 'hash' },
        { name: '4. Çıkış', value: 'exit' }
      ]
    }
  ]);

  switch (answers.action) {
    case 'download':
      await downloadFile();
      break;
    case 'delete':
      await deleteFile();
      break;
    case 'hash':
      await hashFile();
      break;
    case 'exit':
      console.log(chalk.green('Çıkılıyor...'));
      process.exit(0);
  }

  // Menüye geri dön
  await main();
}

main().catch(err => {
  console.error(chalk.red('Hata:'), err.message);
  process.exit(1);
});
