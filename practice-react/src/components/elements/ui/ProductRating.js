import { PropTypes } from "prop-types";
import { Fragment } from "react";

const ProductRating = ({ rateValue }) => {
    let rating = [];

    for (let i = 0; i < 5; i++) {
        rating.push(<i className="fas fa-star" key={i}></i>);
    }
    if (rateValue && rateValue > 0) {
        for (let i = 0; i <= rateValue - 1; i++) {
            rating[i] = <i className="fas fa-star yellow" key={i}></i>
        }
    }
    return (
        <div className="product-rating">
            {rating}
        </div>
    );
}

ProductRating.propTypes = {
    rateValue: PropTypes.number
};

export default ProductRating;