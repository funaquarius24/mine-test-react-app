import { landConstants } from '../_constants';

const initialState = {};

export function landData(state = initialState, action) {
  switch (action.type) {
    case landConstants.LAND_SAVE_SUCCESS:
      return {
        items: action.land_data_result
      };
    case landConstants.LAND_SAVE_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}