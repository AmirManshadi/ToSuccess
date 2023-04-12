import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import RootLayout from "./layouts/RootLayout"

const route = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<RootLayout />} />)
)

function App() {
	return <RouterProvider router={route} />
}

export default App
