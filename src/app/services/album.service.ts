import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';


@Injectable({ providedIn: 'root' })
export class AlbumService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  private readonly albumsSubject = new BehaviorSubject<Album[]>([]);
  readonly albums$ = this.albumsSubject.asObservable();

  private loaded = false;

  private readonly photosStore = new Map<number, BehaviorSubject<Photo[]>>();
  private readonly photosLoaded = new Set<number>();

  private getPhotosSubject(albumId: number): BehaviorSubject<Photo[]> {
    let subj = this.photosStore.get(albumId);
    if (!subj) {
      subj = new BehaviorSubject<Photo[]>([]);
      this.photosStore.set(albumId, subj);
    }
    return subj;
  }

  constructor(private http: HttpClient) {}

  loadAlbums(): Observable<Album[]> {
    if (this.loaded) return this.albums$;

    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap((albums) => {
        this.loaded = true;
        this.albumsSubject.next(albums);
      }),
      map(() => this.albumsSubject.value),
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  loadAlbumPhotos(albumId: number): Observable<Photo[]> {
    const subj = this.getPhotosSubject(albumId);

    if (this.photosLoaded.has(albumId)) {
      return subj.asObservable();
    }

    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`).pipe(
      tap((photos) => {
        this.photosLoaded.add(albumId);
        subj.next(photos);
      }),
      map(() => subj.value),
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap((updated) => {
        const current = this.albumsSubject.value;
        const next = current.map((a) => (a.id === updated.id ? { ...a, title: updated.title } : a));
        this.albumsSubject.next(next);
      }),
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        const next = this.albumsSubject.value.filter((a) => a.id !== id);
        this.albumsSubject.next(next);
      }),
    );
  }
}
