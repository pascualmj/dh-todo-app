declare module "app-types/routing" {
  export type TRouteName = "Login" | "Todos" | "Home";

  export type TAppPaths = {
    [key in TRouteName]: string;
  };

  export interface IRoute<T = never> {
    name: string;
    path: string;
    component: T;
    exact?: boolean;
    auth?: boolean;
  }
}
