import { COMPANIES, TASKS } from "../actions/TypeActions";
import CompanyReducer from "./CompanyReducer";
import TaskReducer from "./TaskReducer";

const rootReducer = (state, action) => {
  switch (action.type) {
    case COMPANIES:
      return CompanyReducer(state, action);
    case TASKS:
      return TaskReducer(state, action);

    default:
      return state;
  }
};

export default rootReducer;
