import Component from "../../Component.js";
import SeriesService from "./SeriesService.js";

const series = new SeriesService();
const parentElement = document.querySelector(".series-list");

series.getSeries();

const hola = new Component(parentElement, "caca", "li");
