import "../styles/globals.css";
import Layout from "../components/layout-comps/Layout";
import Head from "next/head";
import { StoreProvider } from "easy-peasy";
import store from "../stores/store";
import firebase from "../firebase/config";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useStoreRehydrated } from "easy-peasy";

export default function App({ Component, pageProps }) {
  function WaitForStateRehydration({ children }) {
    const isRehydrated = useStoreRehydrated();
    return isRehydrated ? children : null;
  }
  return (
    <>
      <StoreProvider store={store}>
        <WaitForStateRehydration>
          <ProSidebarProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProSidebarProvider>
        </WaitForStateRehydration>
      </StoreProvider>
    </>
  );
}
