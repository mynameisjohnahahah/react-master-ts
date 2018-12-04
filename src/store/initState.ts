import {ITodoModel, IGetCookie} from '../containers/home/modules/models';

export interface IRootState {
    todo: ITodoModel
    token: IGetCookie
}