import ProductsDetail from "../../components/products/ProductsDetail";
import ProductsHero from "../../components/products/ProductsHero";

import { useParams } from "react-router-dom";




const ProducDetailPage = () => {
    const { id: productId } = useParams();
    const { loading, movie, setMovie, readMovie } = useData();
    return (
        <>
        <ProductsHero/>
        <ProductsDetail/>
        </>
    );
}

export default ProducDetailPage;