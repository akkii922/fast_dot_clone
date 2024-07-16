// controller.js
const FastSpeedtest = require("fast-speedtest-api");

exports.getInternetSpeed = async (req, res) => {
  try {
    let speedtest = new FastSpeedtest({
      token: process.env.TOKEN, // Ensure TOKEN is set in .env file
      verbose: false,
      timeout: 10000,
      https: true,
      urlCount: 5,
      bufferSize: 8,
      unit: FastSpeedtest.UNITS.Mbps,
    });

    speedtest
      .getSpeed()
      .then((s) => {
        res.status(200).json({ speed: Math.round(s) }); // Send JSON response
      })
      .catch((ex) => {
        res.status(400).send(ex.message); // Send error message
      });
  } catch (ex) {
    res.status(400).send(ex.message); // Catch any synchronous errors
  }
};
