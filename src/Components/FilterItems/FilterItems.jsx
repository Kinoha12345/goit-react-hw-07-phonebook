import { useDispatch } from "react-redux";
import { filterValue} from '../../redux/contacts/contactsAction';
const FilterItems = () => {
  const dispatch = useDispatch();
    return ( <><input onChange={(e) => {
        const { value } = e.target;
        dispatch(filterValue(value))
    }} name="filter" >
    </input></> );
}

export default FilterItems;