import SeriesService from "./SeriesService.js";

describe("Given a SeriesService class", () => {
  describe("When we call an API to obtain the response", () => {
    test("We should receive an object", () => {
      const expected = {};

      const series = new SeriesService();
      const result = series.getSeries();

      return expect(typeof result).toEqual(typeof expected);
    });
  });
});
