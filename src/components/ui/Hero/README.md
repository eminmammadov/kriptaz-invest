# Hero Component

Modern ve responsive Hero komponenti, video arka planı ile birlikte çalışır.

## Özellikler

- **Video Background**: Arka planda otomatik oynayan video (full ekran)
- **Responsive Design**: Desktop ve mobile görünümleri için optimize edilmiş
- **SVG Overlay**: Video üzerinde responsive SVG overlay
- **Single Description**: Tek paragraf metin
- **Portfolio Button**: "Portfolio" butonu
- **Partner Logos Slider**: Alt kısımda otomatik kayan partner logoları
- **Accessibility**: Erişilebilirlik standartlarına uygun

## Props

```typescript
interface HeroProps {
  className?: string;
  videoSrc?: string;
  videoOverlayImage?: string;
  title?: string;
  description?: string;
  onVideoLoad?: () => void;
  onVideoError?: (error: Event) => void;
}
```

## Kullanım

```tsx
import { Hero } from '@/components/ui/Hero';

<Hero
  videoSrc="/videos/hero-video.mp4"
  videoOverlayImage="/images/video-filter.svg"
  title="Investors established crypto investment fund"
  description="Founded with distinguished investors, our regulated fund platform applies disciplined DDGO principles to allocate weekly savings into crypto assets, ensuring transparent, reliable, and sustainable growth."
  onVideoLoad={() => console.log('Video loaded')}
  onVideoError={(error) => console.error('Video error:', error)}
/>
```

## Responsive Breakpoints

- **Desktop**: 1200px ve üzeri
- **Tablet**: 992px - 1199px
- **Mobile**: 768px - 991px
- **Small Mobile**: 580px - 767px
- **Extra Small**: 395px - 579px

## CSS Classes

Ana CSS sınıfları:
- `.heroSection`: Ana container
- `.videoSection`: Video container'ı (full ekran)
- `.videoBackground`: Arka plan videosu
- `.videoOverlayImage`: SVG overlay
- `.contentContainer`: İçerik container'ı
- `.mainContent`: Ana içerik alanı
- `.heroTitle`: Başlık
- `.descriptionContainer`: Açıklama container'ı
- `.descriptionText`: Açıklama metni
- `.buttonContainer`: Buton container'ı
- `.portfolioButton`: Portfolio butonu
- `.logosSlider`: Partner logoları slider'ı

## Portfolio Button Özellikleri

- **Küçük Boyut**: Tüm ekran boyutlarında tutarlı küçük boyut
- **Beyaz Arka Plan**: Siyah metin ile
- **Hover Effect**: Yukarı hareket (`translateY(-1px)`) ve gölge
- **Responsive**: Tüm ekran boyutlarında aynı boyut
- **Accessibility**: Focus states ve keyboard navigation

## Logo Slider Özellikleri

- **Otomatik Kayma**: 30 saniyede bir tam döngü
- **Hover Pause**: Mouse üzerine gelince durur
- **Seamless Loop**: Kesintisiz döngü için duplicate logolar
- **Responsive**: Farklı ekran boyutları için optimize

## Video Overlay

- **Siyah Filter**: Video üzerinde koyu siyah overlay (rgba(0, 0, 0, 0.6))
- **Text Contrast**: Yazıların daha iyi okunabilirliği için
- **Responsive**: Tüm ekran boyutlarında tutarlı

## Accessibility

- ARIA labels ve roles
- Keyboard navigation desteği
- Focus states
- High contrast mode desteği
- Reduced motion desteği (logo slider ve buton için)
