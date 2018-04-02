
const initialState = {
    username: '',
    fullname: '',
    imagepath: ''
}
export default function userReducer(state = initialState, action ) {
    switch(action.type) {
        case 'GET_USER_REQUEST': {
            return Object.assign({}, state, {
              inProgress: true,
              error: '',
              success: ''
            });
          }
        case 'GET_USER_REJECT': {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting user.',
            });
        }
        case 'GET_USER_FULFILLED': {
            const { username, fullname, imagepath } = action.users;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got user',
                fullname,
                imagepath,
                username
            });
            return newState;
        }
        case 'REGISTER_USER_REQUEST': {
            return Object.assign({}, state, {
              inProgress: true,
              error: '',
              success: ''
            });
          }
          case 'REGISTER_USER_REJECT': {
            return Object.assign({}, state, {
              inProgress: false,
              error: action.authError,
            });
          }
          case 'REGISTER_USER_FULFILLED': {
            const newState = Object.assign({}, state, {
              inProgress: false,
              success: 'User Create'
            });

            return newState;
          }

          ///////////////
          case 'SAVE_USER_REQUEST': {
            return Object.assign({}, state, {
              inProgress: true,
              error: '',
              success: ''
            });
          }
          case 'SAVE_USER_FULFILLED': {
            const { username, fullname, imagepath } = action.newUser
            return Object.assign({}, state, {
              inProgress: false,
              success: 'User Saved',
              username,
              fullname,
              imagepath
            });
          }
          case 'saveUserRejectAction': {
            const newState = Object.assign({}, state, {
              inProgress: false,
              error: action.errorMessage
            });

            return newState;
          }
        default: 
            return state
    }
    
}
