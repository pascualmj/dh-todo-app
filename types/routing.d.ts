declare module "app-types/routing" {
  export type TRouteName = "Login" | "Todos" | "Home";
  export type TLayout = "default";

  export type TAppPaths = {
    [key in TRouteName]: string;
  };

  export interface IRoute<T = never> {
    name: string;
    path: string;
    component: T;
    layout?: TLayout;
    exact?: boolean;
    auth?: boolean;
  }
}
