import Header from "./Header";
import Footer from "./Footer";

export default function PageContent({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}