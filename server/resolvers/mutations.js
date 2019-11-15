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
  addRanking: (parent, args, { db }, info) => {
    return db.Ranking.create({
      season: args.season,
      team: args.team,
      date: args.date,
      conference: args.conference,
      position: args.position,
      wins: args.wins,
      losses: args.losses,
      gamesBehind: args.gb,
      psg: args.psg,
      pag: args.pag,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newRank => {
      return db.Ranking.findAll();
    });
  }
};
