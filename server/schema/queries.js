import types from "./types";
export default `
  type Query {
    categories: [Category!],

    seasons(year: String): [Season!],
    
    locations(categoryId: Int): [Category!],
    
    teams(city: String, name: String, key: String, conference: String): [Team!]
  
    rankings(season: String, teams: String): [Ranking!]
  }
`;
