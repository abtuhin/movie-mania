const withTM = require('next-transpile-modules')(['flowbite-react']);

module.exports = withTM({
  webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }

    return config;
  },
  future: {
    webpack5: true,
  },
  // Enable CSS modules
  cssModules: true,
  // Enable PostCSS for Tailwind CSS
  postcssLoaderOptions: {
    postcssOptions: {
      ident: 'postcss',
      plugins: [
        'postcss-flexbugs-fixes',
        'postcss-preset-env',
        {
          // Tailwind CSS configuration
          // See https://tailwindcss.com/docs
          // for more details
          tailwindcss: {},
        },
      ],
    },
  },
});
