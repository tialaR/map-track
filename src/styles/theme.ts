import { colors } from "@/styles/tokens/colors";
import { shadows } from "@/styles/tokens/shadows";
import { spacing } from "@/styles/tokens/spacing";
import { typography } from "@/styles/tokens/typography";

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
} as const;

export type Theme = typeof theme;
export default theme;
