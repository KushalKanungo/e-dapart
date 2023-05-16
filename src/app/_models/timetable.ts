export interface TimeTable {
  id: number;
  title: string;
  description: string;
  url: string;
  image_url?: string;
  date: Date;
  semester: number;
  updated_at?: Date;
  created_at?: Date;
}
