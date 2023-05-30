export interface IAlbum {
  id: number;
  cover_art_thumbnail_url: string;
  artist: IArtist;

  item: any;
}

export interface IArtist {
  name: string;
}
