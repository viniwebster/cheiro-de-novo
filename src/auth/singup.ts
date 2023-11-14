import http from "../http/http"
import { IUser } from "../interfaces/IUser"

export const singUp = (user: IUser) => {
  http.post('/users', {
    email: user.email,
    username: user.user,
    password: user.password,
    name:{
        firstname: user.name,
        lastname: user.surname
    },
    address:{
        city: user.city,
        street: user.street,
        number: user.number,
        zipcode: user.cep,
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone: user.phone
})
  .then(res => console.log(res))
    .catch(err => console.log(err)) 
}