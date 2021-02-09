const buildSeasonHighLow = async (season, db) => {
  const { Op } = db.Sequelize;

  const seasonTeams = await db.Team.findAll(
    {
      where: {
        [Op.and]: [
          {
            startSeason: { [Op.lte]: season.dataValues.year },
          },
          {
            [Op.or]: [
              {
                endSeason: { [Op.gte]: season.dataValues.year },
              },
              {
                endSeason: 0,
              },
            ],
          },
        ],
      },
    },
  );

  const allRankings = await db.Ranking.findAll(
    {
      where: {
        [Op.and]: [
          {
            date: { $gte: season.startDate },
          },
          {
            date: { $lte: season.endDate },
          },
        ],
      },
      order: [['date', 'ASC']],
    },
  );

  const highLows = [];
  for (let i = 0; i < seasonTeams.length; i += 1) {
    const teamRankings = allRankings.filter(
      (r) => r.team === seasonTeams[i].dataValues.key,
    );

    const teamHighLow = {
      team: seasonTeams[i].dataValues.key,
      high: { position: seasonTeams.length },
      low: { position: 0 },
    };

    teamRankings.forEach((r) => {
      const { position, date } = r.dataValues;

      if (r.dataValues.position <= teamHighLow.high.position) {
        teamHighLow.high = {
          position, date,
        };
      }
      if (r.dataValues.position >= teamHighLow.low.position) {
        teamHighLow.low = {
          position, date,
        };
      }
    });
    highLows.push(teamHighLow);
  }

  const highLow = {
    year: season.dataValues.year,
    highDelta: 0,
    highTeams: [],
    lowDelta: 0,
    lowTeams: [],
  };
    // eslint-disable-next-line no-restricted-syntax
  for (const hl of highLows) {
    const delta = hl.low.position - hl.high.position;
    const dateHigh = new Date(hl.high.date);
    const dateLow = new Date(hl.low.date);

    if (delta >= highLow.highDelta && dateHigh > dateLow) {
      highLow.highDelta = delta;
      highLow.highTeams.push(hl.team);
    }

    if (delta >= highLow.lowDelta && dateHigh < dateLow) {
      highLow.lowDelta = delta;
      highLow.lowTeams.push(hl.team);
    }
  }
  return highLow;
};

module.exports = { buildSeasonHighLow };
