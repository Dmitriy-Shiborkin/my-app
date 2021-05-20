const ADD_POST = 'ADD_POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const wall_reducer = (state, action) => {

    switch(action.type) {

        case ADD_POST:

            let newMess = {
                message: state.newPostText,
            };
          
            state.messageData.push(newMess);
            state.newPostText = '';

            return state;

        case UPDATE_NEW_POST_TEXT:

            state.newPostText = action.newText;

            return state;

        default:

            return state;

    }

}

export let addPostActionCreator = () => {
    return {
      type: ADD_POST,
    }
  }
  
export let changePostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default wall_reducer;












