import Item from "./Item";

function TODOList({ todos }) {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map((item, index) => <Item key={index} item={item}/>)
            ) : (
                <p>There is no tasks</p>
            )}
        </ol>
    );
}

export default TODOList;