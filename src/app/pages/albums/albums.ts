import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
  albums$: Observable<Album[]>;

  constructor(
    private albumService: AlbumService,
    private router: Router,
  ) {
    this.albums$ = this.albumService.loadAlbums();
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, e: MouseEvent): void {
    e.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe();
  }
}
