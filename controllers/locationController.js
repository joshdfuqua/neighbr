const {
  createLocation,
  getAllLocations,
  getLocation,
  getLocationById,
  getOrCreateLocation,
} = require('../db/services/locationService.js');

module.exports.addLocation = async (req, res) => {
  await getAllRuns((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.getOrAddLocation = (req, res) => {
  getOrCreateLocation(req.location, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.getLocations = (req, res) => {
  getAllLocations((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};
