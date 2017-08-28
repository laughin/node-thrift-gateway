module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  "apps" : [

    // First application
    {
      "name"      : "GATEWAY",
      "script"    : "./src/index.js",
      "env": {
        COMMON_VARIABLE: "true"
      },
      "env_production" : {
        "NODE_ENV": "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  "deploy" : {
    "production" : {
      "user" : "node",
      "host" : "212.83.163.1",
      "ref"  : "origin/master",
      "repo" : "git@github.com:repo.git",
      "path" : "/var/www/production",
      "post-deploy" : "npm install && pm2 reload ecosystem.config.js --env production"
    },
    "dev" : {
      "user" : "root",
      "host" : ["192.168.2.49"],
      "ref"  : "origin/master",
      "repo" : "http://code.hoolai.com/git/jinxiao12/hoolai-web-gateway.git",
      "path" : "/var/www/hoolai-web-gateway",
      "ssh_options": ["StrictHostKeyChecking=no"],
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
};
