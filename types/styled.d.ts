import "styled-components";

declare module "styled-components" {
  export type AppThemeType = "light" | "dark";
  export interface DefaultTheme {
    name: AppThemeType;
    colors: {
      primaryWhite: string;
      primaryTomato: string;
    };
    toggleTheme?: () => void;
  }
}
