import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  mainImage = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.mainImage = this.product.image || this.thumbs[0] || '';
    }
  }

  get thumbs(): string[] {
    return this.product.images ?? [];
  }

  selectImage(url: string) {
    this.mainImage = url;
  }

  like() {
    this.product.likes++;
  }

  requestDelete() {
    this.delete.emit(this.product.id);
  }

  getWhatsAppLink(): string {
    const msg = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(msg)}`;
  }

  getTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }

  getStars(rating: number): boolean[] {
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  }
}
