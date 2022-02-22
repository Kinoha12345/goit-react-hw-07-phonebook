import "./App.css";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";
import { useSelector } from "react-redux";


const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter)

  const filterItems = (query) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };

  return (
    <>
      <h1>PhoneBook</h1>
      <Form  />
      <h2>Contacts</h2>
      <FilterItems  />
      <ul>
        <ContactsListItem  filter={filterItems(filter)}/>
      </ul>
    </>
  );
};


export default App;
