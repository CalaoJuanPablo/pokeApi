import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from '../src/redux/store'
import { GlobalStyles } from '../styles/globals'

function MyApp({ Component, pageProps }) {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ReduxProvider>
  )
}

export default MyApp
