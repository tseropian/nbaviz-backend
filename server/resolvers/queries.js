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
          attributes: ["id", "name", "key", "conference"],
          where
        }
      ]
    })
  },

  teams: (parent, args, { db }, info) => {
    return db.Team.findAll();
  },

};
