# MemoShell v3.1.69

**Developer:** Memo's Projects

Dosya yönetim aracı. İndir, sil, hash kontrolü yap!

## Özellikler

1. **Dosya İndir ve Klasöre Çıkar** - URL'den dosya indir, ZIP çıkart
2. **Dosya veya Klasör Sil** - Güvenli silme işlemi
3. **Dosya Hash (Güvenlik) Kontrolu** - SHA256 hash hesapla
4. **Çıkış** - Programı kapat

## Kurulum

```bash
npm install
```

## Kullanım

```bash
npm start
```

## Klasör Yapısı

```
MemoShell/
├── package.json
├── index.js (Ana dosya)
├── src/
│   ├── downloader.js
│   ├── deleter.js
│   └── hasher.js
├── Downloads/ (İndirilen dosyalar)
└── README.md
```

## Gereksinimler

- Node.js 14+
- npm

## Lisans

MIT
