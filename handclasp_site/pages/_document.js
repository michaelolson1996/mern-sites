import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = await renderPage()
    return { html, head, errorHtml, chunks }
  }

  // static async getInitialProps(ctx) {const originalRenderPage = ctx.renderPagectx.renderPage = () =>originalRenderPage({
  //   // useful for wrapping the whole react tree
  //   enhanceApp: App => App,
  //   // useful for wrapping in a per-page basis
  //   enhanceComponent: Component => Component,})
  //   // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return initialProps}


  render() {
    return (
      <Html>
        <Head>
          {/* <meta name='viewport' content='width=device-width, initial-scale=1.0' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}