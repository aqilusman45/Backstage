import "../styles/globals.scss";

export const metadata = {
  title: "Transform Participants into Performers.",
  description:
    "Give your experience agency the edge with creative technology guaranteed to make an impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
