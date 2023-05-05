export interface ResearchPaper {
  id: number;
  title: string;
  description: string;
  publish_year: number;
  url: string;
  tags?: string[];
  students: string[];
  mentors: string[];
}
