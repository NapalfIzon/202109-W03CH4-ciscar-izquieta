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

  describe("When we call an API to delete the given id", () => {
    test("Then we should substract the id from the object", () => {
      const expected = 4;

      const series = new SeriesService();
      const newSeries = series.deleteSerie(1);

      const result = newSeries.length;

      return expect(result).toEqual(expected);
    });
  });
});

// crear obj, metode deleteserie amb parametre id,
// a.series.length
