// needs to axios.get data from the api

import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';

const initialItems= [];

export default function Dashboard(props) {

    const [items, setItems] = useState(initialItems);

    const getItems = () => {
        axios.get('https://bwproject.herokuapp.com/api/items')
            .then(res => {
                setItems(res.data);
            }).catch(err => console.error(err));
    }


    useEffect(() => {
        getItems()
    }, []);

    return (
        <div className='items-list-wrapper'> 
             <h1>Dashboard</h1>

            {items.map(item => (
                <ItemCard key={props.item_name} details={item} />
            ))}
        </div>

    )};
    // END OF DASHBOARD FUNCTION