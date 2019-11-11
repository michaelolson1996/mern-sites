import Document, { Head, Main, NextScript } from 'next/document'
// import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    // const styles = flush()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css' integrity='sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy' crossOrigin='anonymous' />
          <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
          <link href = '/static/navbar.css' rel = 'stylesheet' />
          <link href = '/static/home.css' rel = 'stylesheet' />
          <link href = '/static/main.css' rel = 'stylesheet' />
          <link href = '/static/about.css' rel = 'stylesheet' />
          <link href = '/static/donate.css' rel = 'stylesheet' />
          <link href = '/static/volunteer.css' rel = 'stylesheet' />
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossOrigin='anonymous'></script>
          <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js' integrity='sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4' crossOrigin='anonymous'></script>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

          <script>
            AOS.init();
          </script>
          <NextScript />
        </body>
      </html>
    )
  }
}