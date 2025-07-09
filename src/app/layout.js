import "./globals.css";

export const metadata = {
  title: "Blacksof - Automotive Solutions",
  description:
    "Advanced automotive solutions with 360-degree comprehensive services",
  keywords: "automotive, solutions, NVH, soft trims, vehicles",
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&family=Geist+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link
          rel="preload"
          href="/automotive.224e7418884105595114.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="antialiased bg-white font-sans">{children}</body>
    </html>
  );
}
