export interface Contest {
  id: number;
  title: string;
  description: string;
  url: string;
  image_url?: string;
  status: 'live' | 'expired' | 'upcoming';
  date: Date;
  updated_at?: Date;
  created_at?: Date;
}
