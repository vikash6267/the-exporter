import React from 'react';
import milletsImage from '../../assests/blog/2.jpg';
const MilletsBenefitsGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <img src={milletsImage} alt="Millets" className="mb-8 rounded-lg shadow-md lg:h-[400px]" />

      <h1 className="text-3xl font-bold mb-4">Exploring the Health Benefits of Millets: A Guide to Nutritious Eating</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Health Benefits of Millets</h2>
        <p className="mb-4">In recent years, millets have emerged as nutritional powerhouses, offering a wide array of health benefits:</p>
        <ul className="list-disc list-inside mb-4">
          <li>High in fiber, essential for digestive health and weight management.</li>
          <li>Gluten-free, making them suitable for individuals with celiac disease or gluten sensitivity.</li>
          <li>Rich in essential vitamins, minerals, and antioxidants.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Incorporating Millets into Your Diet</h2>
        <p className="mb-4">Millets are versatile and easy to incorporate into various dishes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Savory options like millet pilaf and vegetable stir-fry.</li>
          <li>Sweet treats such as millet porridge and coconut millet pudding.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Simple and Nutritious Millet Recipes</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Millet Salad with Roasted Vegetables</h3>
          <p className="mb-2">Instructions:</p>
          <ul className="list-disc list-inside">
            <li>Cook one cup of millet according to package instructions.</li>
            <li>Chop and roast your favorite vegetables.</li>
            <li>Combine millet and roasted vegetables with herbs and lemon juice.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Millet Banana Bread</h3>
          <p className="mb-2">Instructions:</p>
          <ul className="list-disc list-inside">
            <li>Mash ripe bananas and mix with eggs, honey, melted coconut oil, and vanilla extract.</li>
            <li>Stir in cooked millet, flour, baking powder, and optional add-ins.</li>
            <li>Bake until done and cool before slicing.</li>
          </ul>
        </div>
      </div>

      <p className="text-lg">Whether you’re focused on digestive health, managing gluten intolerance, or simply exploring new flavors, millets offer a nutritious and delicious addition to any diet. Try these recipes and discover the benefits of incorporating millets into your meals.</p>
    </div>
  );
};

export default MilletsBenefitsGuide;
