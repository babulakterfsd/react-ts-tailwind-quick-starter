import { deleteTodo } from '@/redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { TTodo } from '@/types/commonTypes';
import UpdateTodo from './UpdateTodo';

const TodoList = () => {
  const { todos, filter } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const handleDelete = (todo: TTodo) => {
    dispatch(deleteTodo(todo));
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-center text-gray-400">
        <thead className="text-xs text-black uppercase bg-slate-100">
          <tr>
            <th scope="col" className="px-4 py-3">
              Title
            </th>
            <th scope="col" className="px-4 py-3">
              Description
            </th>
            <th scope="col" className="px-4 py-3">
              Iscompleted
            </th>
            <th scope="col" className="px-4 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filter === 'all' &&
            todos?.map((todo: TTodo) => {
              const { id, title, description, isCompleted } = todo;

              return (
                <tr className="border-b border-gray-700" key={id}>
                  <th
                    scope="row"
                    className="px-2 lg:px-4 py-1 lg:py-1.5 font-[400] text-dashboard-main whitespace-nowrap"
                  >
                    {title}
                  </th>
                  <td>{description}</td>
                  <td className="px-2 lg:px-4 py-1 lg:py-1.5">
                    {isCompleted ? (
                      <span className="text-green-500 text-xs">Completed</span>
                    ) : (
                      <span className="text-red-500 text-xs">
                        Not Completed
                      </span>
                    )}
                  </td>
                  <td className="flex justify-center space-x-3 items-center">
                    <UpdateTodo todo={todo} />
                    <button
                      className="text-red-700 font-semibold"
                      onClick={() => handleDelete(todo)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {filter === 'completed' &&
            todos
              ?.filter((todo) => todo.isCompleted)
              .map((todo: TTodo) => {
                const { id, title, description, isCompleted } = todo;

                return (
                  <tr className="border-b border-gray-700" key={id}>
                    <th
                      scope="row"
                      className="px-2 lg:px-4 py-1 lg:py-1.5 font-[400] text-dashboard-main whitespace-nowrap"
                    >
                      {title}
                    </th>
                    <td>{description}</td>
                    <td className="px-2 lg:px-4 py-1 lg:py-1.5">
                      {isCompleted ? (
                        <span className="text-green-500 text-xs">
                          Completed
                        </span>
                      ) : (
                        <span className="text-red-500 text-xs">
                          Not Completed
                        </span>
                      )}
                    </td>
                    <td className="flex justify-center space-x-3 items-center">
                      <UpdateTodo todo={todo} />
                      <button
                        className="text-red-700 font-semibold"
                        onClick={() => handleDelete(todo)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          {filter === 'incompleted' &&
            todos
              ?.filter((todo) => !todo.isCompleted)
              .map((todo: TTodo) => {
                const { id, title, description, isCompleted } = todo;

                return (
                  <tr className="border-b border-gray-700" key={id}>
                    <th
                      scope="row"
                      className="px-2 lg:px-4 py-1 lg:py-1.5 font-[400] text-dashboard-main whitespace-nowrap"
                    >
                      {title}
                    </th>
                    <td>{description}</td>
                    <td className="px-2 lg:px-4 py-1 lg:py-1.5">
                      {isCompleted ? (
                        <span className="text-green-500 text-xs">
                          Completed
                        </span>
                      ) : (
                        <span className="text-red-500 text-xs">
                          Not Completed
                        </span>
                      )}
                    </td>
                    <td className="flex justify-center space-x-3 items-center">
                      <UpdateTodo todo={todo} />
                      <button
                        className="text-red-700 font-semibold"
                        onClick={() => handleDelete(todo)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
