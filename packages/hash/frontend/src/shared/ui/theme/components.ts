import { Components, Theme } from "@mui/material/styles";
import {
  MuiIconButtonThemeOptions,
  MuiListItemButtonThemeOptions,
  MuiListItemTextThemeOptions,
  MuiTooltipThemeOptions,
} from "./components/data-display";
import {
  MuiDrawerThemeOptions,
  MuiMenuThemeOptions,
  MuiMenuItemThemeOptions,
} from "./components/navigation";
import {
  MuiButtonThemeOptions,
  MuiOutlinedInputThemeOptions,
} from "./components/inputs";
import { MuiCssBaselineThemeOptions } from "./components/utils";

export const components: Components<Theme> = {
  /** ===== INPUTS ===== */
  MuiButton: MuiButtonThemeOptions,
  MuiOutlinedInput: MuiOutlinedInputThemeOptions,
  /** ===== DATA DISPLAY ===== */
  MuiIconButton: MuiIconButtonThemeOptions,
  MuiTooltip: MuiTooltipThemeOptions,
  MuiListItemButton: MuiListItemButtonThemeOptions,
  MuiListItemText: MuiListItemTextThemeOptions,
  /** ===== FEEDBACK ===== */
  /** ===== SURFACES ===== */
  /** ===== NAVIGATION ===== */
  MuiDrawer: MuiDrawerThemeOptions,
  MuiMenu: MuiMenuThemeOptions,
  MuiMenuItem: MuiMenuItemThemeOptions,

  /** ===== LAYOUT ===== */
  /** ===== UTILS ===== */
  MuiCssBaseline: MuiCssBaselineThemeOptions,
  /** ===== DATA GRID ===== */
};
