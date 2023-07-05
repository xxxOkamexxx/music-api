import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './assets/style/App.css'

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
			refetchOnWindowFocus: false,
			staleTime: 5 * 60 * 1000, // 5 minutes
			cacheTime: 15 * 60 * 1000, // 15 minutes
		}
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
