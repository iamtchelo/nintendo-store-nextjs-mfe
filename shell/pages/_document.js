import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <script src="http://localhost:3001/_next/static/chunks/remoteEntry.js" />
        <script src="http://localhost:3002/_next/static/chunks/remoteEntry.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
