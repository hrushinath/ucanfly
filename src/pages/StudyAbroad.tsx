export default function StudyAbroad() {
  return (
    <main className="bg-white">
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary-900">Study Abroad</h1>
        <h2 className="text-2xl font-semibold mb-4">Opening the Way to Study Abroad</h2>
        <p className="mb-6 text-lg text-gray-700">
          The world is changing at a rapid pace. In such an environment, the importance of a global perspective has also grown manifold. The need of the hour is to equip oneself with relevant skills and knowledge that will help one land well-paid jobs as well as create opportunities for growth and expansion in the future.
        </p>
        <p className="mb-6 text-lg text-gray-700">
          Studying abroad can be a great way to achieve all of this and more. A study abroad program helps you gain a new perspective on things, develop personally and professionally, and pursue academic interests that may not be available to you locally.
        </p>
        <img src="https://ucanfly.in/wp-content/uploads/2022/07/Study-Abroad-University-980x654.jpg.webp" alt="Study Abroad University" className="rounded-xl w-full max-w-2xl mx-auto mb-10" />
        <h2 className="text-2xl font-semibold mb-4">Top Destinations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* United Kingdom */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <img src="https://ucanfly.in/wp-content/uploads/2022/07/london-financial-district-skyline-sunset-980x654.png.webp" alt="UK" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Study in United Kingdom</h3>
            <p className="mb-2 text-gray-700">United Kingdom is famous not only for the biggest Empire in the history they had and for having towns with huge castles, it is the second most popular study destination for the international students from all around the world.</p>
            <a href="/programs#uk" className="text-primary-600 font-semibold hover:underline">View More</a>
          </div>
          {/* USA */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <img src="https://ucanfly.in/wp-content/uploads/2022/07/statue-liberty-with-large-american-flag-new-york-skyline-980x654.png.webp" alt="USA" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Study in USA</h3>
            <p className="mb-2 text-gray-700">There are many reasons why studying in the United States is a good idea. Firstly, the quality of education is extremely high. Almost without exception, the universities in the United States are among the best in the world. Furthermore, the level of research is also very high, and the opportunities for research are wide open. Finally, the country is extremely welcoming and friendly, which will make it easy to settle in the USA.</p>
            <a href="/programs#usa" className="text-primary-600 font-semibold hover:underline">View More</a>
          </div>
          {/* Canada */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <img src="https://ucanfly.in/wp-content/uploads/2022/07/toronto-city-skyline-night-ontario-canada-1-980x630.png.webp" alt="Canada" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Study in Canada</h3>
            <p className="mb-2 text-gray-700">Canada is a great choice if you’re looking to study abroad. Canada is one of the most developed countries in the world, and has many things to offer to those interested in studying abroad. Canada has a large population, making it easy to find a place to live and complete your degree. It also has a warm climate, which makes it a great place to study while experiencing snow.</p>
            <a href="/programs#canada" className="text-primary-600 font-semibold hover:underline">View More</a>
          </div>
          {/* Australia */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <img src="https://ucanfly.in/wp-content/uploads/2022/07/downtown-sydney-skyline-australia-from-top-view-sunset-980x654.png.webp" alt="Australia" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Study in Australia</h3>
            <p className="mb-2 text-gray-700">Australia is a great place to study if you want to travel and meet people from all over the world. If you like outdoor activities, then you should definitely consider studying in Australia. You can explore the outdoors, go on hiking trips, or spend time at a beach. There are also many cultural and social opportunities, such as attending sporting events or visiting museums and galleries.</p>
            <a href="/programs#australia" className="text-primary-600 font-semibold hover:underline">View More</a>
          </div>
          {/* Europe */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <img src="https://ucanfly.in/wp-content/uploads/2022/07/Europe-980x654.png.webp" alt="Europe" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Study in Europe</h3>
            <p className="mb-2 text-gray-700">The European Union is home to some of the continent’s most beautiful cities and most vibrant cultures. In fact, with countries like Germany, France, Italy, and the Netherlands all located within its borders, it’s no wonder why there are so many Europeans living abroad as well as students studying in Europe.</p>
            <a href="/programs#europe" className="text-primary-600 font-semibold hover:underline">View More</a>
          </div>          {/* New Zealand */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=980&h=654&fit=crop" alt="New Zealand" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Study in New Zealand</h3>
            <p className="mb-2 text-gray-700">New Zealand offers world-class education with a focus on practical learning and innovation. Known for its stunning landscapes and welcoming culture, New Zealand provides a safe and friendly environment for international students. With high-quality universities and excellent post-study work opportunities, it's an ideal destination to build your future.</p>
            <a href="/programs#newzealand" className="text-primary-600 font-semibold hover:underline">View More</a>
          </div>        </div>
      </section>
    </main>
  );
}
