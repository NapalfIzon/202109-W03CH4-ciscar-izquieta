class SeriesService {
  apiUrl = "http://localhost:3001/series";

  async getSeries() {
    const response = await fetch(this.apiUrl);
    const series = await response.json();
    console.log(series);
  }
}

export default SeriesService;
