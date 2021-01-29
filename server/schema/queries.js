// import types from './types';

export default `
  type Query {

    seasons(year: String): [Season!],
        
    teams(
      city: String, 
      name: String, 
      key: String,
      colour: String, 
      conference: String, 
      year: Int
    ): [Team!]
  
    rankings(season: String, teams: String): [Ranking!]
  }
`;
