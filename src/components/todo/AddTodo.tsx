import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { addTodo } from '@/redux/features/todoSlice';
import { useAppDispatch } from '@/redux/hook';
import { generateRandomId } from '@/utils/generateRandomId';
import { useState } from 'react';

const AddTodo = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: generateRandomId(),
        title,
        description,
        isCompleted: false,
      })
    );
    setTitle('');
    setDescription('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new todo</DialogTitle>
          <DialogDescription>
            Write todo title and description and hit save.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="reason"
                id="reason"
                className="text-sm rounded-lg block w-full p-2.5 bg-slate-300 text-black focus:outline-none"
                placeholder="Todo Title"
                required
                minLength={3}
                maxLength={8}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="note"
                rows={3}
                className="block p-2.5 w-full text-sm rounded-lg   focus:outline-none bg-slate-300 text-black"
                placeholder="Write todo description here.."
                minLength={9}
                maxLength={20}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <DialogClose asChild>
            <button
              type="submit"
              className="mt-4 bg-red-300 rounded-md px-8 py-2 text-white hover:bg-red-400 transition-colors duration-300 ease-in-out"
            >
              Save
            </button>
          </DialogClose>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;