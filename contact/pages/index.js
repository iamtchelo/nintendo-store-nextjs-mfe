import Head from "next/head";
import dynamic from "next/dynamic";
import Form from "../components/Form";

const PageWrapper = dynamic(() => import("shell/PageWrapper"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nintendo Store - Contact</title>
      </Head>

      <PageWrapper>
        <Form />
      </PageWrapper>
    </>
  );
}
