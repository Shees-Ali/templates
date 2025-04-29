import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const primaryPalette = palette('#0163FF');
const secondaryPalette = palette('#8B173A');
const tertiaryPalette = palette('#0D4261');
const surfacePalette = palette('#F3F3F3');
surfacePalette[0] = '#ffffff'; // Set the first color to white
console.log(surfacePalette);
const darkSurfacePalette = palette('#17264E');

const CustomPreset = definePreset(Aura, {
  semantic: {
    primary: primaryPalette,
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
    },
  },
});

export default CustomPreset;
