import ProductsCards from "../../components/products/ProductsCards";

const OurProductsPage = () => {
    return (
        <section className="section">
            <div className="container elements">
                <h2 className="section__title">Nuestros Productos</h2>
                <ProductsCards />
            </div>
        </section>
    );
}

export default OurProductsPage;