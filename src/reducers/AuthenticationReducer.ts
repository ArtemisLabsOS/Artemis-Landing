import { IAppAction, ActionType } from './../actions/Helpers';
improt { User } from '../state/User';


export const AuthenticationReducer = (state: User = null, action: IAppAction) : User => {
  switch (action.type){
    case ActionType.Type.lOGIN_REQUEST:
          return new User({email: action.payload.email, name: 'Artemis', roles: ['Admin'] });
    case ActionType.LOGOUT_REQUEST:
          return null;
   default: 
          return state;
  }
};