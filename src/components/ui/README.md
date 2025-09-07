# UI Components - Custom Design System

Bu klasör gelecekteki özel tasarımlar için ayrılmıştır.

## 🎨 Gelecekte Eklenecek Özel Komponentler

### Butonlar
- `Button/` - Özel buton tasarımları
- `IconButton/` - İkonlu butonlar
- `ToggleButton/` - Toggle butonlar

### Form Elemanları
- `Input/` - Özel input tasarımları
- `Select/` - Özel select tasarımları
- `Checkbox/` - Özel checkbox tasarımları
- `Radio/` - Özel radio button tasarımları

### Kartlar ve Paneller
- `Card/` - Özel kart tasarımları
- `Panel/` - Özel panel tasarımları
- `Modal/` - Özel modal tasarımları

### Navigasyon
- `Breadcrumb/` - Breadcrumb navigasyon
- `Pagination/` - Sayfalama komponenti
- `Tabs/` - Tab navigasyon

### Feedback
- `Alert/` - Uyarı mesajları
- `Toast/` - Bildirim mesajları
- `Progress/` - Progress bar
- `Spinner/` - Loading spinner

### Layout
- `Grid/` - Grid sistemi
- `Container/` - Container komponenti
- `Divider/` - Ayırıcı çizgi

## 📋 Kullanım Kuralları

1. **Tutarlılık**: Tüm komponentler aynı tasarım dilini kullanmalı
2. **Responsive**: Tüm komponentler responsive olmalı
3. **Accessibility**: WCAG standartlarına uygun olmalı
4. **TypeScript**: Tüm komponentler TypeScript ile yazılmalı
5. **CSS Modules**: Stil dosyaları CSS Modules kullanmalı
6. **Index Export**: Her komponent için index.ts dosyası olmalı

## 🎯 Tasarım Sistemi

- **Renkler**: `src/styles/globals.css`'deki CSS değişkenleri kullanılmalı
- **Fontlar**: `--font-gellix` ve `--font-playfair` kullanılmalı
- **Spacing**: Tutarlı spacing sistemi kullanılmalı
- **Border Radius**: Tutarlı border radius değerleri kullanılmalı

## 📁 Komponent Yapısı

```
ComponentName/
├── ComponentName.tsx          # Ana komponent
├── ComponentName.module.css   # Stil dosyası
├── index.ts                   # Export dosyası
└── README.md                  # Dokümantasyon
```

## 🚀 Örnek Kullanım

```typescript
import { Button } from '@/components/ui/Button';

export default function ExamplePage() {
  return (
    <Button variant="primary" size="large">
      Click Me
    </Button>
  );
}
```
