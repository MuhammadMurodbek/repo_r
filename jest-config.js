module.exports = {
  bail: 1,
  verbose: true,
  transform: {
    "\\.css$": "jest-css-modules-transform",
    "^.+\\.tsx?$": "babel-jest",
  },
};
