"use strict";
var router_1 = require('@angular/router');
var app_about_1 = require('./app.about');
var app_home_1 = require('./app.home');
var appRoutes = [
    { path: 'home', component: app_home_1.MyHomeComponent },
    { path: 'about', component: app_about_1.AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map