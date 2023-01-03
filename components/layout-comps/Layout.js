import FooterNav from "./FooterNav";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <FooterNav />
    </>
  );
}
