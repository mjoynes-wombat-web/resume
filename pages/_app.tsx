import type { AppProps } from 'next/app'

import 'normalize.css'
import '../scss/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
