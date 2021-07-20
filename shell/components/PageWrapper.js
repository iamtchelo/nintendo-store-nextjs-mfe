import Header from "./Header";

export default function PageWrapper({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
