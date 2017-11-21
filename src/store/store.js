import createStore from 'redux-zero'

const initialState = {
   successLogin : false,

   user : {
      id : null,
      email :  null,
      fullname :  null,
      survey :  null,
      question :  null,
      options :  null            
   },
   boards : null,
   stages : null,
   tasks : null   
}

const store = createStore (initialState);
export default store



// import createStore from 'redux-zero';

// const initialState = {
//     board: [], 
//     user: [
//         {
//             firstName: "Milagros",
//             lastName: "Mendoza",
//             email: "milagrosmndoza@gmail.com", 
//             password: "000000",
//             boards: [
//                 {
//                     id: 0,
//                     title: "Aprender Programación"
//                 }
//             ]
//         }
//     ]
// }

// const store = createStore(initialState);
// export default store;

