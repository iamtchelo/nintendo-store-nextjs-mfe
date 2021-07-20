import Head from "next/head";
import dynamic from "next/dynamic";
import Products from "../components/Products";

const PageWrapper = dynamic(() => import("shell/PageWrapper"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nintendo Store - Products</title>
      </Head>

      <PageWrapper>
        <Products />
      </PageWrapper>
    </>
  );
}
