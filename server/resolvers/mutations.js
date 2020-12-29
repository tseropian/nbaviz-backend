const getNbWeeks = (dt2, dt1) => {
  let nbWeeks =(dt2.getTime() - dt1.getTime()) / 1000;
  nbWeeks /= (60 * 60 * 24);
  return Math.abs(Math.round(nbWeeks/7));
}
export default {
  addCategory: (parent, args, { db }, info) => {
    return db.Categories.create({
      name: args.categoryName,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newCat => {
      return db.Categories.findAll();
    });
  },
  addSeason: (parent, args, { db }, info) => {
    const params = {
      year: args.year,
      weekNb: getNbWeeks(new Date(args.endDate), new Date(args.startDate)),
      startDate: args.startDate,
      endDate: args.endDate,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return db.Season.create(params).then(newCat => {
      return db.Season.findAll();
    });
  },
  addRanking: (parent, args, { db }, info) => {
    return db.Ranking.create({
      season: args.season,
      team: args.team,
      date: args.date,
      conference: args.conference,
      position: args.position,
      wins: args.wins,
      losses: args.losses,
      gamesBehind: args.gamesBehind,
      psg: args.psg,
      pag: args.pag,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newRank => {
      console.log(newRank)
      return db.Ranking.findAll();
    });
  }
};
