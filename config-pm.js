module.exports = {
  apps: [
    {
      name: 'instaquiz', // Your project name
      cwd: '/home/ubuntu/instaquiz', // Path to your project
      script: 'npm', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS: 'qEodj8X1VVHHLNdZ5mXclA==,72OX3XpZNmz3BouUuphO5w==,0WMxrKKBI8ejP2+XstamiQ==,vgKn0X2QS4pHJ2gN/lWyBQ==', // you can find it in your project .env file.
        API_TOKEN_SALT: 'je088Z8KHFTtUyz49jtiNA==',
        ADMIN_JWT_SECRET: 'vIsAbVam51J3xz+HHqp2xg==',
        JWT_SECRET: '8L8rsGCaOffIyVSvrKEncw==',
        NODE_ENV: 'production',
        DATABASE_HOST: 'instaquiz.cud5odsglrgj.us-east-1.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'instaquiz', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'instaquiz', // default username
        DATABASE_PASSWORD: 'instaquiz',
      },
    },
  ],
};