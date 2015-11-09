import angular from 'angular';

// Controllers
import MyController from './controllers/mycontroller';

// Creating a Module
angular.module('like', [])

// Some Controllers
.controller('MyController', MyController);