const TodoInput = ({ todo, children }) => {
	return (
		<>
			<input type="text" name="todo" className="input" placeholder="add todo" autoComplete="false" />
			{children}
		</>
	)
}

export default TodoInput
