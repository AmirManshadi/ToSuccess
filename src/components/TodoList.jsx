import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import btnTypes from "../assets/buttons"

const TodoList = () => {
	return (
		<div className="todo-container">
			<form className="todo-input">
				<TodoInput icon={btnTypes.add} />
			</form>
			<div className="todo-list">
				<TodoItem icon={btnTypes.done} />
				<TodoItem icon={btnTypes.done} />
				<TodoItem icon={btnTypes.done} />
			</div>
		</div>
	)
}

export default TodoList
