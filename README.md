# ProductionAngular

Document all best practices in Angular.


Commands

1. Set up the initial NgModule imports for NgRx Store, Effects, Router-Store, and Store DevTools
ng g @nrwl/angular:ngrx <featurename> --module=<path-to-module> --defaults --root 

2. Creating a root store with facade 
ng g @nrwl/angular:ngrx <featurename> --module=<path-to-module> --defaults --facade

3. create a lib
nx g @nrwl/angular:lib <libname>