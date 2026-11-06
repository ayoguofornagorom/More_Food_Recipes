export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  cookingTime: string;
  servings: number;
  difficulty: string;
  rating: number;
  reviewCount: number;
  author: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  createdAt: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Jollof Rice with Grilled Chicken",
    slug: "jollof-rice-with-grilled-chicken",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786340945/More-Recipes_Hero-Image-md_yccqwe.png",
    category: "Nigerian",
    cookingTime: "45 mins",
    servings: 4,
    difficulty: "Easy",
    rating: 4.8,
    reviewCount: 128,
    author: "Chef Amaka",
    description:
      "A rich and flavorful Jollof rice served with perfectly grilled chicken.",
    ingredients: ["Rice", "Tomatoes", "Chicken", "Pepper"],
    instructions: [
      "Prepare the rice.",
      "Prepare the sauce.",
      "Cook the rice.",
      "Grill the chicken.",
      "Serve.",
    ],
    createdAt: "2026-08-12T10:00:00.000Z",
  },

  {
    id: 2,
    title: "Creamy Chicken Pasta",
    slug: "creamy-chicken-pasta",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786561741/Recipe_API_2_o0hxx7.png",
    category: "Italian",
    cookingTime: "30 mins",
    servings: 2,
    difficulty: "Easy",
    rating: 4.6,
    reviewCount: 96,
    author: "Chef Tobi",
    description:
      "Creamy chicken pasta made with tender chicken, rich cream sauce, garlic, and herbs.",
    ingredients: [
      "250g pasta",
      "200g chicken breast",
      "1 cup heavy cream",
      "2 cloves garlic",
      "1/2 cup parmesan cheese",
      "1 tablespoon olive oil",
      "1 teaspoon Italian herbs",
      "Salt to taste",
      "Black pepper to taste",
    ],
    instructions: [
      "Cook the pasta according to the package instructions.",
      "Season and cook the chicken until golden and fully cooked.",
      "Sauté the garlic in olive oil.",
      "Add the cream and parmesan cheese and stir until the sauce becomes creamy.",
      "Add the cooked pasta and chicken to the sauce.",
      "Mix well and garnish with herbs before serving.",
    ],
    createdAt: "2026-08-12T10:30:00.000Z",
  },

  {
    id: 3,
    title: "Beef Stir Fry",
    slug: "beef-stir-fry",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786562567/Recipe_3_Api_Glossy_Beef_pt7n9i.png",
    category: "Asian",
    cookingTime: "25 mins",
    servings: 3,
    difficulty: "Easy",
    rating: 4.7,
    reviewCount: 112,
    author: "Chef Zara",
    description:
      "Tender beef strips stir-fried with colorful vegetables in a savory sauce for a quick and flavorful meal.",
    ingredients: [
      "400g beef strips",
      "1 red bell pepper",
      "1 yellow bell pepper",
      "1 cup broccoli",
      "1 onion",
      "2 cloves garlic",
      "2 tablespoons soy sauce",
      "1 tablespoon oyster sauce",
      "1 tablespoon vegetable oil",
      "1 teaspoon ginger",
      "Black pepper to taste",
    ],
    instructions: [
      "Slice the beef into thin strips and season lightly.",
      "Heat the oil in a large pan or wok over high heat.",
      "Stir-fry the beef until browned, then remove and set aside.",
      "Add the onion, peppers, broccoli, garlic, and ginger to the pan.",
      "Stir-fry the vegetables until slightly tender but still crisp.",
      "Return the beef to the pan and add the soy sauce and oyster sauce.",
      "Toss everything together and cook for another 2–3 minutes.",
      "Serve hot with rice or noodles.",
    ],
    createdAt: "2026-08-12T11:00:00.000Z",
  },

  {
    id: 4,
    title: "Garlic Butter Salmon",
    slug: "garlic-butter-salmon",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786563092/Recipe_4_API_creamy_garlic_nhwrtg.png",
    category: "Seafood",
    cookingTime: "25 mins",
    servings: 2,
    difficulty: "Easy",
    rating: 4.8,
    reviewCount: 104,
    author: "Chef Lily",
    description:
      "Tender pan-seared salmon finished with rich garlic butter, fresh herbs, lemon, and roasted vegetables.",
    ingredients: [
      "2 salmon fillets",
      "3 tablespoons butter",
      "3 cloves garlic",
      "1 tablespoon fresh parsley",
      "1 lemon",
      "1 cup asparagus",
      "1 cup cherry tomatoes",
      "1 tablespoon olive oil",
      "Salt to taste",
      "Black pepper to taste",
    ],
    instructions: [
      "Pat the salmon fillets dry and season with salt and black pepper.",
      "Heat olive oil in a pan over medium-high heat.",
      "Place the salmon skin-side down and cook until golden and crisp.",
      "Flip the salmon and cook until almost done.",
      "Add butter, minced garlic, and parsley to the pan.",
      "Spoon the garlic butter over the salmon while it finishes cooking.",
      "Serve with lemon slices and roasted asparagus and tomatoes.",
    ],
    createdAt: "2026-08-12T11:30:00.000Z",
  },

  {
    id: 5,
    title: "Creamy Vegetable Curry",
    slug: "creamy-vegetable-curry",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786563547/Recipe_5_API_Creamy_Vegetable_Curry_mbzjnp.png",
    category: "Vegetarian",
    cookingTime: "35 mins",
    servings: 4,
    difficulty: "Easy",
    rating: 4.7,
    reviewCount: 89,
    author: "Chef Zara",
    description:
      "A rich and aromatic vegetable curry packed with colorful vegetables, creamy coconut milk, and fragrant spices.",
    ingredients: [
      "1 cup coconut milk",
      "1 carrot",
      "1 red bell pepper",
      "1 cup broccoli",
      "1 potato",
      "1 onion",
      "2 cloves garlic",
      "1 tablespoon curry powder",
      "1 teaspoon turmeric",
      "1 teaspoon ginger",
      "1 tablespoon vegetable oil",
      "Salt to taste",
      "Black pepper to taste",
    ],
    instructions: [
      "Wash and chop all the vegetables into bite-sized pieces.",
      "Heat the vegetable oil in a large pan over medium heat.",
      "Sauté the onion, garlic, and ginger until fragrant.",
      "Add the curry powder and turmeric and stir for about one minute.",
      "Add the carrots, potatoes, bell pepper, and broccoli.",
      "Pour in the coconut milk and stir well.",
      "Cover and simmer until the vegetables are tender.",
      "Season with salt and black pepper.",
      "Serve hot with rice or flatbread.",
    ],
    createdAt: "2026-08-12T12:00:00.000Z",
  },

  {
    id: 6,
    title: "Fluffy Pancakes",
    slug: "fluffy-pancakes",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786564302/Recipe_API_6_Fluffy_Pancakes_uioh0q.png",
    category: "Breakfast",
    cookingTime: "20 mins",
    servings: 4,
    difficulty: "Easy",
    rating: 4.5,
    reviewCount: 76,
    author: "Chef Lily",
    description:
      "Light and fluffy pancakes served with fresh berries, maple syrup, and a dusting of powdered sugar.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1 3/4 cups milk",
      "2 large eggs",
      "3 tablespoons melted butter",
      "1 teaspoon vanilla extract",
      "Fresh strawberries",
      "Fresh blueberries",
      "Maple syrup",
    ],
    instructions: [
      "Mix the flour, sugar, baking powder, and salt in a large bowl.",
      "In a separate bowl, whisk together the milk, eggs, melted butter, and vanilla.",
      "Pour the wet ingredients into the dry ingredients and gently mix until combined.",
      "Heat a lightly buttered pan over medium heat.",
      "Pour a small amount of batter into the pan and cook until bubbles form on the surface.",
      "Flip the pancake and cook until golden brown.",
      "Repeat with the remaining batter.",
      "Stack the pancakes and serve with fresh berries and maple syrup.",
    ],
    createdAt: "2026-08-12T12:30:00.000Z",
  },

  {
    id: 7,
    title: "Classic Cheeseburger",
    slug: "classic-cheeseburger",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786564901/Recipe_7_API_classic_chessburger_lrktpe.png",
    category: "Fast Food",
    cookingTime: "25 mins",
    servings: 2,
    difficulty: "Easy",
    rating: 4.7,
    reviewCount: 118,
    author: "Chef Marcus",
    description:
      "A juicy grilled beef cheeseburger layered with melted cheddar, crisp lettuce, fresh tomatoes, onions, and pickles, served with golden seasoned fries.",
    ingredients: [
      "2 beef burger patties",
      "2 brioche burger buns",
      "2 slices cheddar cheese",
      "2 lettuce leaves",
      "1 tomato",
      "1/2 red onion",
      "4 pickle slices",
      "2 tablespoons mayonnaise",
      "1 tablespoon ketchup",
      "1 tablespoon mustard",
      "2 cups potatoes",
      "1 tablespoon vegetable oil",
      "Salt to taste",
      "Black pepper to taste",
    ],
    instructions: [
      "Season the beef patties with salt and black pepper.",
      "Slice the potatoes into fries and season lightly.",
      "Bake or fry the potatoes until golden and crispy.",
      "Heat a grill or skillet over medium-high heat.",
      "Cook the beef patties until browned and fully cooked.",
      "Place cheddar cheese on the patties and allow it to melt.",
      "Toast the brioche buns lightly.",
      "Spread mayonnaise, ketchup, and mustard on the buns.",
      "Layer the lettuce, tomato, beef patty, onion, and pickles on the bun.",
      "Serve the cheeseburger with the golden fries.",
    ],
    createdAt: "2026-08-12T13:00:00.000Z",
  },

  {
    id: 8,
    title: "Chicken Alfredo Pasta",
    slug: "chicken-alfredo-pasta",
    image:
      "https://res.cloudinary.com/dbej9cnnv/image/upload/v1786565276/Recipe_8_API_Chicken_Alfredo_Pasta_xmkkzt.png",
    category: "Italian",
    cookingTime: "30 mins",
    servings: 3,
    difficulty: "Easy",
    rating: 4.8,
    reviewCount: 135,
    author: "Chef Tobi",
    description:
      "Creamy fettuccine Alfredo topped with tender grilled chicken, Parmesan cheese, fresh parsley, and cracked black pepper.",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts",
      "1 cup heavy cream",
      "1/2 cup Parmesan cheese",
      "3 tablespoons butter",
      "3 cloves garlic",
      "1 tablespoon fresh parsley",
      "1 tablespoon olive oil",
      "Salt to taste",
      "Black pepper to taste",
    ],
    instructions: [
      "Season the chicken breasts with salt, black pepper, and your preferred herbs.",
      "Heat olive oil in a pan and grill the chicken until golden brown and fully cooked.",
      "Cook the fettuccine according to the package instructions and drain.",
      "Melt the butter in a large pan and sauté the minced garlic until fragrant.",
      "Add the heavy cream and simmer gently.",
      "Stir in the Parmesan cheese until the sauce becomes smooth and creamy.",
      "Add the cooked pasta and toss until evenly coated.",
      "Slice the grilled chicken and place it over the pasta.",
      "Garnish with fresh parsley and Parmesan before serving.",
    ],
    createdAt: "2026-08-12T13:30:00.000Z",
  },
];
