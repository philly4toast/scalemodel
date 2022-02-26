# Full Stack Review Workshop
//will need to review editing tricks for readme

Welcome to Scale Models! 

Here is a list of things I've built. From scale models to fire arms, we will provide history and information about each item. 

CODING RELEVANCE for LEARNING
This is an app to exercise CRUD operations. Some languages/terms to be familiar with: HTML, REACT, JQUERY, AJAX, SQL, EXPRESS

HOW TO GET APP STARTED
1. CLONE from git 

-hypothesis-
2. Set up dev environment (?)
  Make sure all dependencies are installed
  Start server, and database

3. SET UP DATABASE
  1. Change root password to password matching this project (under server index.js), as well as adding the database 'ww2mod' 
  2. after logging into your mysql server, run ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'jezebel';
      Certain authentications need to happen with root. this command allows using 'root' at database to be used? 
  3. ***Check dependencies
      using 'npm list' we can see which dependencies have been installed in our project. I found that sqlite3 was SQLite version 3.28.0 when our project required ^4.0.6. 'brew upgrade sqlite3' was used to update. (Seems homebrew needed to update as well. This usually takes a while!)



q: Why does the page fail to start up? Shouldn't we be able to see our basic HTML mockup without the data(pictures/details) on the page?  
  
  Browser
        ERROR: Cannot GET /
  Console:
        GET http://localhost:3000/ 404 (Not Found)





4. NPM start (to start/watch BE server - ??)

5. NPM run react-dev ()





