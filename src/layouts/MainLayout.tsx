import { CacheProvider } from "@emotion/react";
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
import type React from "react";
import SideBar from "../components/SideBar";
import createEmotionCache from "../createEmotionCache";
import theme from "../theme";

const cache = createEmotionCache();

function MainLayout({ children }: { children: React.ReactElement }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Stack
          direction='row'
          sx={{
            height: "100%",
          }}>
          <SideBar />
          <Box id='main' sx={{ flex: 1 }}>
            {children}
          </Box>
        </Stack>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MainLayout;
