/* eslint-disable no-undef */

const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async store(req, res) {
    const {
      github_username, techs, latitude, longitude,
    } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`,
      );

      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }
    return res.json(dev);
  },

  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async delete(req, res) {
    const { id } = req.params;

    const dev = await Dev.findOne({ _id: id });

    if (!dev) {
      return res.json({ error: 'Developer does not found.' });
    }

    dev.remove();

    const devs = await Dev.find();

    return res.json(devs);
  },

  async update(req, res) {
    const { id } = req.params;
    const { techs, github_username, ...rest } = req.body;

    const dev = await Dev.findOne({ _id: id });

    let techsArray;

    if (techs) {
      techsArray = parseStringAsArray(techs);
    }


    let name;
    let avatar_url;
    let bio;
    let updatedDev;

    if (github_username !== dev.github_username) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`,
      );

      name = response.data.name;
      avatar_url = response.data.avatar_url;
      bio = response.data.bio;

      updatedDev = await Dev.updateOne(dev, {
        techs: techs ? techsArray : dev.techs,
        github_username,
        name,
        avatar_url,
        bio,
        ...rest,
      });
    }

    return res.json({
      modified: updatedDev ? updatedDev.nModified : null,
      ok: updatedDev ? updatedDev.ok : null,
    });
  },
};
