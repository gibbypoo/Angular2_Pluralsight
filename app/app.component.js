"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import = using in C# and defines where to find this member
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
//A class becomes a component when we give it component metadata.
//Angular needs this metadata to understand how to instantiate that component,
//construct the view and interact with the component. We define a component's 
//metadata with the angular component function. In TS, we attach that function
//to the class as a decorator. A decorator is a function that adds metadata to
//a class, memebers or method arguments. A decorator is prefixed with an '@' sign
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Acme Product Management";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        //parantheses) and takes in an object with properties (thus the brackets)
        selector: 'pm-app',
        //component always has a template, defining the view layout
        template: "\n        <div>\n            <nav class='navbar navbar-default'>\n                <div class='container-fluid'>\n                    <a class ='navbar-brand'>{{pageTitle}}</a>\n                    <ul class = 'nav navbar-nav'>\n                        <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                        <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                    </ul>\n                </div>\n            </nav>\n            <div class='container'>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    ",
        providers: [product_service_1.ProductService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//////////////////////////////
//Component Checklist
//
//1. Create a class for the component
//2. Decorator for component metadata, including HTML for component's template
//3. Import anything we need from any third party library for modules or from Angular itself
//1. Class:
//      Clear name, append component to the name, E.g., AppComponent
//      Export keyword on class signature
//      Data in properties with appropriate data type or default value, camelCase
//      Logic in methods of class
//2. Metadata:
//      Component Decorator, prefix with "@", suffix with ()
//      Selector property to be used as directive name in HTML, not needed if not used in HTML
//      Template: View's html, or use templateUrl and pass in a path
//3. Import:
//      Defines where to find the members that this component needs from any external modules
//      Import keyword, member name is case-sensitive
//      Module path: enclose in quotes, E.g., '@angular/core'
//      
//# sourceMappingURL=app.component.js.map