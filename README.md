# generate-and-serve

need typescript to generate javascript, technically typescript tsc binary is a dev dependency, so npm install should not install it, use an [alternative build pack](https://github.com/heroku/heroku-buildpack-nodejs/compare/master...andresvia:master) on heroku to run this, check package.json, etc.

also .js files are generated, so they should be ignored and never! commited

![heroku](https://raw.githubusercontent.com/andresvia/generate-and-serve/master/buildpack.PNG)
