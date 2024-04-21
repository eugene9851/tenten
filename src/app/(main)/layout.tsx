import type { Metadata } from 'next';
import '@/src/app/globals.scss';
import Footer from '@/src/components/layout/Footer';
import Header from '@/src/components/layout/Header';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={styles.body}>
        <Header />
        <main className={styles.layout}>{children}</main>
        <Footer />
        <div id='modal' />
      </body>
    </html>
  );
}