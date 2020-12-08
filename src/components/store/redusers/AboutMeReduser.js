const ABOUT_ME_REDUSER = 'ABOUT-ME-REDUSER';



let defaultState = {
    Photo: [
        {id: 1, src: 'https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg' },
        {id: 2, src: 'https://i.pinimg.com/originals/b0/ac/20/b0ac20ef2d847a92931324ebafcb15be.jpg'},
        {id: 3, src: 'https://img.cdnstampsy.com/image/preview/960x/stampsy-eu-1.s3.amazonaws.com/uploads/02/10/2017/user/78511/f9e8c963-5363-4ad2-b977-80de1f9a6b2e.jpg'}
    ]
}

const CreateReduser = (state = defaultState, action) => {

   switch (action.type) {

       case ABOUT_ME_REDUSER:
           let addPhoto = { id: 4, src: action.photos }
           state.Photo.push(addPhoto);
           return state;

       default:
           return state
   }
}

export default CreateReduser


export let aboutMeReduser = (photo) => ({type: ABOUT_ME_REDUSER, photos: photo})
