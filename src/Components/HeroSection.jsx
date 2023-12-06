import CustomImage from "./CustomImages"

function HeroSection() {
    const images = [
        "src/Assets/gallery/dish/img_1.jpg",
        "src/Assets/gallery/dish/img_2.jpg",
        "src/Assets/gallery/dish/img_3.jpg",
        "src/Assets/gallery/dish/img_4.jpg",
        "src/Assets/gallery/dish/img_5.jpg",
        "src/Assets/gallery/dish/img_6.jpg",
        "src/Assets/gallery/dish/img_7.jpg",
        "src/Assets/gallery/dish/img_8.jpg",
        "src/Assets/gallery/dish/img_9.jpg",
    ]

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} alt='fuck' />
                ))}
            </div>
        </div>
    )
}

export default HeroSection
