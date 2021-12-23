import axios from "axios";
import React, {useState, useEffect} from "react";
// import formSchema from "./Schema";
// import * as yup from 'yup';

import ItemCard from "./ItemCard";


// const initialFormValues = {
//     name: '',
//     imageURL:'',
//     description:''
// }

// const initialFormErrors = {
//     name: '',
//     imageURL:'',
//     description:''
// }

const initialItems = []
// const initialDisabled = true


function LandingPage(){
    const [ item,setItems ] = useState(initialItems);
    // const [ formValues,setFormValues] = useState(initialFormValues);
    // const [ formErrors,setformErrors ] = useState(initialFormErrors);
    // const [ disabled,setDisabled ] = useState(initialDisabled);

    const getItems = () => {
        axios.get('https://bwproject.herokuapp.com/api/items')
        .then((res)=> {
            setItems(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }
    useEffect(()=> {
        getItems()
    }, [])

    // const postItems = (newItem) => {
    //     axios.post('https://bwproject.herokuapp.com/api/items', newItem)
    //     .then(res => {
    //         setItems([res.data,...item])
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    //     .finally(()=> {
    //         setFormValues(initialFormValues)
    //     })
    // }
    // const validate = (name, value) => {
    //     yup
    //     .reach(formSchema, name)
    //     .validate(value)
    //     .then(()=> setformErrors({...formErrors, [name]:''}))
    //     .catch((err) => setformErrors({...formErrors, [name]: err.errors[0] }))
    // }
    // const inputChange = (name, value) => {
    //     validate(name, value)
    //     setFormValues({
    //         ...formValues,
    //         [name]:value
    //     })
    // }

    // const formSubmit = () => {
    //     const newItem = {
    //         name: formValues.name.trim(),
    //         imageURL: formValues.imageURL.trim(),
    //         description:formValues.description.trim()
    //     }
    //     postItems(newItem)
    // }

    // useEffect(()=> {
    //     formSchema.isValid(formValues)
    //     .then((valid)=> setDisabled(!valid))
    // }, [formValues])

    return (
            <div>
                <div>
                    {item.map((items)=> {
                        return <ItemCard key={items.item_id} details={items}/>
                    })}
                </div>
            </div>
    )


}


export default LandingPage;