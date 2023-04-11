import Button from "./Button"

const TodoItem = ({ todo, icon }) => {
	return (
		<div className="todo-item">
			<div className="todo-text">{todo}</div>
			<Button icon={icon} />
		</div>
	)
}

export default TodoItem
