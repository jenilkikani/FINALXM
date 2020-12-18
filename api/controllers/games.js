const Game = require('../models/game');

exports.index = async (req, res, next) => {
  try {
    const games = await Game.find();

    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const gam = await Game.findById(req.params.id);

    res.status(200).json(gam);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, publisher, rating } = req.body;

    const gam = await Game.create({
      title: title,
      publisher: publisher,
      rating: rating
    });
    res.status(200).json({ message: "Game was created!", game: gam});
  }
    catch(error) {
      next(error);
    }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, title, publisher, rating } = req.body;
    
    const qt = await Game.findOneAndUpdate({ _id: _id }, {
      title,
      publisher,
      rating
    });

    res.status(200).json({ message: "Game was updated successfully", game: qt });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;

    await Game.findOneAndDelete({ _id: _id});

    res.status(200).json({ message: "Game is deleted successfully."});
  }
  catch(error)
  {
    next(error);
  }
};