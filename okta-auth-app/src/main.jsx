import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-f0au6vhbhbgc4ltz.us.auth0.com"
      clientId="ni95Fd7FOMYZDfPsXCMsWZhu43xiEY7A"
      authorizationParams={{
        redirect_uri: window.location.origin + '/staff'
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
