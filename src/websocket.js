/* eslint-disable max-len */
const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebSocket = (server) => {
  io = socketio(server);

  io.on('connection', (socket) => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    });
  });
};

exports.findConnections = (coordinates, techs) => connections.filter((connection) => calculateDistance(coordinates, connections.coordinates) < 10 && connection.techs.some((item) => techs.includes(item)));

exports.sendMessage = (to, message, data) => {
  to.forEach((connection) => {
    io.to(connection.id).emit(message, data);
  });
};
