import { User } from "../types/user";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user.id!)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}