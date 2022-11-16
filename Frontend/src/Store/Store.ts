import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { ItemCategoryreducer } from "./ItemCategory/ItemCategory.reducer"
import { Singleitemreducer } from "./SinglePage/Singleitem.reducer"


const rootReducer = combineReducers({
         single:Singleitemreducer,
         Category:ItemCategoryreducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
