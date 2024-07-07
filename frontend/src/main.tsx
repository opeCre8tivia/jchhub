import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
//ant design
import { ConfigProvider } from "antd"
import { colors } from "./constants/colors.ts"
// redux
import { Provider } from "react-redux"
import { store } from "./redux/store.ts"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// react router dom

//routes TODO move to a nother file
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: colors.primary,
          borderRadius: 6,

          // Alias Token
          colorBgContainer: colors.white
        }
      }}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ConfigProvider>
  </Provider>
)
