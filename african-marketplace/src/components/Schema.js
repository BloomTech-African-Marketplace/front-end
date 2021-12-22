import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Please type the name of the item')
    .min(3, 'Name of item requires at least 3 characters'),
    description: yup
    .string()
    .trim()
    .required('Description is required')
    .min(3, 'Please type more.')
    .max(150, 'Maximum character reached.')

})

export default formSchema;