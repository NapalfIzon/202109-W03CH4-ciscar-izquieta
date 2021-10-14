import Component from "./Component.js";

class Serie extends Component {
  series;

  constructor(
    parentElement,
    { id, name: nameSerie, creator, year, poster, watched, score, emmies }
  ) {
    super(parentElement, "serie", "li");

    this.series = {
      id,
      nameSerie,
      creator,
      year,
      poster,
      watched,
      score,
      emmies,
    };

    this.generateHTML();
  }

  generateHTML() {
    const html = `<li class="serie">
                <img
                  class="serie__poster"
                  src="${poster}"
                  alt="${nameSerie} ${poster}"
                />
                <h4 class="serie__title">${nameSerie}</h4>
                <p class="serie__info">${creator} (${year})</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>`;
    this.element.innerHTML = html;
  }
}

export default Serie;
