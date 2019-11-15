export default `
  type Category {
    id: ID
    name: String
  },
  type Team {
    id: ID,
    city: String,
    name: String,
    key: String,
    conference: String
  },
  type Ranking {
    id: ID,
    season: Int,
    date: String,
    conference: String,
    team: String,
    position: Int,
    wins: Int,
    losses: Int,
    gamesBehind: Int,
    psg: Float,
    pag: Float
  },
`;
