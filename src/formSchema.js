import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup.string().required(),
    size: yup.string().required(),
    toppings: yup.object().shape({
        pepperoni: yup.boolean(),
        mushrooms: yup.boolean(),
        onions: yup.boolean(),
        olives: yup.boolean()
    }).test('toppingValidate', null, (obj) => {
        if (obj.pepperoni === true) {
            return true
        }
    })
})
export default FormSchema