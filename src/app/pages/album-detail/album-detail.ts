import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {
  private albumSubject = new BehaviorSubject<Album | null>(null);
  album$: Observable<Album | null> = this.albumSubject.asObservable();

  error = '';
  editedTitle = '';
  saving = false;

  private albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
  ) {
    this.route.paramMap
      .pipe(
        map((params) => Number(params.get('id'))),
        switchMap((id) => {
          this.albumId = id;
          this.error = '';
          return this.albumService.getAlbum(id);
        }),
        catchError((err) => {
          console.error('getAlbum error:', err);
          this.error = 'Failed to load album.';
          return of(null);
        }),
      )
      .subscribe((album) => {
        this.albumSubject.next(album);
        this.editedTitle = album?.title ?? '';
      });
  }

  save(current: Album): void {
    this.saving = true;
    this.error = '';

    const updated: Album = { ...current, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (resp) => {
        this.albumSubject.next(resp);
        this.editedTitle = resp.title;
        this.saving = false;
      },
      error: (err) => {
        console.error('updateAlbum error:', err);
        this.error = 'Save failed.';
        this.saving = false;
      },
    });
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}
