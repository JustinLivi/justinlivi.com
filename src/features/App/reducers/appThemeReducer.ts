import { reducer } from 'ts-action';
import { ColorThemeId } from 'features/styles/colorThemes/colorThemeTypes';

export const themeReducer = reducer(ColorThemeId.light);
