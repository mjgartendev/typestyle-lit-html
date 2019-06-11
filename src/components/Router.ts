export interface Route {
  path?: String
  name?: String
  component?: String
  isActive?: boolean
}

export interface RouterState {
  routes?: Route[];
  currentRoute?: Route;
  activeClass?: String;
}

export interface IRouter {
  state?: RouterState;
  getState?(): RouterState;
  goTo?(route): Route;
  getAllRoutes?(): Route[];
  getCurrentRoute?(): Route;
  getActiveClass?(): String;
}

export class Router implements IRouter {
  constructor(
    public routes: Route[] = [{path: '/', name: 'Index', isActive: true}], 
    public currentRoute: Route = {path: '/', name: 'Index', isActive: true},
    public activeClass: String = 'active'
    ){
    this.routes = routes
    this.currentRoute = currentRoute
    this.activeClass = activeClass
  }
  getAllRoutes(): Route[]{
    return this.routes;
  }
  getCurrentRoute(): Route {
    return this.currentRoute;
  }
  getActiveClass(){
    return this.activeClass
  }
  goTo(route: Route) {
    window.history.pushState(route, route.name.toString(), route.path.toString())
    return this.currentRoute = route;
  }
}

export const router = new Router();
export default router;
