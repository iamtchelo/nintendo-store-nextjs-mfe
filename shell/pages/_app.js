import PageWrapper from "../components/PageWrapper";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  );
}

export default App;
