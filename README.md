# Setup

Install nodejs https://nodejs.org/en/download/
Add to environment variables C:\Program Files\nodejs\
open Command Prompt
Install Angular CLI 'npm install -g @angular/cli'

Install 
Using Visual Studio Code
Open Terminal
Install npm dependencies by running command 'npm install'


# SmartAutoGroup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. I use `ng serve -o` to automatically launch the browser to the right page.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. I also add a build optimizer. So, my first step to build any new version is `ng build --prod --build-optimizer`

## Firebase Setup

If you're starting from scratch and have never used Firebase, make sure to install the tools globally. `npm install -g firebase-tools`. You would then need to log in with `firebase login`, you'll be prompted to enter your password the first time. For each new project you need to create in the Firebase console first, then type `firebase init` and select hosting. The public directory needs to be specified as 'dist/THE_NAME_OF_THE_PROJECT' and also do not overwrite index.html. 

## Firebase Deploy

After building a production optimized version, the second and final step is to run `firebase deploy`. This two step process will need to be repeated with update to the website. 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
