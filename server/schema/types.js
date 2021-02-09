export default `
  type Category {
    id: ID
    name: String
  },
  type Team {
    id: ID,
    city: String,
    colour: String,
    name: String,
    key: String,
    conference: String,
    startSeason: Int,
    endSeason: Int,
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
  type Season {
    year: Int,
    startDate: String,
    endDate: String,
    weekNb: Int,

  },
  type HighLow {
    year: Int,
    highDelta: String,
    highTeams: [String],
    lowDelta: String,
    lowTeams: [String],

  },
`;
