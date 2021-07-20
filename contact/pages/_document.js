import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <script src="http://localhost:3000/_next/static/chunks/remoteEntry.js" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
