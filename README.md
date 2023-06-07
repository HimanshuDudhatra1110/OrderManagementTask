# OrderManagementTask

After using gitclone and installing used dependencies, to run the code write 

$ npm run dev

# Used Dependencies

"axios": "^1.4.0",
"concurrently": "^8.1.0",
"cors": "^2.8.5",
"express": "^4.18.2",
"morgan": "^1.10.0",
"nodemon": "^2.0.22",
"url": "^0.11.0"

in React App

"react-router-dom": "^6.11.2",


also after installing "url" you need to create webpack.config.js in root directory and add below code 

const path = require("path");
module.exports = {
  resolve: {
    fallback: {
      url: require.resolve("url/"),
    },
  },
};
