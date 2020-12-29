export default {
  categories: (parent, args, { db }, info) => {
    return db.Categories.findAll();
  },

  locations: (parent, args, { db }, info) => {
    const where = args.categoryId ? { id: args.categoryId } : {};
    return db.Locations.findAll({
      include: [
        {
          model: db.Categories,
          attributes: ["id", "name", "key", "conference", "colour"],
          where
        }
      ]
    })
  },

  teams: (parent, args, { db }, info) => {
    const where = args.conference ? { conference: args.conference } : {};
    return db.Team.findAll({where});
  },
  seasons: (parent, args, { db }, info) => {
    const where = args.year ? { year: args.year } : {};

    return db.Season.findAll({where});
  },
  rankings: async (parent, args, { db }, info) => {

    const {season, teams} = args;
console.log(teams)
    const currentSeason = await db.Season.findOne({where: {year: season}})

    const where = {
      date: { $gte: currentSeason.startDate},
      date: { $lte: currentSeason.endDate},
      team: teams
    }


    const allRankings = await db.Ranking.findAll({where})
    return allRankings;
  },


};
