import {
  LOAD_COMPANIES
} from "../actions/DataAction";

const initialState = {};

const CompanyReducer = (state = initialState, action) => {
  switch (action.subtype) {
    case LOAD_COMPANIES:
      return { ...state, companies: Object.assign({},...action.companies.map(x=>({[x.id]:x}))) };


    default:
      return state;
  }
};

export default CompanyReducer;
