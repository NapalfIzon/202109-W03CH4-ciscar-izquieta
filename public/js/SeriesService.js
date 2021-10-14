class SeriesService {
  apiUrl = "http://localhost:3001/series";

  async getSeries() {
    const response = await fetch(this.apiUrl);
    const series = await response.json();
    return series;
  }

  async deleteSerie(id) {
    const response = await fetch(`${this.urlAPI}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("It's not possible to delete the selected serie");
  }
}

export default SeriesService;
