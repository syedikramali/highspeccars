import Layout from "@/components/Layout";
import useThemeMode from "@/hooks/useThemeMode";
import { darkTheme, lightTheme } from "@/styles/theme";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import createEmotionCache from "../utility/createEmotionCache";
import "@fontsource/poppins"

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { isLightMode } = useThemeMode();

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
