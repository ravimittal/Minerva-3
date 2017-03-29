# Minerva-3

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


Step1: Go to the directory where you want to setup eg(var/www/html).

Step2: Upload files of SSH in C:\Users\csolution\.ssh and run following commands

eval $(ssh-agent -s)
ssh-add ~/.ssh/minervassh

Step4: Then git clone to repo
      
      $ git clone < repo url >
      
Step5: Create Database on your server 


      eg: minerva-3 (DB NAME)
      
Step6 Install nodejs and npm (Ignore if already installed)

      $ sudo apt-get update
      $ sudo apt-get install nodejs
      $ sudo apt-get install npm
      $ npm install -g grunt-cli bower yo generator-karma generator-angular
      
Step7:Install dependency for Yeo-man :


      $ cd ..  (root folder)
      $ npm install
      $ bower install

Step8: To start Server

      $ grunt serve

