import { Outlet } from "react-router-dom"
import Greeting from "../components/Greeting"

const RootLayout = () => {
	return (
		<>
			<header>
				<h1 className="site-title">ToSuccess</h1>
			</header>
      <main>
        <Greeting />
        <Outlet />
      </main>
		</>
	)
}

export default RootLayout
