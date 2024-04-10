import User from "../models/user.js";
import AppError from "../utils/AppError.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username });

  try {
    const registeredUser = await User.register(user, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);

      const userData = {
        _id: req.user._id,
        username: req.user.username,
        thumbnail: req.user.thumbnail,
        invites: req.user.invites,
      };
      res.status(200).json(userData);
    });
  } catch (e) {
    throw new AppError(e.message, 409);
  }
};

export const login = async (req, res) => {
  const userData = {
    _id: req.user._id,
    username: req.user.username,
    thumbnail: req.user.thumbnail,
    invites: req.user.invites,
  };
  res.status(200).json(userData);
};

export const getUser = async (req, res, next) => {
  if (req.isAuthenticated()) {
    const userData = {
      _id: req.user._id,
      username: req.user.username,
      thumbnail: req.user.thumbnail,
      invites: req.user.invites,
    };
    res.status(200).json(userData);
  } else {
    res.status(200).json(null);
  }
};

export const logout = async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    res.status(200).json({ done: true });
  });
};

export const deleteInvite = async (req, res, next) => {
  const { chatId } = req.body;

  const user = await User.findById(req.user._id);

  const newInvites = user.invites.filter((invite) => !invite.equals(chatId));

  user.invites = newInvites;

  user.save();

  res.status(200).json({ done: true });
};
