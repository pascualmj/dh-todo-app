declare module "app-types/models" {
  export type TTodoPriority = "2" | "1";

  export interface ITodo {
    id: string;
    title: string;
    priority: TTodoPriority;
    done: boolean;
  }
}
