# bootstrap-sass-grunt

## A boilerplate for bootstrap-sass

Project structure:  
It mainly consists of src folder, which includes the following folders:  

1. _style/_ : includes style.scss, which references the bootstrap.  
2. _script/_ : includes script.js, where you can put your code  

Make sure you have already installed both [**npm**](https://www.npmjs.com/) and [**bower**](http://www.bower.io).

Then, run the below commands in the terminal:

1.  _bower i_ : installs the jQuery and bootstrap-sass in src/vendor folder
2.  _npm i_ : installs the grunt and its related packages

After running the above commands, you can run the below commands:

1.  _grunt_ : compiles the src folder's content into dist folder. (developer option)
2.  _grunt dist_ :compiles the src folder's content into dist folder. (distribution option)
