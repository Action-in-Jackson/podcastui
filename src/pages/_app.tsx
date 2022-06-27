import { ThemeProvider } from 'next-themes'
import { AudioProvider } from 'components/AudioProvider'
import { Layout } from 'components/Layout'

import 'styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AudioProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AudioProvider>
    </ThemeProvider>
  )
}
