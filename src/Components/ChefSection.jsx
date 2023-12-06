
import ChiefCard from './ChefCard'

function ChefSection({chief}) {
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/src/Assets/gallery/chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/src/Assets/gallery/chefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/src/Assets/gallery/chefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/src/Assets/gallery/chefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/src/Assets/gallery/chefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/src/Assets/gallery/chefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className='section chiefs'>
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chiefs-container">

                {chiefs.map((chefs, index) => (
                    <ChiefCard key={index} chief={chefs} />
                ))}



            </div>

        </div>
    )
}

export default ChefSection
