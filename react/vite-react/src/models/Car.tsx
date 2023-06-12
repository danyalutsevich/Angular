interface ICar {
  id: number;
  model: string;
  year: number;
  price: number;
}
const cars: ICar[] = [
  { id: 1, model: "audi", year: 2020, price: 120000 },
  { id: 2, model: "opel", year: 2021, price: 120388 },
  { id: 3, model: "bmw", year: 2022, price: 40645 },
];

export default cars;
