import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/styles.scss'

function NextDashboard({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Next Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default NextDashboard