const API_URL="http://127.0.0.1:8000/api/products/";


export const listproducts = async () => {
    return await fetch(API_URL)
}

export const getproducts = async (productId) => {
    return await fetch(`${API_URL}${productId}`);
};

