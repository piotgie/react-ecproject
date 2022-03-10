import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-tc7ej9f0.us.auth0.com
// x2oKykT1Y4OIck5RdMtV9DBH47tYUhHt

ReactDOM.render(
    <Auth0Provider
        domain="dev-tc7ej9f0.us.auth0.com"
        clientId="x2oKykT1Y4OIck5RdMtV9DBH47tYUhHt"
        cacheLocation='localstorage'
        redirectUri={window.location.origin}>
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
    document.getElementById('root')
)
