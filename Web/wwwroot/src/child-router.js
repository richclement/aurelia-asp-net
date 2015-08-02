export class ChildRouter{
  heading = 'Child Router';

  configureRouter(config, router){
    config.map([
      { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'users',       name: 'users',       moduleId: './users',       nav: true, title:'Github Users' },
      { route: 'values',       name: 'values',       moduleId: './values',       nav: true, title:'Values' },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
