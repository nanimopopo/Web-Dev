import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Велосипед Petava BMX',
      description: 'Велосипед Petava BMX-3 PT-216S 2023 19.5 дюймов черный',
      price: 68000,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p4f/42747506.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p40/p4c/42747511.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p4b/42747514.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/p4b/42747517.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/velosiped-petava-bmx-3-pt-216s-20-djuim-2023-19-5-djuimov-chernyi-112591119/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 2,
      name: 'Ластик)',
      description: 'Ластик Maped Technic Duo 511710, 1 шт',
      price: 10,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h74/86018938077214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/ha5/86587902820382.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 3,
      name: 'Кофемашина Delonghi',
      description: 'Кофемашина Delonghi ECAM220.50.BG бежевый',
      price: 229000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/pc9/90352567.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pda/pc6/90352572.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam220-50-bg-bezhevyi-145399057/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 4,
      name: 'Мышь Logitech G102 Lightsync черный',
      description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой.',
      price: 6870,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/p9b/105790332.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=353220100',
    },
    {
      id: 5,
      name: 'Крепление для монитора NB F80 черный',
      description: 'Крепление для мониторов NB F80 — оптимальное решение для организации рабочего пространства, обеспечивающее максимальный комфорт и эргономику при работе за компьютером.',
      price: 7746,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/hf5/81272594268190.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h37/hf5/81272594268190.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h21/hae/81272594300958.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/h47/81272594333726.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=353220100',
    },
    {
      id: 6,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      price: 209540,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=353220100',
    },
    {
      id: 7,
      name: 'Wi-Fi роутер TP-LINK TD-W8961N',
      description: 'Беспроводной маршрутизатор серии N со встроенным модемом ADSL2+ модели TD-W8961N объединяет в одном корпусе ADSL2+ модем, маршрутизатор NAT, 4-портовый коммутатор и беспроводную точку доступа Wi-Fi стандарта 802.11n со скоростью передачи данных до 300 Мбит/с внутри сети.',
      price: 11370,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p1e/104875831.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p1e/104875831.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h57/63760532733982.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=353220100',
    },
    {
      id: 8,
      name: 'Распашной шкаф Aisha Pro 1103, 120x190х45 см, белый',
      description: 'Это бюджетный, но при этом функциональный и современный шкаф, который идеально подойдет для небольшой спальни, прихожей или детской комнаты. Его лаконичный серый дизайн и продуманная организация пространства помогут вам поддерживать идеальный порядок и добавят уюта интерьеру.\n' +
        '\n',
      price: 62900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/pd8/83121137.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4f/pd8/83121137.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/h13/85764655841310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h7b/85764655906846.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-aisha-pro-1103-120x190h45-sm-belyi-106553991/?c=353220100',
    },
    {
      id: 9,
      name: 'Полка AAA Компакт ПК-Д4, 81х15x27 см, белый',
      description: 'Полка подвесная подойдёт в любой интерьер, отличного качества,в комплекте все необходимое для сборки.',
      price: 2250,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h0e/86932684308510.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h0e/86932684308510.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/hc8/86932684374046.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/polka-aaa-kompakt-pk-d4-81h15x27-sm-belyi-110810653/?c=353220100',
    },
    {
      id: 10,
      name: 'Стул QAZ, 95x55x55 см, бежевый, золотой 1 шт.',
      description: 'Элегантный и удобный стул — отличный выбор для современного интерьера. Благодаря высокой эргономичной спинке и мягкому сиденью с качественной обивкой, он обеспечивает максимальный комфорт. Универсальный цвет легко впишется как в классическую, так и в минималистичную обстановку. Прочные ножки гарантируют стабильность и долговечность. Подходит для кухни, столовой или гостиной.',
      price: 10470,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hd2/64515775430686.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h05/hd2/64515775430686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h38/h96/64515781787678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/ha4/64515787816990.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/stul-qaz-95x55x55-sm-bezhevyi-zolotoi-1-sht--106633022/?c=353220100',
    },
  ];
}
