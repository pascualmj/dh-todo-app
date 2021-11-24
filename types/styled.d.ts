import "styled-components";

declare module "styled-components" {
  export type AppThemeType = "light" | "dark";
  export interface DefaultTheme {
    name: AppThemeType;
    colors: {
      primaryWhite: string;
      primaryBeige: string;
      secondaryBeige: string;
      primaryTeal: string;
      primaryNavy: string;
      primarySuccess: string;
      primaryError: string;
    };
    toggleTheme?: () => void;
  }
}
