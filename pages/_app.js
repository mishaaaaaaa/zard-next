import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { appWithTranslation } from "next-i18next";
import AppLayout from "@/components/layouts/AppLayout";
//import AppLayout from "@/layouts/AppLayout";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default appWithTranslation(App);
