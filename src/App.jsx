import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import TodoList from "./components/TodoList"

const route = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<TodoList />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={route} />
}

export default App
