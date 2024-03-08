import type { Config } from 'tailwindcss'
import {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  radii,
  space,
} from '@arthurrios-ignite-ui/tokens'

export default {
  content: [],
  theme: {
    extend: {
      colors,
      fontSize,
      fontWeight,
      fontFamily,
      lineHeight,
      borderRadius: radii,
      space,
    },
  },
  plugins: [],
} satisfies Config
