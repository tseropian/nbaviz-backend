const { buildSeasonHighLow } = require('./highLow');

export default {
  teams: (parent, args, { db }, info) => {
    const { Op } = db.Sequelize;
    const { year } = args;
    const where = {
      [Op.and]: [
        {
          startSeason: { [Op.lte]: year },
        },
        {
          [Op.or]: [
            {
              endSeason: { [Op.gte]: year },
            },
            {
              endSeason: 0,
            },
          ],
        },
      ],
    };

    if (args.conference) {
      where.conference = args.conference;
    }

    return db.Team.findAll({ where });
  },
  seasons: (parent, args, { db }, info) => {
    const where = args.year ? { year: args.year } : {};

    return db.Season.findAll({ where });
  },
  rankings: async (parent, args, { db }, info) => {
    const { Op } = db.Sequelize;

    const { season, teams } = args;
    const listTeams = teams.split(',');
    const currentSeason = await db.Season.findOne({ where: { year: season } });
    const allRankings = await db.Ranking.findAll(
      {
        where: {
          [Op.and]: [
            {
              date: { $gte: currentSeason.startDate },
            },
            {
              date: { $lte: currentSeason.endDate },
            },
            {
              team: { $in: listTeams },

            },
          ],
        },
        order: [['date', 'ASC']],
      },
    );
    return allRankings;
  },
  seasonRankings: async (parent, args, { db }, info) => {
    const { Op } = db.Sequelize;

    const { teams } = args;
    const listTeams = teams.split(',');
    const allSeasons = await db.Season.findAll();
    const allSeasonsEndDates = allSeasons.map((s) => s.endDate);

    const allRankings = await db.Ranking.findAll(
      {
        where: {
          [Op.and]: [
            {
              date: { $in: allSeasonsEndDates },
            },
            {
              team: { $in: listTeams },

            },
          ],
        },
        order: [['date', 'ASC']],
      },
    );
    return allRankings;
  },
  seasonHighLow: async (parent, args, { db }, info) => {
    const allSeasons = await db.Season.findAll({});
    const result = allSeasons.map(
      (season) => buildSeasonHighLow(season, db),
    );
    return result;
  },
};
