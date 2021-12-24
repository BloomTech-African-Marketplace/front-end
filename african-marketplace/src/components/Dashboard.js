// needs to axios.get data from the api

import React, {useState, useEffect} from 'react';
import AuthItemCard from './AuthItemCard';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddItem from './AddItem';

const initialItems= [];

export default function Dashboard(props) {
   
    const [items, setItems] = useState(initialItems);

    const getItems = () => {
        axiosWithAuth().get('https://bwproject.herokuapp.com/api/auth/items')
            .then(res => {
                setItems(res.data);
            }).catch(err => console.error(err));
    }

    useEffect(() => {
        getItems()
    },[items]);

    return (
        <div className='items-list-wrapper'> 
             <h2 className='dashboard-h2'>Dashboard</h2>
             <AddItem /> 
                <div className='item-cards'>
                    {items.map(item => (
                        <AuthItemCard key={item.item_id} details={item} />
                    
                    ))}
                </div>
        </div>

    )};
    // END OF DASHBOARD FUNCTION
