import type { AppProps } from 'next/app'

// ** Theme Imports
import { ThemeProvider } from '@mui/material/styles'
import theme from 'theme/index'
import 'styles/globals.css'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from 'store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
