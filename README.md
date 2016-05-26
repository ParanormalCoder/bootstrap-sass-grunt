# bootstrap-sass-grunt

## A boilerplate for bootstrap-sass

Project structure:  
It mainly consists of src folder, which includes the following folders:  

style/ => includes style.scss, which references the bootstrap.  
script/ => includes script.js, where you can put your code  

Make sure you have already installed both [**npm**](https://www.npmjs.com/) and [**bower**](http://www.bower.io).

Then, run the below commands in the terminal:

1.  _bower i_ : installs the jQuery and bootstrap-sass in src/vendor folder
2.  _npm i_ : installs the grunt and its related packages

After running the above commands, you can run the below commands:

1.  _grunt_ : which compiles the src folder's content into dist folder. (developer option)
2.  _grunt dist_ : which compiles the src folder's content into dist folder. (distribution option)
