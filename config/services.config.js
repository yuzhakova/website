const common = {
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: "1G",
  env: {
    NODE_ENV: "development",
  },
  env_production: {
    NODE_ENV: "production",
  },
};

module.exports = {
  apps: [
    {
      ...common,
      name: "api",
      cwd: "./server",
      script: "./src/server.js",
    },

    {
      ...common,
      name: "client",
      cwd: "./client",
      env: {
        ...common.env,
        BROWSER: "none",
      },
      autorestart: false,
      script: "./node_modules/react-scripts/scripts/start.js",
    },
  ],
};
