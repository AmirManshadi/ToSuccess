import Button from "./Button"

const TodoInput = ({ todo, icon, children }) => {
	return (
		<>
			<input type="text" name="todo" className="input" placeholder="add todo" autoComplete="false" />
			<Button icon={icon} />
		</>
	)
}

export default TodoInput
