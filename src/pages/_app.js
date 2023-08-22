import Layout from "@/components/Layout";
import useThemeMode from "@/hooks/useThemeMode";
import "@/styles/globals.css";
import { darkTheme, lightTheme } from "@/styles/theme";
import createEmotionCache from "@/utility/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import "@fontsource/poppins";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { isLightMode } = useThemeMode();

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
            <Toaster position="bottom-left" />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
