import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import ResponsiveAppBar from "@/components/appBar";
import Footer from "@/components/footer";

// SEO Metadata
export const metadata: Metadata = {
  title: "Plex Marketing | Custom Mobile Marketing Solutions",
  description:
    "Plex Marketing offers innovative mobile marketing experiences to elevate brand visibility with custom vehicles and on-the-road promotions.",
  keywords: [
    "Plex Marketing",
    "mobile marketing",
    "custom marketing vehicles",
    "brand visibility",
    "on-the-road promotions",
    "mobile advertising solutions",
  ],
  authors: [{ name: "Plex Marketing" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Tags */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Plex Marketing | Custom Mobile Marketing Solutions"
        />
        <meta
          property="og:description"
          content="Innovative on-the-road brand experiences through custom marketing vehicles and promotions."
        />
        <meta
          property="og:image"
          content="/images/plex-marketing-thumbnail.jpg"
        />
        <meta property="og:url" content="https://plexmktg.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
