import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

const Products = dynamic(() => import("store/Products"), {
  ssr: false,
});

const Form = dynamic(() => import("contact/Form"), {
  ssr: false,
  loading: ({ error }) => {
    if (error) return "Ops, something is wrong! :/";

    return "loading...";
  },
});

export default function Home() {
  const tab = useTabState();

  return (
    <>
      <Head>
        <title>Nintendo Store</title>
      </Head>

      <TabList {...tab} className="tabs" aria-label="App tabs">
        <Tab {...tab}>Products</Tab>
        <Tab {...tab}>Contact</Tab>
      </TabList>
      <TabPanel {...tab}>
        <Products />
      </TabPanel>
      <TabPanel {...tab}>
        <Form />
      </TabPanel>
    </>
  );
}
