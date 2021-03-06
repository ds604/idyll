
const exampleGroups = [
  {
    title: 'Explorable Explanations',
    examples: [
      {
        label: "Beat Basics",
        subtitle: "Explore 3/4 and 6/8 time using John Varney's rhythm wheel.",
        href: 'https://megan-vo.github.io/basic-beats/',
        image: 'beat-basics.png',
        sourceUrl: "https://github.com/megan-vo/basic-beats"
      },
      {
        label: "How does the eye work?",
        href: 'https://idyll.pub/post/the-eye-5b169094cce3bece5d95e964/',
        image: 'the-eye.png'
      },
      {
        label: "The Beginner's Guide to Dimensionality Reduction",
        subtitle: "Explore the methods that data scientists use to visualize high-dimensional data.",
        href: 'https://idyll.pub/post/dimensionality-reduction-293e465c2a3443e8941b016d/',
        image: 'https://idyll.pub/post/dimensionality-reduction-293e465c2a3443e8941b016d/static/images/share.png',
        sourceUrl: "https://github.com/mathisonian/dimensionality-reduction"
      },
      {
        label: 'The Math of Card Shuffling',
        subtitle: "Riffling from factory order to complete randomness.",
        href: 'https://fredhohman.com/card-shuffling/',
        image: 'cards.png',
        sourceUrl: "https://github.com/fredhohman/card-shuffling"
      },
      {
        label: 'How to Tune a Guitar',
        subtitle: "An interactive audio guide with guitars and a little music theory.",
        href: 'https://mathisonian.github.io/idyll/how-to-tune-a-guitar/',
        image: 'how-to-tune-a-guitar.png',
        sourceUrl: "https://github.com/mathisonian/how-to-tune-a-guitar"
      },
      {
        label: 'The Barnes-Hut Approximation',
        subtitle: "Efficient computation of N-body forces",
        href: 'https://jheer.github.io/barnes-hut/',
        image: 'barnes-hut.png',
        sourceUrl: "https://github.com/jheer/barnes-hut"
      },
      {
        label: 'Kernel Density Estimation',
        subtitle: 'An interactive explanation of the statistical technique',
        href: 'https://mathisonian.github.io/kde/',
        image: 'kde.png',
        sourceUrl: "https://github.com/mathisonian/kde"
      },
      {
        label: 'The Etymology of Trig Functions',
        subtitle: 'A graphic walkthrough of mathematical history',
        href: 'https://mathisonian.github.io/trig/etymology/',
        image: 'trig.png',
        sourceUrl: "https://github.com/mathisonian/trig/"
      },
      {
        label: 'Travelling Salesman Algorithms',
        subtitle: 'From Naive to Christofide',
        href: 'https://cse442-17f.github.io/Traveling-Salesman-Algorithms/',
        image: 'travelling-salesman.png'
      },
      {
        label: 'Multi-Armed Bandits',
        subtitle: 'An exploration of epsilon greedy and UCB1 algorithms',
        href: 'https://cse442-17f.github.io/LinUCB/',
        image: 'multi-armed-bandits.png'
      },
      {
        label: 'The Explanation & Comparison of Graph Searches',
        subtitle: 'A walkthrough of depth first, breadth first, and A* search algorithms',
        href: 'https://cse442-17f.github.io/A-Star-Search/',
        image: 'a-star-2.png'
      },
      {
        label: 'Stepping Into the Filter',
        subtitle: "Understanding the edge detection algorithms in your smartphone",
        href: 'https://cse442-17f.github.io/Sobel-Laplacian-and-Canny-Edge-Detection-Algorithms/',
        image: 'sobel-3.png'
      },
      {
        label: 'Sequence Alignment with Dynamic Programming',
        subtitle: 'The Smith-Waterman Algorithm',
        href: 'https://cse442-17f.github.io/Prims-and-A-Star/',
        image: 'smith-waterman.png'
      },
      {
        label: 'Conflict Driven Clause Learning',
        subtitle: 'The Boolean Satisfiability Problem',
        href: 'https://cse442-17f.github.io/Conflict-Driven-Clause-Learning/',
        image: 'conflict-driven.png'
      },
      {
        label: 'Efficient Collision Detection',
        subtitle: "The Gilbert-Johnson-Keerthi distance algorithm",
        href: 'https://cse442-17f.github.io/Gilbert-Johnson-Keerthi-Distance-Algorithm/',
        image: 'collision.png'
      },
    ],
  },
  {
    title : 'Articles and Blog Posts',
    examples: [
      {
        label: 'The D-I-Y Data of Fugazi',
        href: 'https://mathisonian.github.io/diy-data-fugazi/',
        image: 'https://mathisonian.github.io/diy-data-fugazi/static/images/share.png',
        sourceUrl: "https://github.com/mathisonian/diy-data-fugazi/"
      },
      {
        label: 'A Comic Introduction to Idyll',
        subtitle: 'See how Idyll can be used with CSS grid to create a comic-style layout.',
        href: 'https://mathisonian.github.io/idyll-comic/',
        image: 'https://mathisonian.github.io/idyll-comic/static/share.png',
        sourceUrl: "https://github.com/mathisonian/idyll-comic/"
      },
      {
        label: 'Autumn Colormaps',
        subtitle: 'A look at trees, colormaps, and chroma.js',
        href: 'https://mathisonian.github.io/idyll/fall-colors/',
        image: 'https://mathisonian.github.io/idyll/fall-colors/images/share.png',
        sourceUrl: "https://github.com/mathisonian/idyll/tree/master/fall-colors"
      },
      {
        label: 'Who Shapes the Open Web?',
        subtitle: 'An interactive tool to explore membership in W3C working groups.',
        href: 'https://mathisonian.github.io/who-shapes-the-open-web/',
        image: 'https://mathisonian.github.io/who-shapes-the-open-web//images/share.png',
        sourceUrl: "https://github.com/mathisonian/who-shapes-the-open-web/"
      },
      {
        label: 'From Nothing to Something in WebGL Using regl',
        href: 'https://rreusser.github.io/from-nothing-to-something-in-webgl-with-regl/',
        image: 'hello-regl.png',
        sourceUrl: "https://github.com/rreusser/rreusser.github.io/tree/master/src/src/from-nothing-to-something-in-webgl-with-regl"
      },
      {
        label: 'Seattle PD’s Dashcam Problem',
        subtitle: 'Visualizing 27 million frames of video lost over four years',
        href: 'https://mathisonian.github.io/dashcam/',
        image: 'https://mathisonian.github.io/dashcam/images/share.png',
        sourceUrl: "https://github.com/mathisonian/dashcam"
      },
      {
        label: 'The United Complaints of America',
        subtitle: 'Analyzing over 700,000 complaints sent to the Consumer Financial Protection Bureau',
        href: 'https://mathisonian.github.io/consumer-complaints/',
        image: 'complaints-2.gif',
        sourceUrl: 'https://github.com/mathisonian/consumer-complaints'
      },
      {
        label: 'Lorenz Attractor',
        href: 'https://mathisonian.github.io/lorenz/',
        image: 'lorenz.png',
        sourceUrl: 'https://github.com/mathisonian/lorenz'
      },
      {
        label: 'Nonlinear Sliders',
        href: 'https://mathisonian.github.io/idyll/nonlinear-sliders/',
        image: 'nonlinear.png',
        sourceUrl: 'https://github.com/mathisonian/idyll/tree/master/nonlinear-sliders'
      },
    ]
  },
  {
    title: 'Tutorials',
    examples: [{
      label: 'Stacking Scroller Components',
      subtitle: "Introduction to leveraging multiple Scrollers in Idyll",
      href: 'https://idyll.pub/post/stack-scroll-0c3da7fb8e45f3ecb720bcf8/',
      image: 'stacked-scroller.gif',
      sourceUrl: "https://github.com/megan-vo/stacked-scrolling-tutorial"
      },{
      label: 'Using Mapbox with Idyll',
      subtitle: "Add interactive maps to your Idyll posts.",
      href: 'https://mathisonian.github.io/idyll-map-example/',
      image: 'mapbox.png',
      sourceUrl: "https://github.com/mathisonian/idyll-map-example"
      },
      {
      label: 'Announcing idyll.pub',
      subtitle: "Publish interactive blog posts and explorable explanations with Idyll's free hosting service.",
      href: 'https://idyll.pub/post/announcing-idyll-pub-0a3eff0661df3446a915700d/',
      image: 'https://idyll.pub/post/announcing-idyll-pub-0a3eff0661df3446a915700d/static/images/share.png',
      sourceUrl: "https://github.com/mathisonian/announcing-idyll-pub"
      },{
      label: 'Scaffolding Interactives',
      subtitle: 'Rapidly create scroll- and step-based interactives with Idyll',
      href: 'https://mathisonian.github.io/idyll/scaffolding-interactives/',
      image: 'scaffolding-interactives.gif',
      sourceUrl: "https://github.com/mathisonian/scaffolding-interactives"
      },
      {
        label: 'Take a Walk on the Idyll Side',
        subtitle: 'Exploring new ways to create interactive documents',
        href: 'https://mathisonian.github.io/idyll/a-walk-on-the-idyll-side/',
        image: 'walk-on-the-idyll-side.png',
        sourceUrl: "https://github.com/mathisonian/idyll/tree/master/introducing-idyll"
      }, {
        label: 'D3',
        href: 'https://idyll-lang.github.io/idyll-d3-component/',
        image: 'd3.png',
        sourceUrl: "https://github.com/idyll-lang/idyll-d3-component/tree/master/examples/basic"
      },
      {
        label: 'regl',
        href: 'https://idyll-lang.github.io/idyll-regl-component/',
        image: 'regl.png',
        sourceUrl: "https://github.com/idyll-lang/idyll-regl-component/tree/master/examples/basic"
      },
      {
        label: 'Vega Lite',
        href: 'https://idyll-lang.github.io/examples/csv/',
        image: 'vl.png',
        sourceUrl: "https://github.com/idyll-lang/examples/tree/master/csv"
      },
      {
        label: 'Firebase',
        href: 'https://mathisonian.github.io/idyll/firebase/',
        image: 'firebase.png',
        sourceUrl: "https://github.com/mathisonian/idyll/tree/master/firebase"
      },
      {
        label: 'Apparatus',
        href: 'https://mathisonian.com/writing/apparatus',
        image: 'apparatus.png',
        sourceUrl: 'https://github.com/mathisonian/mathisonian.github.io/blob/master/pages/writing/apparatus.js'
      }
    ],
  },
  // {
  //   title: 'Other examples',
  //   examples: [

  //     {
  //       label: 'Scrolly Idyll',
  //       href: 'https://idyll-lang.github.io/idyll/scroll/',
  //       image: 'scroll.gif',
  //     },
  //   ],
  // },
]


function slugify(text)
{
  return text.toString().split(/([A-Z][a-z]+)/).join('-').toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

const indexedItems = {};
exampleGroups.forEach((group) => {
  group.examples.forEach((example) => {
    const slug = slugify(example.label);
    indexedItems[slug] = example;
  })
})

export { indexedItems };
export default exampleGroups;