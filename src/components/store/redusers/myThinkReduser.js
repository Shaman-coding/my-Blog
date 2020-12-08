const THINKS_ADD = 'THINKS-ADD';
const UPDATE_ADD_TEXT = 'UPDATE-ADD-TEXT';

const TUSK_ADD = 'TUSK-ADD';
const UPDATE_TUSK_TEXT = 'UPDATE-TUSK-TEXT';

let defaultState = {
    posts:[
        {id:1, message: 'it my first posts', index: 1},
        {id:2, message: "i'm want treveling", index: 2}
    ],

    addPostText: 'it new text',

    tusks:[
        {id: 1, tusk: 'read book'},
        {id: 2, tusk: 'make programs'},
        {id: 3, tusk: 'create are big company'}
    ],
    updateTusk: 'My new tusk'
   

};

const MyThinkReduser = (state = defaultState, action) => {

    switch (action.type) {
        case THINKS_ADD:
            let createPost = { id: 3, message: state.addPostText, index: 3}
            state.posts.push(createPost)
            state.addPostText = '';
            return state;

        case UPDATE_ADD_TEXT:
            state.addPostText = action.updateAddText;
            return state;


        case TUSK_ADD:
            let createTusk = {  id: 4,  tusk: state.updateTusk };
            state.tusks.push(createTusk);
            state.updateTusk = '';
            return state;

        case UPDATE_TUSK_TEXT:
            state.updateTusk = action.updateTusks;
            return state
        default:
            return state;
    }

}

export let addPostActionCreator = () => ({ type: THINKS_ADD})
export let updateAddText = (updateText) =>  ({type: UPDATE_ADD_TEXT, updateAddText: updateText})

export let addTuskActionCreator = (tusk) => ({ type: TUSK_ADD, tusk: tusk })
export let updateTuskText = (updateTusk) => ({type: UPDATE_TUSK_TEXT, updateTusks: updateTusk })


export default MyThinkReduser;