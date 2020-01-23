<p align="center">
<img width="300" alt="DevRadar" src="./presentation/dark-logo.png" />
</p>

<h1 align="center">DevRadar</h1>

<blockquote align="center">
:mag_right: Find devs near you and let's code!
</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LeuAlmeida/devradar?color=%2304D361">

  <a href="https://leunardo.dev">
    <img alt="Made by Léu Almeida" src="https://img.shields.io/badge/made%20by-Léu%20Almeida-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
<img alt="DevRadar Presentation" src="./presentation/presentation.png" />
</p>

## Introduction

[DevRadar](https://github.com/LeuAlmeida/devradar) is a fullstack project created to find developers near you based on your navigator location. 
* In the [backend](./backend) you can use our API Restful to manage your application.
* In the [frontend version](./web) you can create and maintenance the list of devs.
* In the [mobile app](./mobile) you can view and find for devs near you.

This project was made using Node.js to create a Restful API based on Express and are supplied with a ReactJS FrontEnd application and React Native mobile app using Expo Cli.
All the knowledges available on this project was reached at the Omnistack Week 10 provided by [@Rocketseat](https://github.com/rocketseat).

## Quick Start

First get all the requirements installed on your system.

### :electric_plug: Prerequisites

- [Node.js LTS (>= 10.x)](https://nodejs.org/)
- [Yarn (>= 1.19)](https://yarnpkg.com/) or [NPM (>= 6.9)](https://www.npmjs.com/)

### Clone the full project

Prepare your development server to run the DevRadar.

```shell
# First of all, clone the project
$ git clone https://github.com/LeuAlmeida/devradar.git

# Enter in the DevRadar folder
$ cd devradar
```

### :closed_lock_with_key: Getting started the API Restful backend

You will need to run the API using your own [MongoDB Cluster](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/).

```shell
# Enter in the backend folder
$ cd backend

# Install all dependencies using Yarn
$ yarn

# Or install dependencies using npm
$ npm install

# Copy the .env folder
$ cp .env.example .env

# Insert your environments
$ nano .env

# Output
MONGO_USERNAME=<Your Cluster Username>
MONGO_PASSWORD=<Your Cluster Password>
> Save and Exit (^+X && Y)

# Run the development server
$ yarn dev

# Case the output appears like this, is all ok
yarn run v1.19.1
$ nodemon src/index.js
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`

# The backend will run on port 3335
# https://localhost:3335
```

### :computer: Getting started the front-end web

This project is running with a [deployed API](http://67.207.87.192:3335/devs), but you can use your own.

```shell
# Enter in the web folder
$ cd web

# Install all dependencies using Yarn
$ yarn

# Or install dependencies using npm
$ npm install

# Insert your API url
$ nano ./src/services/api.js

# Output URL
baseURL: 'http://67.207.87.192:3335' # You can use your API or this url (deployed backend)

# Run the development server
$ yarn start

# The frontend will start on port 3000
# https://localhost:3000
```

### :iphone: Getting started the Mobile App

This project was created with the [Expo Cli](https://expo.io/learn).

```shell
# Enter in the app folder
$ cd mobile

# Install all dependencies using Yarn
$ yarn

# Or install dependencies using npm
$ npm install

# Insert your API url
$ nano ./src/services/api.js

# Output URL
baseURL: 'http://67.207.87.192:3335' # You can use your API or this url (deployed backend)

# Run the development server
$ yarn start

# The expo will start on port 19002
# https://localhost:19002
```

## Demo

You can try a DevRadar online demo in [https://1dois.com.br/devradar](https://1dois.com.br/devradar) (without navigator current location)


## :copyright: License

MIT License.

See [LICENSE.md](LICENSE.md) for details.

Logo design made by [Luk Trevis](https://behance.com/luktrevis)

<hr/>

<h3 align="center">
<a href="http://linkedin.com/in/leonardoalmeida99">Connect me in LinkedIn</a> | <a href="http://behance.net/almeida99">See my Behance</a> | <a href="https://leunardo.dev">Click here to go to my CV</a>
</h3>