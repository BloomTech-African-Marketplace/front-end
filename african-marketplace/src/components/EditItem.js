import React from 'react';
import axios from 'axios';

const initialFormValues = {
    name: '', 
    photo: '',
    description: '',
};

const initialFormErrors = {
    name: '',
    photo:'', 
    description: '',
};

const initialItems = [];
const initialDisabled = true;

const itemURL = 'https://bwproject.herokuapp.com/api/items'

export default function EditItem(props) {

    const [items, setItems] = useState(initialItems);
    const [formValues, setFormValues] = useState(initialFormValues);
    
    const putItems = ({ name, photo, description }) => {
        axios.put(`${itemsURL}/${items_id}`, {name, photo, description})
            .then(res => setItems(items.map(item => {
                return item.item_id === id ? res.data : quote
            })))
            .catch(err => console.error(err))
            .finally(() => setFormValues(initialFormValues))

    const editItem = (id) => {
        const item = items.find(it => it.id === id)
        setFormValues({ ...item })
    }
    }

    return(

    )};