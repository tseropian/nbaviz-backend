import types from './types';

export default `
  type Mutation {
    addCategory(categoryName: String): [Category!]
    
    addRanking(
      team: String,
      season: Int,    
      date: String,
      conference: String,
      position: Int,
      wins: Int,
      losses: Int,
      gamesBehind: Float,
      psg: Float,
      pag: Float
      ): [Ranking!]

    addSeason(
        year: Int,
        weekNb: Int,    
        startDate: String,
        endDate: String
        ): [Season!]
  }
`;
