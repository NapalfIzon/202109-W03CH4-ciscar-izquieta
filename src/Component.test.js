import Component from "./Component.js";

describe("Given a Component class", () => {
  describe("When it receives a div container, a 'invented' class and a 'p' tag", () => {
    test("Then it should render a p element with a 'invented' class inside the div container", () => {
      // Arrange
      const container = document.createElement("div");
      const className = "invented";
      const htmlTag = "p";

      // Act
      new Component(container, className, htmlTag);
      console.log(container.querySelector("p.invented"));
      const pCreated = container.querySelector("p.invented");

      // Assert
      expect(pCreated).not.toBeNull();
      // Espero que este div que he creado tenga un elemento que sea un p con clase test
    });
  });
});
