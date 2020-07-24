import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup.string().required(),
    size: yup.string().required(),
    toppings: yup.object().shape({
        pepperoni: yup.boolean(),
        mushrooms: yup.boolean(),
        onions: yup.boolean(),
        olives: yup.boolean()
    }),
    specialInstructions: yup.string()
})
export default FormSchema