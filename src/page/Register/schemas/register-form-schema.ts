import * as Yup from 'yup'
export const registerSchema = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  seniority: Yup.string().required(),
  password1: Yup.string().min(6, '6 catacteres como minimo').required('No password provided.'),
  password2: Yup.string()
    .min(6, '6 caracteres como minimo')
    .oneOf([Yup.ref('password1'), null], 'Passwords must match')
    .required('Required'),
})
