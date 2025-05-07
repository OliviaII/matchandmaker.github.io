/*  = Test 'all' in themes to see every photo
*/

// Lets the user press enter key to search + function
document.getElementById('search-button').addEventListener('click', function () {
  console.log('Search button clicked');
  handleSearch();
});

// Words that are excluded
const colorWords = [
  "red", "blue", "green", "yellow", "pink", "purple", "orange",
  "black", "white", "gray", "brown", "beige", "turquoise", "lavender"
];

// Lets the user press enter key to search
document.getElementById('search-button').addEventListener('click', handleSearch);
document.getElementById('search-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleSearch();
  }
});



// Function to handle search input
function handleSearch() {
  const input = document.getElementById('search-input').value.toLowerCase().trim();

  if (colorWords.includes(input)) {
    alert("Please enter a theme, not a color. Color searches belong on a different page.");
    return;
  }
  runSearch(input);
}

  
// Function to run search and display results
function runSearch(input) {
  const query = input.toLowerCase().trim();
  const keywords = query.split(/\s+/);

  let resultsFound = false;

  // Clear galleries
  document.getElementById('bead-gallery').innerHTML = '';
  document.getElementById('charm-gallery').innerHTML = '';
  document.getElementById('color-gallery').innerHTML = '';

  document.getElementById('results').classList.remove('hidden');
  document.getElementById('color-gallery').classList.remove('hidden');
  document.getElementById('bead-gallery').classList.remove('hidden');
  document.getElementById('charm-gallery').classList.remove('hidden');

  // Render & sort images that match keywords into each gallery
  Object.entries(categorizedImages).forEach(([category, images]) => {
    const galleryId = {
      beads: 'bead-gallery',
      charms: 'charm-gallery',
      colors: 'color-gallery'
    }[category];

    const gallery = document.getElementById(galleryId);

    images.forEach(img => {
      if (matchesAllKeywords(img.tags, keywords)) {
        resultsFound = true;

        const label = document.createElement('label');
        label.className = 'photo-box';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const image = document.createElement('img');
        image.src = img.src;
        image.alt = 'search result';

        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = img.caption || img.tags.join(', ');

        label.appendChild(checkbox);
        label.appendChild(image);
        label.appendChild(caption);
        gallery.appendChild(label);
      }
    });
  });

  // Check if any results were found
  if (!resultsFound) {
    document.getElementById('results').classList.add('hidden');
    alert("No results found for your search.");
  } else {
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('color-gallery').classList.remove('hidden');
    document.getElementById('bead-gallery').classList.remove('hidden');
    document.getElementById('charm-gallery').classList.remove('hidden');
  }
}




  // Match each photo to keywords by beads, charms, and colors
  const categorizedImages = {
    beads: [
      { src: 'Gallery/black gold beads.jpg', tags: ['black', 'gold', 'beads', 'galaxy', 'dark', 'dragon', 'elegant', 'all'], caption: 'Elegant black and gold beads, perfect for bold and luxurious designs.' },
      { src: 'Gallery/black volcanic beads.jpg', tags: ['black', 'volcano', 'bumpy', 'beads', 'galaxy', 'dark', 'dragon', 'all'], caption: 'Bumpy black volcanic beads' },
      { src: 'Gallery/blue black beads.jpg', tags: ['blue', 'black', 'sparkle', 'beads', 'galaxy', 'all'], caption: 'Sparkling blue and black beads' },
      { src: 'Gallery/brown wood star charm_bead.jpg', tags: ['brown', 'wood', 'star', 'beads', 'charm', 'galaxy', 'forest', 'woodland', 'all'], caption: 'Brown wood star charm beads' },
      { src: 'Gallery/dark green beads.jpg', tags: ['dark', 'green', 'speckled', 'shiny', 'sparkle', 'beads', 'forest', 'woodland', 'leaf', 'leaves', 'all'], caption: 'Dark green speckled beads' },
      { src: 'Gallery/green beads.jpg', tags: ['green', 'beads', 'light', 'forest', 'woodland', 'leaf', 'leaves', 'flower', 'garden', 'spring', 'all'], caption: 'Light green beads' },
      { src: 'Gallery/green brown beads.jpg', tags: ['green', 'brown', 'mixed', 'swirl', 'speckled', 'beads', 'forest', 'woodland', 'dragon', 'ancient', 'time', 'all'], caption: 'Green and brown swirl beads' },
      { src: 'Gallery/green seed beads.jpg', tags: ['green', 'beads', 'small', 'forest', 'woodland', 'fairytale', 'leaf', 'leaves','fantasy', 'garden', 'spring', 'all'], caption: 'Tiny green seed beads to add a forest-fairy detail to your creation.' },
      { src: 'Gallery/marbled red beads.jpg', tags: ['red', 'marbled', 'beads', 'sparkle', 'dragon', 'ancient', 'fairytale', 'fairy', 'fantasy', 'flower', 'garden', 'spring', 'all'], caption: 'Fiery marbled red beads — ideal for a mystical or ancient theme.' },
      { src: 'Gallery/orange beads.jpg', tags: ['orange', 'beads', 'sparkle', 'speckled', 'flower', 'garden', 'spring', 'all'], caption: 'Sparkling orange beads' },
      { src: 'Gallery/pink bear charm_bead.jpg', tags: ['pink', 'bear', 'beads', 'charm', 'sparkle', 'child', 'childish', 'fantasy', 'fairytale', 'fairy', 'fun', 'all'], caption: 'Pink bear charm beads' },
      { src: 'Gallery/pink heart charm_bead.jpg', tags: ['pink', 'heart', 'beads', 'charm', 'sparkle', 'love', 'heart', 'romantic', 'flower', 'garden', 'spring', 'fairytale', 'all'], caption: 'Pink heart charm beads' },
      { src: 'Gallery/purple beads.jpg', tags: ['purple', 'beads', 'sparkle', 'galaxy', 'dragon', 'ancient', 'time', 'fairytale', 'fantasy', 'fairy', 'sky', 'all'], caption: 'Sparkling purple beads' },
      { src: 'Gallery/red pink beads.jpg', tags: ['red', 'pink', 'mixed', 'beads', 'sparkle', 'flower', 'garden', 'spring', 'love', 'romantic', 'heart', 'dragon', 'all'], caption: 'Red and pink mixed beads' },
      { src: 'Gallery/sparkle orange beads.jpg', tags: ['orange', 'sparkle', 'beads', 'flower', 'garden', 'spring', 'fantasy', 'all'], caption: 'Sparkling orange beads' },
      { src: 'Gallery/white orange beads.jpg', tags: ['white', 'orange', 'beads', 'sparkle', 'speckled', 'glow-in-the-dark', 'flower', 'garden', 'spring', 'fantasy', 'all'], caption: 'White and orange beads' },
      { src: 'Gallery/white pink beads.jpg', tags: ['white', 'pink', 'beads', 'sparkle', 'speckled', 'flower', 'garden', 'spring', 'fantasy', 'love', 'romantic', 'all'], caption: 'Soft pink and white beads for a dreamy, romantic piece.' },
      { src: 'Gallery/white seed beads.jpg', tags: ['white', 'beads', 'small', 'galaxy', 'fantasy', 'fairytale', 'fairy', 'flower', 'garden', 'spring', 'all'], caption: 'Small white seed beads' }
    ],

    //charms break
    charms: [
      { src: 'Gallery/brown wood star charm_bead.jpg', tags: ['brown', 'wood', 'star', 'beads', 'charm', 'galaxy', 'forest', 'woodland', 'all'], caption: 'Brown wood star charm beads' },
      { src: 'Gallery/green flower charms.jpg', tags: ['green', 'flower', 'charm', 'glass', 'sparkle', 'forest', 'woodland', 'leaf', 'leaves', 'garden', 'spring', 'mushroom', 'fantasy', 'fairytale', 'fairy', 'spring', 'garden', 'all'], caption: 'Green flower charms' },
      { src: 'Gallery/green grad leaf charm.jpg', tags: ['green', 'charm', 'sparkle', 'glass', 'forest', 'woodland', 'leaf', 'leaves', 'gradient', 'light', 'fantasy', 'fairytale', 'fairy', 'garden', 'spring', 'all'], caption: 'Green gradient leaf charm' },
      { src: 'Gallery/green leaf charm.jpg', tags: ['green', 'charm', 'sparkle', 'glass', 'forest', 'woodland', 'leaf', 'leaves', 'fantasy', 'fairytale', 'fairy', 'garden', 'spring', 'all'], caption: 'Glass leaf charms — bring the beauty of the forest into your jewelry.' },
      { src: 'Gallery/metal mushroom charm.jpg', tags: ['metal', 'silver', 'mushroom', 'charm', 'forest', 'woodland', 'fantasy', 'fairytale', 'fairy', 'garden', 'spring', 'all'], caption: 'Silver mushroom charm' },
      { src: 'Gallery/pink bear charm_bead.jpg', tags: ['pink', 'bear', 'beads', 'charm', 'sparkle', 'child', 'childish', 'fantasy', 'fairytale', 'fairy', 'fun', 'all'], caption: 'Playful bear charms for whimsical, child-like designs.' },
      { src: 'Gallery/pink heart charm_bead.jpg', tags: ['pink', 'heart', 'beads', 'charm', 'sparkle', 'love', 'heart', 'romantic', 'flower', 'garden', 'spring', 'fairytale', 'all'], caption: 'Pink heart charm beads' },
      { src: 'Gallery/pink flower charm.jpg', tags: ['pink', 'flower', 'charm', 'sparkle', 'glass', 'fantasy', 'fairytale', 'fairy', 'garden', 'spring', 'gradient', 'light', 'all'], caption: 'Pink flower charm' },
      { src: 'Gallery/pink leaf charm.jpg', tags: ['pink', 'leaf', 'charm', 'sparkle', 'glass', 'forest', 'woodland', 'fantasy', 'fairytale', 'fairy', 'child', 'childish', 'garden', 'spring', 'all'], caption: 'Pink leaf charm' },
      { src: 'Gallery/purple flower charm.jpg', tags: ['purple', 'flower', 'charm', 'sparkle', 'plastic', 'fantasy', 'fairytale', 'fairy', 'garden', 'spring', 'all'], caption: 'Purple flower charm' },
      { src: 'Gallery/white flower charm.jpg', tags: ['white', 'flower', 'charm', 'sparkle', 'plastic', 'fantasy', 'fairytale', 'fairy', 'garden', 'spring', 'all'], caption: 'White flower charm' },
      { src: 'Gallery/white flower charms.jpg', tags: ['white', 'iridescent', 'flower', 'charm', 'sparkle', 'glass', 'fantasy', 'fairytale', 'fairy', 'garden', 'spring', 'light', 'all'], caption: 'White flower charms' },
      { src: 'Gallery/white marble star charm.jpg', tags: ['white', 'brown', 'marble', 'star', 'charm', 'sparkle', 'galaxy', 'fantasy', 'fairytale', 'fairy', 'ancient', 'time', 'all'], caption: 'White marble star charm' },
      { src: 'Gallery/white moon charm.jpg', tags: ['white', 'moon', 'charm', 'sparkle', 'galaxy', 'fantasy', 'fairytale', 'fairy', 'ancient', 'all'], caption: 'Celestial moon charms to add a magical touch to any piece.' },
      { src: 'Gallery/white iri star charm.jpg', tags: ['white', 'iridescent', 'star', 'charm', 'sparkle', 'galaxy', 'fantasy', 'all'], caption: 'White iridescent star charm' },
    ],


    //colors break
    colors: [
      { src: "Colors/light red.png", tags: ['mushroom', 'flower', 'flowers', 'fairytale', 'love', 'heart', 'romantic', 'ancient', 'dragon', 'fire', 'garden', 'spring', 'all'], caption: 'A light shade of red' },
      
      { src: "Colors/dark red.jpg", tags: ['mushroom', 'flower', 'flowers', 'fairytale', 'love', 'heart', 'romantic', 'ancient', 'dragon', 'fire', 'ancient', 'garden', 'all'], caption: 'A dark shade of red' },
      
      { src: "Colors/light orange.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'spring', 'fantasy', 'all'], caption: 'A light shade of orange' },
      
      { src: "Colors/dark orange.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'spring', 'fantasy', 'fire', 'ancient', 'all'], caption: 'A dark shade of orange' },
      
      { src: "Colors/light yellow.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'spring', 'child', 'childlish', 'all'], caption: 'A light shade of yellow' },
      
      { src: "Colors/dark yellow.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'spring', 'fantasy', 'mushroom', 'all'], caption: 'A dark shade of yelllow' },
      
      { src: "Colors/light green.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'spring', 'forest', 'woodland', 'leaf', 'leaves', 'all'], caption: 'A light shade of green' },
      
      { src: "Colors/dark green.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'spring', 'forest', 'woodland', 'leaf', 'leaves', 'ancient', 'dragon', 'time', 'all'], caption: 'A dark shade of green' },
      
      { src: "Colors/light blue.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'spring', 'fantasy', 'galaxy', 'sky', 'star', 'stars', 'moon', 'moons', 'all'], caption: 'A light shade of blue' },
      
      { src: "Colors/dark blue.png", tags: ['flower', 'flowers', 'fairytale', 'fantasy', 'galaxy', 'sky', 'star', 'stars', 'moon', 'moons', 'dragon', 'ancient', 'time', 'all'], caption: 'A dark shade of blue' },
      
      { src: "Colors/light purple.png", tags: ['flower', 'flowers', 'fairytale', 'garden', 'child', 'childish', 'fantasy', 'galaxy', 'sky', 'dragon', 'star', 'stars', 'moon', 'moons', 'ancient', 'time', 'all'], caption: 'A light shade of purple' },
      
      { src: "Colors/dark purple.jpg", tags: ['flower', 'flowers', 'fairytale', 'fantasy', 'galaxy', 'sky', 'star', 'stars', 'moon', 'moons', 'ancient', 'dragon', 'time', 'elegant', 'all'], caption: 'A dark shade of purple' },
      
      { src: "Colors/black.png", tags: ['galaxy', 'dark', 'dragon', 'ancient', 'time', 'elegant', 'flower', 'flowers', 'fantasy', 'elegant', 'all'], caption: 'Color black' },
      
      { src: "Colors/white.png", tags: ['galaxy', 'fantasy', 'fairytale', 'fairy', 'flower', 'flowers', 'garden', 'spring', 'elegant', 'all'], caption: 'Color white' },
    ]
  };

  // Check if image matches ALL keywords
  function matchesAllKeywords(tags, keywords) {
    return keywords.every(kw => tags.includes(kw));
  }

