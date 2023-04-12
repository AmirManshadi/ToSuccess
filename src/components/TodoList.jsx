import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import btnTypes from "../assets/buttons"

const TodoList = () => {
	return (
		<div className="todo-container">
			<form className="todo-input">
				<TodoInput icon={btnTypes.add} />
			</form>
			<div className="todo-list"></div>
		</div>
	)
}

export default TodoList
