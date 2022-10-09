# Node.js express.js MySQL JWT REST API - Basic Project Skeleton

[![Author](https://img.shields.io/badge/Author-Thilagaraja-blue.svg?style=flat-square)](https://github.com/thilakace)

## Daily run steps
* Open project directory in command prompt
* Run below cmd
* $ npm run dev
* Happy coding

## Installation steps

[Created repo in github](https://github.com/thilakace/node-js-mysql-basic) 

$ npm install dotenv --save  [Reference](https://www.npmjs.com/package/dotenv)

$ npm install express --save   [Reference](https://expressjs.com/)

## for auto load save changes
$ npm install nodemon -g

$ nodemon server.js

## for multipart/form-data
$ npm install body-parser [Reference](https://www.npmjs.com/package/body-parser)

## for mysql
$ npm install mysql

## Reference links for development

* NodeJS CRUD [Reference](https://www.itsolutionstuff.com/post/node-js-crud-with-mysql-tutorial-exampleexample.html)

* JWT generate token and verify token [Reference](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)

$ npm i jsonwebtoken

* Encrypt and decrypt password by __bcryptjs__ [Reference](https://www.npmjs.com/package/bcryptjs)

$ npm i bcryptjs

## mysql-migrations
$ npm i mysql-migrations [Reference](https://www.npmjs.com/package/mysql-migrations)

* create migration
```
$ node migration.js add migration create_table_users
$ node migration.js up
```

## host this application in apache2 ubuntu
* [Reference](https://www.cloudbooklet.com/setup-node-js-with-apache-proxy-on-ubuntu-18-04-for-production/)
* Server support PM2 [Reference](https://pm2.io/)

* pm2 startup
* pm2 save
* systemctl enable pm2-root;systemctl start pm2-root;systemctl status pm2-root
[Youtube video](https://www.youtube.com/watch?v=M4Y45g8bmYg)