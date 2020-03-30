import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA63ppY1LypUM2-fNTzMZ9XKsMoggcvwxQ',
  authDomain: 'lambda-eats.firebaseapp.com',
  databaseURL: 'https://lambda-eats.firebaseio.com',
  projectId: 'lambda-eats',
  storageBucket: 'lambda-eats.appspot.com',
  messagingSenderId: '518416592169',
  appId: '1:518416592169:web:aaeb4db57026b571939b38'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const dataRef = db.ref('orders');
dataRef.on('value', gotOrders, errOrders);

export function gotOrders(orders) {
  //   console.log(orders.val());
  const data = orders.val();
  const k = Object.keys(orders);
  data.forEach(data => {
    const pizza = {
      name: data.orders[k].name,
      topping: data.orders[k].toppings,
      sauce: data.orders[k].sauce,
      size: data.orders[k].size,
      instructions: data.orders[k].instructions,
      id: `${data.orders[k].name}-${Date.now()}`,
      glutenFree: data.orders[k].glutenFree
    };
  });
}

export function order(top, sauce, name, id, inst, glut, size) {
  const newRef = dataRef.push();
  newRef.set({
    id: id,
    toppings: top,
    sauce: sauce,
    name: name,
    instructions: inst,
    glutenFree: glut,
    size: size
  });
}
function errOrders(err) {
  console.error('Error: ', err);
}
