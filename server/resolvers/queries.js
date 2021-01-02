export default {
  teams: (parent, args, { db }, info) => {
    const where = args.conference ? { conference: args.conference } : {};
    return db.Team.findAll({ where });
  },
  seasons: (parent, args, { db }, info) => {
    const where = args.year ? { year: args.year } : {};

    return db.Season.findAll({ where });
  },
  rankings: async (parent, args, { db }, info) => {
    const { season, teams } = args;
    console.log(teams);
    const listTeams = teams.split(',');
    const currentSeason = await db.Season.findOne({ where: { year: season } });
    console.log(listTeams);
    const allRankings = await db.Ranking.findAll(
      {
        where: {
          date: { $gte: currentSeason.startDate },
          date: { $lte: currentSeason.endDate },
          team: { $in: listTeams },
        },
        order: [['date', 'DESC']],
      },
    );
    // console.log(allRankings);

    return allRankings;
  },

};
