import { ChangeEvent, FormEvent, useState } from "react";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState("");

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        if (inputText === "") return;

        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text: inputText,
            completed: false,
        }

        setTodos([...todos, newTodo]);
        setInputText("");
    }

    function handleToggleTodo (id: string) {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo
     });

     setTodos(updatedTodos);

    }

    return (
        <div>
            <h1>To do app</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskField"> To do: </label>
                <input type="text" placeholder="write your task" id="taskField" value={inputText}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                />
                <button type="submit"> Add</button>
                </form>
                <ul>
                    {todos.map((todo) => (
                        <span style = {{textDecoration: todo.completed ? 'line-through': 'none'}} onClick ={() => handleToggleTodo(todo.id)}>
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                        </span>
                    ))}
                </ul>
        </div>
    ); 
};

export default TodoApp
