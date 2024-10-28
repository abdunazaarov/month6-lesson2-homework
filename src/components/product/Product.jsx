import "./Product.scss"

import productPhoto1 from "../../assets/productPhoto1.png"
import productPhoto2 from "../../assets/productPhoto2.png"
import productPhoto3 from "../../assets/productPhoto3.png"
import productPhoto4 from "../../assets/productPhoto4.png"
import productPhoto5 from "../../assets/productPhoto5.png"
import productPhoto6 from "../../assets/productPhoto6.png"
import productPhoto7 from "../../assets/productPhoto7.png"

const PRODUCTS = [
    {
        id: 1,
        name: "Apple Smart I",
        price: "$255.00",
        image: productPhoto1
    },
    {
        id: 2,
        name: "Apple Smart II",
        price: "$255.00",
        image: productPhoto2
    },
    {
        id: 3,
        name: "Apple Smart III",
        price: "$255.00",
        image: productPhoto3
    },
    {
        id: 4,
        name: "Apple Smart IV",
        price: "$399.00",
        image: productPhoto4
    },
    {
        id: 5,
        name: "Samsung Watch Pro",
        price: "$255.00",
        image: productPhoto5
    },
    {
        id: 6,
        name: "Fitbit Max 1",
        price: "$155.00",
        image: productPhoto6
    }
]

function Product(){
    return <div className="product">
        <div className="container">
            <p className="product__subtitle">Find your favourite smart watch.</p>
            <h3 className="product__name">Our Latest Products</h3>
            <div className="product__wrapper">
                {
                    PRODUCTS?.map((products) => (
                        <div className="product__card">
                            <img className="product__image" src={products.image} alt={products.name} />
                            <div className="product__text">
                                 <h3 className="product__title">{products.name}</h3>
                                 <img className="product__star" src={productPhoto7} alt="" />
                                 <strong className="product__price"><del>$300.00 </del>{products.price}</strong>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="product__btn">Wiev More</button>
        </div>
    </div>
}

export default Product