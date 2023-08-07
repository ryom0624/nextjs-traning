import Provider from './Provider'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Loading from './loading';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>
          <Header/>
          <Suspense fallback={<Loading />}>
            <Main>{children}</Main>
          </Suspense>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
