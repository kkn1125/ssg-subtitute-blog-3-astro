import { CacheProvider } from "@emotion/react";
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
import type React from "react";
import CTMList from "../components/CTMList";
import createEmotionCache from "../createEmotionCache";
import theme from "../theme";

const cache = createEmotionCache();

function MainLayout({ children }: { children: React.ReactElement }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Container maxWidth='md'>
          <Stack direction='row'>
            <Box sx={{ flex: 1 }}>
              <CTMList list={[]} />
            </Box>
            <Box id='main' sx={{ flex: 1 }}>
              {children}
            </Box>
          </Stack>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MainLayout;
