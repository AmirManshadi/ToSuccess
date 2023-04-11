import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"

const route = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<h1>hello world</h1>} />)
)

function App() {
	return <RouterProvider router={route} />
}

export default App
