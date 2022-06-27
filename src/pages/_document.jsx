import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="" lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
      </Head>
      <body className='bg-white antialiased dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
