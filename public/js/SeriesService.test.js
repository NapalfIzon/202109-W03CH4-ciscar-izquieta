import SeriesService from "./SeriesService.js";

describe("Given a SeriesService class", () => {
  describe("When we call an API to obtain the response", () => {
    test("Then we should receive an object", () => {
      const expected = {};

      const series = new SeriesService();
      const result = series.getSeries();

      return expect(typeof result).toEqual(typeof expected);
    });
  });

  async deleteSerie(id) {
    const response = await fetch(`${this.urlAPI}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("It's not possible to delete the selected serie");
  }

  
  describe("When we call an API to delete the given id", () => {
    test("Then we should substract the id from the object", () => {
      const object = {
      "id": 1,
      "name": "The Sopranos",
      "creator": "David Chase",
      };

      const series = new SeriesService();
      const result = series.deleteSerie(id);

      return expect(typeof result).toEqual(typeof expected);
    });
  });
});

crear obj, metode deleteserie amb parametre id,
a.series.length 
