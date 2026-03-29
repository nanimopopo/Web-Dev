import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
  albumId$!: Observable<number>;
  photos$!: Observable<Photo[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
  ) {
    this.albumId$ = this.route.paramMap.pipe(map((params) => Number(params.get('id'))));

    this.photos$ = this.albumId$.pipe(switchMap((id) => this.albumService.loadAlbumPhotos(id)));
  }

  back(albumId: number): void {
    this.router.navigate(['/albums', albumId]);
  }
}
