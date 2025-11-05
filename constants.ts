import type { Movie, Category } from './types';

export const sampleMovie: Movie = {
  id: 1,
  title: "Roro Jonggrang: Legenda Candi Prambanan",
  synopsis: "Sebuah kisah epik tentang cinta, pengkhianatan, dan kutukan yang melahirkan seribu candi dalam satu malam. Restorasi digital dari film klasik yang membawa kembali keagungan legenda Jawa kuno.",
  year: 1983,
  duration: "1j 45m",
  imageUrl: "https://picsum.photos/seed/roro/400/600",
  bannerUrl: "https://picsum.photos/seed/roro-banner/1280/720",
  videoUrl: "https://www.youtube.com/embed/0s5Q7lZl2hI"
};

const movies: Omit<Movie, 'id' | 'synopsis' | 'bannerUrl' | 'duration' | 'videoUrl'>[] = [
  { title: "Sultan Agung: Tahta, Perjuangan, Cinta", year: 2018, imageUrl: "https://picsum.photos/seed/sultanagung/400/600" },
  { title: "Jejak Rasa: Rendang", year: 2022, imageUrl: "https://picsum.photos/seed/rendang/400/600" },
  { title: "Tana Toraja: Upacara Kematian", year: 2020, imageUrl: "https://picsum.photos/seed/toraja/400/600" },
  { title: "Gamelan: Gema Jiwa Jawa", year: 2019, imageUrl: "https://picsum.photos/seed/gamelan/400/600" },
  { title: "Borobudur: Mandala di Atas Awan", year: 2021, imageUrl: "https://picsum.photos/seed/borobudur/400/600" },
  { title: "Sarinah: Wajah Modern Indonesia", year: 1974, imageUrl: "https://picsum.photos/seed/sarinah/400/600" },
  { title: "Krakatoa: Letusan yang Mengubah Dunia", year: 2023, imageUrl: "https://picsum.photos/seed/krakatoa/400/600" },
  { title: "Jalur Rempah: Aroma Nusantara", year: 2022, imageUrl: "https://picsum.photos/seed/rempah/400/600" },
  { title: "Wayang Kulit: Bayangan Kehidupan", year: 2017, imageUrl: "https://picsum.photos/seed/wayang/400/600" },
  { title: "Senyap", year: 2014, imageUrl: "https://picsum.photos/seed/senyap/400/600" },
  { title: "Dr. Soetomo: Jejak Sang Pencerah", year: 2024, imageUrl: "https://picsum.photos/seed/soetomo/400/600" },
  { title: "Aruna & Lidahnya", year: 2018, imageUrl: "https://picsum.photos/seed/aruna/400/600" },
];

const movieSynopses: Record<string, string> = {
    "Sultan Agung: Tahta, Perjuangan, Cinta": "Drama kolosal yang menggambarkan perjuangan Sultan Agung dari Mataram dalam memimpin perlawanan melawan VOC, menyatukan adipati Jawa, dan pengorbanan pribadinya demi keutuhan kerajaan.",
    "Jejak Rasa: Rendang": "Dokumenter kuliner yang menelusuri asal-usul dan filosofi di balik Rendang. Dari dataran tinggi Minangkabau hingga diakui dunia, saksikan bagaimana sebuah masakan menjadi identitas bangsa.",
    "Tana Toraja: Upacara Kematian": "Menyelami Rambu Solo', salah satu upacara kematian paling unik di dunia. Film ini mengeksplorasi kepercayaan masyarakat Toraja tentang kehidupan, kematian, dan hubungan dengan para leluhur.",
    "Gamelan: Gema Jiwa Jawa": "Sebuah perjalanan audio-visual yang menenangkan ke dalam dunia Gamelan. Pelajari sejarah, kerumitan instrumen, dan perannya yang sakral dalam kebudayaan dan spiritualitas Jawa.",
    "Borobudur: Mandala di Atas Awan": "Mengungkap misteri dan keagungan Candi Borobudur. Melalui restorasi digital dan narasi ahli, film ini menjelaskan setiap relief dan makna spiritual dari mahakarya arsitektur kuno ini.",
    "Sarinah: Wajah Modern Indonesia": "Film arsip yang menyoroti peresmian Sarinah, toserba pertama di Indonesia. Sebuah simbol kebangkitan ekonomi dan kebanggaan nasional di era pasca-kemerdekaan.",
    "Krakatoa: Letusan yang Mengubah Dunia": "Dokumenter ilmiah yang merekonstruksi letusan dahsyat Gunung Krakatau pada tahun 1883. Saksikan bagaimana peristiwa alam ini mempengaruhi iklim global dan sejarah dunia.",
    "Jalur Rempah: Aroma Nusantara": "Ikuti jejak para pedagang kuno di Jalur Rempah legendaris. Dokumenter ini memetakan rute perdagangan pala, cengkeh, dan lada yang membentuk peradaban dan memicu era penjelajahan.",
    "Wayang Kulit: Bayangan Kehidupan": "Mendalami seni pertunjukan Wayang Kulit yang mempesona. Dari pembuatan wayang yang rumit hingga narasi epik Ramayana dan Mahabharata oleh seorang Dalang.",
    "Senyap": "Dokumenter investigatif yang kuat dari Joshua Oppenheimer. Seorang optometris keliling di Indonesia mengkonfrontasi para pelaku pembunuhan saudaranya dalam genosida 1965.",
    "Dr. Soetomo: Jejak Sang Pencerah": "Film biografi tentang Dr. Soetomo, pahlawan nasional dan pendiri Budi Utomo. Menyoroti perannya sebagai dokter rakyat dan pelopor pergerakan kebangkitan nasional Indonesia.",
    "Aruna & Lidahnya": "Sebuah perjalanan rasa dan persahabatan. Empat sahabat berkeliling Indonesia untuk menyelidiki kasus flu burung, sambil mencicipi kekayaan kuliner otentik dari setiap daerah yang mereka kunjungi."
};

const detailedMovies: Movie[] = movies.map((movie, index) => ({
  ...movie,
  id: index + 1,
  synopsis: movieSynopses[movie.title] || "Sinopsis mendalam tentang film ini, menjelajahi aspek budaya, sejarah, dan seni yang terkandung di dalamnya.",
  bannerUrl: `https://picsum.photos/seed/${movie.title.split(' ')[0].toLowerCase()}/1280/720`,
  duration: `1j ${Math.floor(Math.random() * 50) + 10}m`,
  videoUrl: "https://www.youtube.com/embed/0s5Q7lZl2hI"
}));

export const categories: Category[] = [
  {
    title: "Program Unggulan",
    movies: [...detailedMovies].sort(() => 0.5 - Math.random()).slice(0, 8)
  },
  {
    title: "Kerajaan Nusantara",
    movies: [...detailedMovies].filter(m => m.title.includes("Sultan") || m.title.includes("Borobudur")).concat(detailedMovies[0], detailedMovies[4]).slice(0, 6)
  },
  {
    title: "Kuliner Tradisi",
    movies: [...detailedMovies].filter(m => m.title.includes("Rendang") || m.title.includes("Aruna")).concat(detailedMovies[1], detailedMovies[7]).slice(0, 6)
  },
  {
    title: "Film Klasik & Sejarah",
    movies: [...detailedMovies].filter(m => m.year < 2015 || m.title.includes("Sarinah") || m.title.includes("Soetomo")).slice(0, 6)
  },
  {
    title: "Cerita Rakyat & Seni",
    movies: [...detailedMovies].filter(m => m.title.includes("Roro") || m.title.includes("Wayang") || m.title.includes("Gamelan")).concat(detailedMovies[0], detailedMovies[8]).slice(0, 6)
  }
];
