import PreviousSearches from "../Components/PreviousSearches"
import RecipeCard from "../Components/RecipeCard"

export default function Recipes() {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/src/Assets/gallery/dish/img_1.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/src/Assets/gallery/dish/img_4.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/src/Assets/gallery/dish/img_5.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/src/Assets/gallery/dish/img_6.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/src/Assets/gallery/dish/img_10.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/src/Assets/gallery/dish/img_1.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/src/Assets/gallery/dish/img_4.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/src/Assets/gallery/dish/img_5.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/src/Assets/gallery/dish/img_6.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/src/Assets/gallery/dish/img_10.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_6.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/src/Assets/gallery/dish/img_5.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/src/Assets/gallery/dish/img_6.jpg",
      authorImg: "/src/Assets/gallery/chefs/img_5.jpg",
    }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}