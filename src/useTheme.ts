import { colors, createTheme, Theme, ThemeOptions, useMediaQuery } from '@material-ui/core';
import { merge } from 'lodash';

const commonTheme: ThemeOptions = {
	components: {
		MuiUseMediaQuery: {
			defaultProps: { noSsr: true }
		}
	}
};

const lightTheme = createTheme( merge( commonTheme, {
	palette: {
		mode      : 'light',
		background: { paper: colors.grey[ '100' ] }
	}
} ) );

const darkTheme = createTheme( merge( commonTheme, {
	palette: {
		mode      : 'dark',
		background: { paper: colors.grey[ '900' ] }
	}
} ) );

export default function useTheme() {
	const dark = useMediaQuery( '(prefers-color-scheme: dark)' );
	
	return dark ? darkTheme : lightTheme;
}

declare module '@material-ui/styles' {
	// noinspection JSUnusedGlobalSymbols
	interface DefaultTheme extends Theme {
	}
}
