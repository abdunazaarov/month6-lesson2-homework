import "./Category.scss"

import categoryPhoto1 from "../../assets/categoryPhoto1.png"
import categoryPhoto2 from "../../assets/categoryPhoto2.png"
import categoryPhoto3 from "../../assets/categoryPhoto3.png"

const PRODUCT = [
    {
        id: 1,
        title: "Apple",
        desc: "Apple is one of the most famous smart watches providing company.",
        image: categoryPhoto1
    },
    {
        id: 2,
        title: "Xiaomi",
        desc: "Xiaomi smart watches are produced by MI company.",
        image: categoryPhoto2
    },
    {
        id: 3,
        title: "FitBit",
        desc: "FitBit smart watches are best for there health and fitness features.",
        image: categoryPhoto3
    }
]

function Category(){
    return <div className="Category">
        <div className="container">
            <div className="wrapper">
                {
                    PRODUCT?.map((product) => (
                        <div key={product.id} className="category__card">
                            <img className="category__image" src={product.image} alt={product.title} />
                            <div className="category__text">
                                <h3 className="category__title">{product.title}</h3>
                                <p className="category__desc">{product.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Category