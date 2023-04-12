import Button from "./Button"

const TodoInput = ({ icon }) => {
	return (
		<>
			<input
				id="todo-input"
				type="text"
				name="todo"
				className="input"
				placeholder="add todo"
				autoComplete="false"
			/>
			<Button icon={icon} />
		</>
	)
}

export default TodoInput
