export interface Movie {
  id: number;
  title: string;
  synopsis: string;
  year: number;
  imageUrl: string;
  bannerUrl: string;
  videoUrl?: string;
  duration: string;
}

export interface Category {
  title: string;
  movies: Movie[];
}

export type Page = 'home' | 'login' | 'detail' | 'tentang' | 'series' | 'berlangganan';