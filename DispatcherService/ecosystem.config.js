module.exports = {
    apps : [{
      name: "DispatcherService",
      script: "./app.js",
      instances  : 4,
      exec_mode  : "cluster",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }