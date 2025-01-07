export const categories = [
    { id: '1', name: 'Business', slug: 'business' },
    { id: '2', name: 'Entertainment', slug: 'entertainment' },
    { id: '3', name: 'General', slug: 'general' },
    { id: '4', name: 'Health', slug: 'health' },
    { id: '5', name: 'Science', slug: 'science' },
    { id: '6', name: 'Sports', slug: 'sports' },
    { id: '7', name: 'Technology', slug: 'technology' },
  ]
  
  export const newsArticles = [
    {
      id: '1',
      title: 'Air India Flight Makes Emergency Landing',
      excerpt: 'A Delhi-bound Air India flight on Sunday made an emergency landing after one of its engines shut off midair...',
      content: 'A Delhi-bound Air India flight on Sunday made an emergency landing after one of its engines shut off midair, sources in the airport said. According to officials, all passengers are safe and the incident is being investigated by aviation authorities...',
      category: 'general',
      author: 'John Doe',
      date: '2024-01-07',
      image: '/air_india.avif',
      source: 'The Hindu'
    },
    {
      id: '2',
      title: 'IGL Can Unlock Value For Its Gas Distribution',
      excerpt: 'Shares of Indraprastha Gas Ltd. (IGL), the City Gas Distribution company will be in focus on Tuesday...',
      content: 'Shares of Indraprastha Gas Ltd. (IGL), the City Gas Distribution company will be in focus on Tuesday, January 7, after prospects of value unlocking emerged for the company...',
      category: 'business',
      author: 'Jane Smith',
      date: '2024-01-07',
      image: '/gas_distribution.jpg',
      source: 'Economic Times'
    },
    {
      id: '3',
      title: 'New Study Reveals Benefits of Intermittent Fasting',
      excerpt: 'Researchers at Stanford University have found compelling evidence supporting the health benefits of intermittent fasting...',
      content: 'A groundbreaking study conducted by researchers at Stanford University has revealed significant health benefits associated with intermittent fasting. The research, which spanned over two years and involved more than 1,000 participants, found that those who practiced intermittent fasting showed improved metabolic health, reduced inflammation, and better weight management compared to the control group...',
      category: 'health',
      author: 'Dr. Emily Johnson',
      date: '2024-01-08',
      image: '/gas_distribution.jpg',
      source: 'Health Today'
    },
    {
      id: '4',
      title: 'SpaceX Successfully Launches Starship to Orbit',
      excerpt: "SpaceX's Starship, the world's most powerful rocket, has successfully reached orbit for the first time...",
      content: `In a historic achievement for space exploration, SpaceX's Starship rocket has successfully reached orbit for the first time. The launch, which took place early Thursday morning from the Starbase facility in Texas, marks a significant milestone in the company's ambitious plans for interplanetary travel. Elon Musk, CEO of SpaceX, called it "a giant leap towards making life multiplanetary."...' `,
      category: 'science',
      author: 'Michael Chang',
      date: '2024-01-09',
      image: '/air_india.avif',
      source: 'Space News'
    },
    {
      id: '5',
      title: 'Global Tech Giants Announce Joint AI Ethics Board',
      excerpt: 'Leading technology companies including Google, Microsoft, and OpenAI have joined forces to create a global AI ethics board...',
      content: 'In a unprecedented move, major tech giants including Google, Microsoft, OpenAI, and others have announced the formation of a joint Artificial Intelligence Ethics Board. This independent body will be tasked with developing and enforcing ethical guidelines for AI development and deployment. The board aims to address growing concerns about AI safety, bias, and the potential societal impacts of advanced AI systems...',
      category: 'technology',
      author: 'Sarah Lee',
      date: '2024-01-10',
      image: '/air_india.avif',
      source: 'Tech Insider'
    },
    {
      id: '6',
      title: 'Record-Breaking Heatwave Sweeps Across Europe',
      excerpt: 'Several European countries are experiencing unprecedented high temperatures, raising concerns about climate change...',
      content: 'A severe heatwave is currently gripping much of Europe, with temperatures soaring to record-breaking levels in multiple countries. Meteorologists report that cities like Paris, Berlin, and Rome have seen temperatures exceed 40°C (104°F) for several consecutive days. The extreme weather has led to wildfires, drought conditions, and increased hospitalizations, prompting urgent discussions about climate change mitigation strategies...',
      category: 'environment',
      author: 'Pierre Dubois',
      date: '2024-01-11',
      image: '/gas_distribution.jpg',
      source: 'Climate Watch'
    },
    {
      id: '7',
      title: `Major Breakthrough in Alzheimer's Treatment Announced`,
      excerpt: `Scientists at Johns Hopkins University have developed a promising new drug that could slow the progression of Alzheimer's disease...`,
      content: `Researchers at Johns Hopkins University have announced a significant breakthrough in the treatment of Alzheimer's disease. The newly developed drug, named ALZ-435, has shown remarkable results in early clinical trials, effectively slowing the progression of the disease in 70% of participants. This development offers new hope for millions of people affected by Alzheimer's worldwide and could potentially revolutionize dementia care...`,
      category: 'health',
      author: 'Dr. Robert Chen',
      date: '2024-01-12',
      image: '/air_india.avif',
      source: 'Medical Journal'
    },
    {
      id: '8',
      title: 'Global Stock Markets Rally as Inflation Fears Ease',
      excerpt: 'Stock markets worldwide have seen significant gains as new economic data suggests inflation is cooling...',
      content: `Global stock markets experienced a strong rally on Wednesday as newly released economic data indicated a cooling of inflation in major economies. The U.S. Dow Jones Industrial Average surged by 2.3%, while European and Asian markets also saw substantial gains. Economists attribute this positive trend to effective monetary policies and improving supply chain conditions, raising hopes for a 'soft landing' of the global economy...`,
      category: 'business',
      author: 'Emma Rodriguez',
      date: '2024-01-13',
      image: '/air_india.avif',
      source: 'Financial Times'
    },
    {
      id: '9',
      title: `Revolutionary Quantum Computer Achieves 'Quantum Supremacy'`,
      excerpt: `IBM's latest quantum computer has solved a problem deemed impossible for classical supercomputers...`,
      content: `IBM has announced that its newest quantum computer, the IBM Q System Two, has achieved 'quantum supremacy' by solving a complex mathematical problem that would take the world's most powerful classical supercomputer thousands of years to complete. This milestone in quantum computing opens up new possibilities in fields such as cryptography, drug discovery, and climate modeling, potentially revolutionizing various industries...`,
      category: 'technology',
      author: 'Dr. Quantum Patel',
      date: '2024-01-14',
      image: '/gas_distribution.jpg',
      source: 'Quantum Tech Review'
    },
    {
      id: '10',
      title: 'Historic Peace Agreement Signed in Middle East',
      excerpt: 'Leaders from Israel and Palestine have signed a landmark peace agreement, ending decades of conflict...',
      content: `In a historic moment for international diplomacy, leaders from Israel and Palestine have signed a comprehensive peace agreement, bringing an end to one of the world's longest-running conflicts. The agreement, brokered by a coalition of international mediators, includes provisions for a two-state solution, shared governance of Jerusalem, and economic cooperation. World leaders have hailed this as a monumental step towards lasting peace in the region...`,
      category: 'politics',
      author: 'Ahmed Hassan',
      date: '2024-01-15',
      image: '/air_india.avif',
      source: 'Global Affairs'
    },
    {
      id: '11',
      title: 'Artificial Photosynthesis Breakthrough Could Revolutionize Clean Energy',
      excerpt: 'Scientists have developed a highly efficient artificial photosynthesis system that could provide a new source of clean energy...',
      content: 'A team of researchers from MIT and Berkeley have announced a major breakthrough in artificial photosynthesis technology. Their new system can convert sunlight, water, and carbon dioxide into energy-rich fuels with an efficiency that rivals natural photosynthesis. This development could pave the way for a new generation of clean energy technologies, potentially offering a powerful tool in the fight against climate change and reducing dependence on fossil fuels...',
      category: 'science',
      author: 'Dr. Lisa Green',
      date: '2024-01-16',
      image: '/air_india.avif',
      source: 'Science Daily'
    },
    {
      id: '12',
      title: 'Global Initiative Launched to Clean Up Ocean Plastic',
      excerpt: `A coalition of countries and major corporations have committed $1 billion to remove plastic waste from the world's oceans...`,
      content: `In a landmark environmental initiative, a group of 20 countries and 50 major corporations have pledged $1 billion to combat ocean plastic pollution. The 'Clean Seas Alliance' aims to remove 90% of floating plastic waste from the world's oceans by 2030 using innovative technologies such as autonomous cleanup vessels and biodegradable plastics. This global effort represents one of the most ambitious environmental cleanup projects in history...`,
      category: 'environment',
      author: 'Marina Costa',
      date: '2024-01-17',
      image: '/gas_distribution.jpg',
      source: 'Environmental Report'
    },
    {
      id: '13',
      title: 'Global Initiative Launched to Clean Up Ocean Plastic',
      excerpt: `A coalition of countries and major corporations have committed $1 billion to remove plastic waste from the world's oceans...`,
      content: `In a landmark environmental initiative, a group of 20 countries and 50 major corporations have pledged $1 billion to combat ocean plastic pollution. The 'Clean Seas Alliance' aims to remove 90% of floating plastic waste from the world's oceans by 2030 using innovative technologies such as autonomous cleanup vessels and biodegradable plastics. This global effort represents one of the most ambitious environmental cleanup projects in history...`,
      category: 'entertainment',
      author: 'Marina Costa',
      date: '2024-01-17',
      image: '/gas_distribution.jpg',
      source: 'Environmental Report'
    },
    {
        id: '14',
        title: 'Lionel Messi Wins Record-Breaking 8th Ballon d’Or',
        excerpt: 'Lionel Messi has made history by winning his eighth Ballon d’Or, solidifying his legacy as one of the greatest football players of all time...',
        content: 'Lionel Messi, the Argentine football superstar, has won his record-breaking eighth Ballon d’Or during a ceremony in Paris. Messi, who led Argentina to a historic World Cup victory last year, thanked his teammates and fans for their unwavering support. The award further cements Messi’s status as a football legend...',
        category: 'sports',
        author: 'Sophia Carter',
        date: '2024-01-10',
        image: '/messi.jpg',
        source: 'Sports Illustrated'
      },
      {
        id: '15',
        title: 'Serena Williams Announces Retirement from Tennis',
        excerpt: 'After an illustrious career spanning over two decades, Serena Williams has officially announced her retirement from professional tennis...',
        content: 'Serena Williams, regarded as one of the greatest tennis players in history, has announced her retirement. With 23 Grand Slam titles and countless other accolades, Williams said it was time to focus on her family and business ventures. Fans and fellow athletes celebrated her incredible contributions to the sport...',
        category: 'sports',
        author: 'James Wilson',
        date: '2024-01-11',
        image: '/serena.webp',
        source: 'Tennis Weekly'
      },
      {
        id: '16',
        title: 'India Clinches Victory in Thrilling Cricket World Cup Final',
        excerpt: 'In a nail-biting finish, India defeated Australia to win the ICC Cricket World Cup 2024, bringing the trophy home after 12 years...',
        content: 'India emerged victorious in the ICC Cricket World Cup 2024 after defeating Australia in a thrilling final held at the Melbourne Cricket Ground. Led by captain Rohit Sharma, the Indian team displayed exceptional performance, with Virat Kohli’s century and Jasprit Bumrah’s bowling being the highlights of the match. The victory was celebrated with massive enthusiasm across the country...',
        category: 'sports',
        author: 'Aarav Patel',
        date: '2024-01-12',
        image: '/cricket.jpg',
        source: 'ESPN Cricket'
      }
      
  ]
  
  