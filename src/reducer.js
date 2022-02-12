export const initialState={
    basket:[],
    user:null,
};


export const getBasketTotal =(basket)=>basket?.reduce((amount,item)=> item.price+amount,0);


const  reducer = (state, action) =>{
    console.log(action);
    switch(action.type){

        case 'EMPTY_BASKET':
            return {
            ...state,
            basket: []
        };

        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':

            //we cloned the basket
            let newBasket =[...state.basket];


            //here we find the index
            const index= state.basket.findIndex((basketItem) =>basketItem.id===action.id);

            console.log(index);

            if(index>=0){
                //item exist in basket remove it
                newBasket.splice(index,1);

            }else{
                console.warn(`Cant remove product (id:${action.id}) as it is not in the basket`);
            }
            return {...state, basket:newBasket}
        default:
            return state;

    }
}



export default reducer;