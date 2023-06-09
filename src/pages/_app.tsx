import type { AppProps } from 'next/app'

// ** Theme Imports
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'theme/index'
import 'styles/globals.css'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from 'store'

// ** Other Imports
import { isMobile } from 'react-device-detect'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ backgroundColor: 'blue' }} />
        <CssBaseline />
        <div className={isMobile ? '' : 'container'}>
          <div className={isMobile ? '' : 'content'}>
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  )
}
