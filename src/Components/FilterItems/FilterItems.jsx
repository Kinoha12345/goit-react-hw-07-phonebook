import { connect} from "react-redux";
import { filterValue} from '../../redux/contacts/contactsAction';
const FilterItems = ({ filterValueProp}) => {
    return ( <><input onChange={(e) => {
        const { value } = e.target;
        filterValueProp(value)
    }} name="filter" >
    </input></> );
}

  const mapDispatchToProps = {
    filterValueProp: filterValue
  }
export default connect(null, mapDispatchToProps)(FilterItems) ;