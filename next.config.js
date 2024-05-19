// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(ts|tsx|js|jsx)$/],
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
