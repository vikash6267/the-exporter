import React from 'react';
import grainsImage from '../../assests/blog/3.jpg'; // Assuming this is the path to your image

const GrainsOfTheWorld = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Grains of the World: A Global Pantry at Your Doorstep</h1>
      <img src={grainsImage} alt="Grains of the World" className="mb-8 rounded-lg shadow-md lg:h-[400px]" />
      <p>
        Grains are not just a staple of our diet; they are a reflection of our global diversity. From the lush fields of South America to the highlands of Africa and the Mediterranean basin, grains have sustained civilizations for millennia.
      </p>
      <h2 className="text-2xl font-bold mb-4">Exploring Quinoa: The Superfood Staple</h2>
      <p>
        Quinoa, hailed as a superfood, originates from the Andean region of South America. Packed with protein, fiber, and essential nutrients, quinoa has garnered worldwide attention for its health benefits. Its versatility in cooking makes it a favorite among chefs and home cooks alike.
      </p>
      <h2 className="text-2xl font-bold mb-4">Amaranth: A Nutrient-Rich Grain with Ancient Roots</h2>
      <p>
        Amaranth traces its origins back to ancient civilizations in Mesoamerica and the Andes. This pseudo-grain is not only gluten-free but also packed with essential nutrients, including iron, magnesium, and calcium.
      </p>
      <h2 className="text-2xl font-bold mb-4">Teff: The Tiny Grain with Big Potential</h2>
      <p>
        Teff, a staple in Ethiopian cuisine, is the world’s smallest grain but packs a nutritional punch. It is rich in iron, calcium, and resistant starch, making it a valuable addition to a balanced diet.
      </p>
      <h2 className="text-2xl font-bold mb-4">Farro: An Ancient Grain Making a Modern Comeback</h2>
      <p>
        Farro, an ancient wheat variety, has been cultivated in the Mediterranean region for thousands of years. Its nutty flavor and chewy texture make it a favorite in Italian cuisine.
      </p>
      <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
      <p>
        Grains of the world offer a passport to culinary adventure, inviting us to explore new flavors, textures, and traditions. From quinoa and amaranth to teff and farro, the global pantry is brimming with possibilities. So next time you’re in the kitchen, let your taste buds travel the world and savor the diversity that grains have to offer.
      </p>
    </div>
  );
};

export default GrainsOfTheWorld;
