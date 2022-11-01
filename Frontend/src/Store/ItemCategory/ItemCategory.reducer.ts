 
 const Item_Category = require("./ItemCategory.Module")

 const data = {Category:[]}
 export function ItemCategoryreducer(state = data, { type, payload }:any) {
//   console.log(payload)
     switch (type) {
         case "Item_Category": {
             console.log(payload)
             return { ...state, Category:payload } 
         }
         default: {
             return state;
         }
     }
 }