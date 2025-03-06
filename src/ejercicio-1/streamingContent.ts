export interface StreamingContent {
  title: string;
  year: number;
}

export interface Series extends StreamingContent {
  seasson: number;
  chapters: number;
}

export interface Movies extends StreamingContent {
  director: string;
  duration: number;
}

export interface Documentary extends StreamingContent {
  topic: string;
  duration: number;
}