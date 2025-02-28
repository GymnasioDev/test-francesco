import {
  LOAD_TASKS
} from "../actions/DataAction";

const initialState = {};

const TaskReducer = (state = initialState, action) => {
  switch (action.subtype) {
    case LOAD_TASKS:
      return { ...state, tasks: Object.assign({},...action.companies.map(x=>({[x.id]:x}))) };


    default:
      return state;
  }
};

export default TaskReducer;
