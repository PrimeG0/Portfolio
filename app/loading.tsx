import LoadingWrapper from "./components/LoadingWrapper";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
