//Calculator
const CALCULATOR_API = "/calculator";

const POST_PREMIUM_CALCULATION = (productId) => `${CALCULATOR_API}/issuePremium/${productId}`;

//Products
const PRODUCT_API = "/product";

const CREATE_PRODUCT_URL = PRODUCT_API;
const LIST_PRODUCT_URL = PRODUCT_API;
const GET_PRODUCT_BY_ID_URL = (id) => `${PRODUCT_API}/${id}`;
const UPDATE_PRODUCT_URL = (id) => `${GET_PRODUCT_BY_ID_URL(id)}`;
const DELETE_PODUCT_URL = (id) =>`${GET_PRODUCT_BY_ID_URL(id)}`;

//Hypothesis
const HYPOTHESIS_API = "/hypothesis";

const CREATE_HYPOTHESIS_URL = HYPOTHESIS_API;
const LIST_HYPOTHESIS_URL = HYPOTHESIS_API;
const GET_HYPOTHESIS_BY_ID_URL = (hypothesis_id) => `${HYPOTHESIS_API}/LLManswer/${hypothesis_id}`;


export{
    POST_PREMIUM_CALCULATION,
    CREATE_PRODUCT_URL,
    LIST_PRODUCT_URL,
    GET_PRODUCT_BY_ID_URL,
    UPDATE_PRODUCT_URL,
    DELETE_PODUCT_URL,
    CREATE_HYPOTHESIS_URL,
    LIST_HYPOTHESIS_URL,
    GET_PRODUCT_BY_ID_URL
}
