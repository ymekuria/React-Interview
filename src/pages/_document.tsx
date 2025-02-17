import { ServerStyleSheets } from '@material-ui/styles';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

// noinspection JSUnusedGlobalSymbols
export default class _Document extends Document {
	static async getInitialProps( ctx: DocumentContext ) {
		// Render app and page and get the context of the page with collected side effects.
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () => originalRenderPage( {
			enhanceApp: ( App ) => ( props ) => sheets.collect( <App { ...props } /> )
		} );

		const initialProps = await Document.getInitialProps( ctx );

		return {
			...initialProps,
			// Styles fragment is rendered after the app and page rendering finish.
			styles: [ ...React.Children.toArray( initialProps.styles ), sheets.getStyleElement() ]
		};
	}

	render() {
		// noinspection HtmlRequiredTitleElement
		return <Html lang='en'>
			<Head>
				<meta charSet='utf-8' />

				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>;
	}
}
