import { Link } from "react-router-dom";

const ProductsCards = () => {
    return (
        <>
            <div className="cards">
                <div className="card card--movies">
                    <Link to="/products/id" className="card__header">
                        <img
                            src="https://e.rpp-noticias.io/normal/2021/12/27/334033_1194671.jpg"
                            alt="Img"
                            width="100%"
                            height="auto"
                            className="card__header-img"
                        />
                    </Link>
                    <div className="card__body card__body--movies">
                        <h3 className="card__title card__title--movies">Prestamo Semanal</h3>
                    </div>
                </div>
                <div className="card card--movies">
                    <Link to="/id" className="card__header">
                        <img
                            src="https://e.rpp-noticias.io/normal/2021/12/27/334033_1194671.jpg"
                            alt="Img"
                            width="100%"
                            height="auto"
                            className="card__header-img"
                        />
                    </Link>
                    <div className="card__body card__body--movies">
                        <h3 className="card__title card__title--movies">Prestamo Semanal</h3>
                    </div>
                </div>
                <div className="card card--movies">
                    <Link to="/" className="card__header">
                        <img
                            src="https://e.rpp-noticias.io/normal/2021/12/27/334033_1194671.jpg"
                            alt="Img"
                            width="100%"
                            height="auto"
                            className="card__header-img"
                        />
                    </Link>
                    <div className="card__body card__body--movies">
                        <h3 className="card__title card__title--movies">Prestamo Semanal</h3>
                    </div>
                </div>
                <div className="card card--movies">
                    <Link to="/" className="card__header">
                        <img
                            src="https://e.rpp-noticias.io/normal/2021/12/27/334033_1194671.jpg"
                            alt="Img"
                            width="100%"
                            height="auto"
                            className="card__header-img"
                        />
                    </Link>
                    <div className="card__body card__body--movies">
                        <h3 className="card__title card__title--movies">Prestamo Semanal</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsCards;