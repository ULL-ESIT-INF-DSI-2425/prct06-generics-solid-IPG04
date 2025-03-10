/**
 * Interface representing the basic structure of streaming content.
 */
export interface StreamingContent {
  /**
   * The title of the streaming content.
   */
  title: string;

  /**
   * The release year of the streaming content.
   */
  year: number;
}

/**
 * Interface representing a series, extending the basic streaming content.
 */
export interface Series extends StreamingContent {
  /**
   * The number of seasons in the series.
   */
  seasson: number;

  /**
   * The number of chapters in the series.
   */
  chapters: number;
}

/**
 * Interface representing a movie, extending the basic streaming content.
 */
export interface Movies extends StreamingContent {
  /**
   * The director of the movie.
   */
  director: string;

  /**
   * The duration of the movie in minutes.
   */
  duration: number;
}

/**
 * Interface representing a documentary, extending the basic streaming content.
 */
export interface Documentary extends StreamingContent {
  /**
   * The topic of the documentary.
   */
  topic: string;

  /**
   * The duration of the documentary in minutes.
   */
  duration: number;
}