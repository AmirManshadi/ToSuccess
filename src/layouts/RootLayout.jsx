import Greeting from "../components/Greeting"
import TodoList from "../components/TodoList"

const RootLayout = () => {
	return (
		<>
			<header>
				<h1 className="site-title">ToSuccess</h1>
			</header>
      <main>
        <Greeting />
        <TodoList />
      </main>
		</>
	)
}

export default RootLayout
