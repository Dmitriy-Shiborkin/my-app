import wall_reducer from './Wall_Reducer';

let store = {

  _state: {

    messageData: [
      {message: 'Привет'}
    ],

    newPostText: '',

  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state = wall_reducer(this._state, action);

    this._callSubscriber(this._state);
  }
} 

export default store;



