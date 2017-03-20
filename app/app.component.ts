//import = using in C# and defines where to find this member
import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

//A class becomes a component when we give it component metadata.
//Angular needs this metadata to understand how to instantiate that component,
//construct the view and interact with the component. We define a component's 
//metadata with the angular component function. In TS, we attach that function
//to the class as a decorator. A decorator is a function that adds metadata to
//a class, memebers or method arguments. A decorator is prefixed with an '@' sign


@Component({//@Component decorator to identify the class as a component. It's a function (thus the
            //parantheses) and takes in an object with properties (thus the brackets)
    selector: 'pm-app',//directive name used in HTML
    //component always has a template, defining the view layout
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class ='navbar-brand'>{{pageTitle}}</a>
                    <ul class = 'nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Home</a></li>
                        <li><a [routerLink]="['/products']">Product List</a></li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    providers: [ ProductService ]
})
export class AppComponent { 
    pageTitle: string = "Acme Product Management"
}

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

