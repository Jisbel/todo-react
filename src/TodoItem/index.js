import { CompleteIcon } from '../TodoIcon/CompleteIcone';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
      />
   
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
       onDelete={props.onDelete}
      />
    </li>
  );
}

 
 export { TodoItem };
  