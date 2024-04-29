/** @format */

// Libraries.
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// Application.
import "@/library/utils/string";
import { App } from "App";
import { i18n } from "i18n";
import { ThemeProvider } from "@/library/core";
import { AuthProvider } from "@/features/auth";
import { InternationalizationProvider } from "@/features/internationalization";

// Application's environment.
export const environment = import.meta.env.VITE_APP_ENVIRONMENT;
if (environment === "production") {
  disableReactDevTools();
}

// Creates a query client for QueryClientProvider.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 600000,
      cacheTime: 1800000,
    },
    mutations: {
      retry: false,
    },
  },
});

// Root's component.
const rootComponent = (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <InternationalizationProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ThemeProvider>
          {environment === "development" && <ReactQueryDevtools />}
        </QueryClientProvider>
      </InternationalizationProvider>
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  environment === "production" ? (
    rootComponent
  ) : (
    <React.StrictMode>{rootComponent}</React.StrictMode>
  )
);
