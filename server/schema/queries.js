import types from "./types";
export default `
  type Query {
    categories: [Category!],
    seasons: [Season!],
    locations(categoryId: Int): [Category!],
    teams(city: String, name: String, key: String, conference: String): [Team!]
  }
`;
