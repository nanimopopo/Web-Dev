import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  changeImage(newUrl: string): void {
    this.product.image = newUrl;
  }

  getStars(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  }


  getWhatsAppLink(product: any): string {
    const message = `Check out this product: ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  getTelegramLink(product: any): string {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}
