import { ActionTree } from 'vuex';
import { IExampleStateInterface } from './state';
import { IStateInterface } from '../index';


const actions: ActionTree<IExampleStateInterface, IStateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;