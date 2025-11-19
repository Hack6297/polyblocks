// Comprehensive website database for NESA Search Engine
const websiteDatabase = [
    // NESA Products
    {title: "Polyblocks - Official Game", url: "https://polyblocks.onrender.com", snippet: "Polyblocks is a 3D block-building game with multiple game modes including Playground, Battle, Parkour, and Anarchy. Download Pre-test 0.5 now!"},
    {title: "NESA Explorer - Web Browser", url: "https://polyblocks.onrender.com/explorer", snippet: "NESA Explorer is the official web browser for NESA 95. Experience the web with cutting-edge technology from 1995."},
    {title: "NESA 95 - Home", url: "https://polyblocks.onrender.com/home", snippet: "Welcome to NESA 95, your gateway to the digital world. Latest news, updates, and downloads for all NESA products."},
    {title: "Polyblocks Download Center", url: "https://polyblocks.onrender.com/download", snippet: "Download the latest version of Polyblocks Pre-test 0.5. Features include multiplayer support, new game modes, and improved graphics."},
    {title: "NESA Search Engine Documentation", url: "https://polyblocks.onrender.com/docs", snippet: "Learn how to use NESA Search Engine (ASBAN) to find content across the NESA platform. Advanced search tips and tricks included."},
    
    // Search Engines
    {title: "Google - Search Engine", url: "https://www.google.com", snippet: "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for."},
    {title: "Bing - Microsoft Search", url: "https://www.bing.com", snippet: "Bing helps you turn information into action, making it faster and easier to go from searching to doing."},
    {title: "DuckDuckGo - Privacy Search", url: "https://duckduckgo.com", snippet: "The Internet privacy company that empowers you to seamlessly take control of your personal information online, without any tradeoffs."},
    {title: "Yahoo - Search and News", url: "https://www.yahoo.com", snippet: "Yahoo makes it easy to enjoy what matters most in your world. Best in class Yahoo Mail, breaking local, national and global news, finance, sports, music."},
    {title: "Yandex - Russian Search", url: "https://www.yandex.com", snippet: "Yandex is a technology company that builds intelligent products and services powered by machine learning."},
    {title: "Baidu - Chinese Search", url: "https://www.baidu.com", snippet: "Baidu is the leading Chinese language search engine, providing simple and reliable search experiences to hundreds of millions of users."},
    
    // Social Media
    {title: "YouTube - Videos, Music and Live Streams", url: "https://www.youtube.com", snippet: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube."},
    {title: "Facebook - Social Network", url: "https://www.facebook.com", snippet: "Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."},
    {title: "Instagram - Photo Sharing", url: "https://www.instagram.com", snippet: "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."},
    {title: "Twitter - Social Media Platform", url: "https://twitter.com", snippet: "From breaking news and entertainment to sports and politics, get the full story with all the live commentary on Twitter."},
    {title: "TikTok - Short Videos", url: "https://www.tiktok.com", snippet: "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine."},
    {title: "LinkedIn - Professional Network", url: "https://www.linkedin.com", snippet: "LinkedIn is the world's largest professional network with over 800 million members. Find connections, leads, and new opportunities."},
    {title: "Reddit - Dive into anything", url: "https://www.reddit.com", snippet: "Reddit is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in."},
    {title: "Pinterest - Visual Discovery", url: "https://www.pinterest.com", snippet: "Discover recipes, home ideas, style inspiration and other ideas to try on Pinterest."},
    {title: "Snapchat - Camera Company", url: "https://www.snapchat.com", snippet: "Snapchat is a camera and messaging app that connects people to their friends and the world."},
    {title: "Discord - Chat for Communities", url: "https://discord.com", snippet: "Discord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities."},
    {title: "Telegram - Messaging App", url: "https://telegram.org", snippet: "Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed."},
    {title: "WhatsApp - Messaging", url: "https://www.whatsapp.com", snippet: "WhatsApp Messenger: More than 2 billion people in over 180 countries use WhatsApp to stay in touch with friends and family, anytime and anywhere."},
    
    // News & Media
    {title: "CNN - Breaking News", url: "https://www.cnn.com", snippet: "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com."},
    {title: "BBC News - World News", url: "https://www.bbc.com/news", snippet: "Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories from around the world."},
    {title: "The New York Times", url: "https://www.nytimes.com", snippet: "The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate."},
    {title: "Reuters - Business News", url: "https://www.reuters.com", snippet: "Reuters.com brings you the latest news from around the world, covering breaking news in markets, business, politics, entertainment, technology, video and pictures."},
    {title: "The Guardian - News", url: "https://www.theguardian.com", snippet: "Latest news, sport, business, comment, analysis and reviews from the Guardian, the world's leading liberal voice."},
    {title: "Al Jazeera - International News", url: "https://www.aljazeera.com", snippet: "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule."},
    
    // Entertainment & Streaming
    {title: "Netflix - Watch TV Shows Online", url: "https://www.netflix.com", snippet: "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."},
    {title: "Hulu - Stream TV and Movies", url: "https://www.hulu.com", snippet: "Watch thousands of shows and movies, with plans starting at $7.99/month. Stream TV episodes of South Park, Empire, SNL, Modern Family and popular movies."},
    {title: "Disney+ - Streaming Service", url: "https://www.disneyplus.com", snippet: "Stream Disney, Pixar, Marvel, Star Wars, National Geographic and more. All together for the first time ever."},
    {title: "HBO Max - Premium Streaming", url: "https://www.hbomax.com", snippet: "Stream all of HBO together with even more from Warner Bros., DC, Studio Ghibli, Cartoon Network and more."},
    {title: "Twitch - Live Streaming Platform", url: "https://www.twitch.tv", snippet: "Twitch is the world's leading video platform and community for gamers. Watch and chat now with millions of other fans from around the world."},
    {title: "Spotify - Music Streaming", url: "https://www.spotify.com", snippet: "Spotify is a digital music service that gives you access to millions of songs, podcasts and videos from artists all over the world."},
    {title: "Apple Music - Music Service", url: "https://www.apple.com/apple-music", snippet: "Apple Music is a streaming service that allows you to listen to over 90 million songs. Its great features include the ability to download your favorite tracks."},
    {title: "SoundCloud - Music Platform", url: "https://soundcloud.com", snippet: "Discover and play over 265 million music tracks. Join the world's largest online community of artists, bands, podcasters and creators of music & audio."},
    {title: "IMDb - Movies, TV and Celebrities", url: "https://www.imdb.com", snippet: "IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows."},
    
    // Gaming
    {title: "Steam - Gaming Platform", url: "https://store.steampowered.com", snippet: "Steam is the ultimate destination for playing, discussing, and creating games. Browse thousands of games and discover your next favorite."},
    {title: "Epic Games Store", url: "https://www.epicgames.com", snippet: "Download and play PC Games of every genre. We have mods, DLC and Free Games too! Games for everyone."},
    {title: "Xbox - Gaming Console", url: "https://www.xbox.com", snippet: "Experience the new generation of games and entertainment with Xbox. Explore consoles, new and old Xbox games and accessories."},
    {title: "PlayStation - Gaming", url: "https://www.playstation.com", snippet: "The official PlayStation website - explore PlayStation®5, PlayStation®4, PlayStation VR, and the latest games and accessories."},
    {title: "Nintendo - Gaming Company", url: "https://www.nintendo.com", snippet: "Discover Nintendo Switch, the video game system you can play at home or on the go. Plus, get the latest Nintendo news and learn about games."},
    {title: "Roblox - Gaming Platform", url: "https://www.roblox.com", snippet: "Roblox is the ultimate virtual universe that lets you create, share experiences with friends, and be anything you can imagine."},
    {title: "Minecraft - Video Game", url: "https://www.minecraft.net", snippet: "Explore new gaming adventures, accessories, & merchandise on the Minecraft Official Site. Buy & download the game here, or check the site for the latest news."},
    {title: "Fortnite - Battle Royale", url: "https://www.fortnite.com", snippet: "Fortnite is the completely free multiplayer game where you and your friends can jump into Battle Royale or Fortnite Creative."},
    {title: "League of Legends", url: "https://www.leagueoflegends.com", snippet: "League of Legends is a team-based game with over 140 champions to make epic plays with."},
    {title: "IGN - Gaming News", url: "https://www.ign.com", snippet: "IGN is your #1 destination for all video game news, reviews, guides, walkthroughs, and more."},
    
    // Shopping & E-commerce
    {title: "Amazon - Online Shopping", url: "https://www.amazon.com", snippet: "Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection."},
    {title: "eBay - Online Marketplace", url: "https://www.ebay.com", snippet: "Buy & sell electronics, cars, clothes, collectibles & more on eBay, the world's online marketplace."},
    {title: "Walmart - Save Money Live Better", url: "https://www.walmart.com", snippet: "Shop for Every Day Low Prices. Free Shipping on Orders $35+ or Pickup In-Store and get a Pickup Discount."},
    {title: "Target - Online Store", url: "https://www.target.com", snippet: "Shop Target online and in-store for everything from groceries and essentials to clothing and electronics."},
    {title: "Best Buy - Electronics", url: "https://www.bestbuy.com", snippet: "Shop Best Buy for electronics, computers, appliances, cell phones, video games & more new tech."},
    {title: "AliExpress - Shopping", url: "https://www.aliexpress.com", snippet: "Online shopping for the latest electronics, fashion, phone accessories, computer electronics, toys and more."},
    {title: "Etsy - Handmade Goods", url: "https://www.etsy.com", snippet: "Shop for handmade, vintage, custom, and unique gifts for everyone on Etsy."},
    {title: "Newegg - Tech Shopping", url: "https://www.newegg.com", snippet: "Shop the latest computer parts, laptops, GPUs, motherboards, processors, power supplies, cases, and more."},
    
    // Education & Reference
    {title: "Wikipedia - The Free Encyclopedia", url: "https://www.wikipedia.org", snippet: "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation."},
    {title: "Khan Academy - Free Education", url: "https://www.khanacademy.org", snippet: "Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more."},
    {title: "Coursera - Online Courses", url: "https://www.coursera.org", snippet: "Learn online and earn valuable credentials from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM."},
    {title: "edX - Online Learning", url: "https://www.edx.org", snippet: "Access 2000 free online courses from 140 leading institutions worldwide. Gain new skills and earn a certificate of completion."},
    {title: "Udemy - Online Learning", url: "https://www.udemy.com", snippet: "Udemy is an online learning and teaching marketplace with over 183,000 courses and 40 million students."},
    {title: "Duolingo - Language Learning", url: "https://www.duolingo.com", snippet: "Learn a new language with the world's most-downloaded education app! Duolingo is the fun, free app for learning 35+ languages."},
    {title: "Quizlet - Study Tools", url: "https://quizlet.com", snippet: "Simple free learning tools for students and teachers. Create custom flashcards, study sets, and more to help you learn."},
    {title: "Wolfram Alpha - Computational", url: "https://www.wolframalpha.com", snippet: "Wolfram|Alpha brings expert-level knowledge and capabilities to the broadest possible range of people—spanning all professions and education levels."},
    
    // Development & Programming
    {title: "GitHub - Where the world builds software", url: "https://github.com", snippet: "GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories."},
    {title: "Stack Overflow - Developer Community", url: "https://stackoverflow.com", snippet: "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers."},
    {title: "GitLab - DevOps Platform", url: "https://gitlab.com", snippet: "GitLab is the open DevOps platform that brings everyone together to do better software faster."},
    {title: "Bitbucket - Git Solution", url: "https://bitbucket.org", snippet: "Bitbucket is more than just Git code management. Bitbucket gives teams one place to plan projects, collaborate on code, test, and deploy."},
    {title: "CodePen - Front-end Playground", url: "https://codepen.io", snippet: "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work."},
    {title: "JSFiddle - Code Playground", url: "https://jsfiddle.net", snippet: "Test your JavaScript, CSS, HTML or CoffeeScript online with JSFiddle code editor."},
    {title: "MDN Web Docs - Resources for developers", url: "https://developer.mozilla.org", snippet: "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps."},
    {title: "W3Schools - Web Development Tutorials", url: "https://www.w3schools.com", snippet: "W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many more."},
    {title: "FreeCodeCamp - Learn to Code", url: "https://www.freecodecamp.org", snippet: "Learn to code — for free. Build projects. Earn certifications. Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies."},
    {title: "Codecademy - Learn Coding", url: "https://www.codecademy.com", snippet: "Learn the technical skills to get the job you want. Join over 50 million people choosing Codecademy to start a new career."},
    {title: "LeetCode - Coding Practice", url: "https://leetcode.com", snippet: "LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews."},
    {title: "HackerRank - Coding Challenges", url: "https://www.hackerrank.com", snippet: "HackerRank is the market-leading technical assessment and remote interview solution for hiring developers."},
    {title: "npm - Package Manager", url: "https://www.npmjs.com", snippet: "npm is the world's largest software registry. Open source developers use npm to share software."},
    {title: "PyPI - Python Packages", url: "https://pypi.org", snippet: "The Python Package Index (PyPI) is a repository of software for the Python programming language."},
    
    // Design & Creative
    {title: "Adobe Creative Cloud", url: "https://www.adobe.com", snippet: "Adobe Creative Cloud gives you the world's best creative apps and services so you can make anything you can imagine."},
    {title: "Figma - Design Tool", url: "https://www.figma.com", snippet: "Figma connects everyone in the design process so teams can deliver better products, faster."},
    {title: "Canva - Graphic Design", url: "https://www.canva.com", snippet: "Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more."},
    {title: "Dribbble - Design Community", url: "https://dribbble.com", snippet: "Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals."},
    {title: "Behance - Creative Portfolios", url: "https://www.behance.net", snippet: "Behance is the world's largest creative network for showcasing and discovering creative work."},
    {title: "Unsplash - Free Photos", url: "https://unsplash.com", snippet: "Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos."},
    {title: "Pexels - Free Stock Photos", url: "https://www.pexels.com", snippet: "The best free stock photos, royalty free images & videos shared by creators."},
    {title: "Pixabay - Free Images", url: "https://pixabay.com", snippet: "Stunning free images & royalty free stock. Over 2.6 million+ high quality stock images, videos and music shared by our talented community."},
    
    // Cloud & Productivity
    {title: "Google Drive - Cloud Storage", url: "https://drive.google.com", snippet: "Access Google Drive with a free Google account (for personal use) or Google Workspace account (for business use)."},
    {title: "Dropbox - File Hosting", url: "https://www.dropbox.com", snippet: "Dropbox is a modern workspace designed to reduce busywork-so you can focus on the things that matter."},
    {title: "Microsoft OneDrive - Cloud Storage", url: "https://onedrive.live.com", snippet: "Store photos and docs online. Access them from any PC, Mac or phone. Create and work together on Word, Excel or PowerPoint documents."},
    {title: "Google Docs - Online Documents", url: "https://docs.google.com", snippet: "Create and edit text documents right in your browser—no special software required."},
    {title: "Notion - All-in-one Workspace", url: "https://www.notion.so", snippet: "Notion is the all-in-one workspace for your notes, tasks, wikis, and databases."},
    {title: "Trello - Project Management", url: "https://trello.com", snippet: "Trello helps teams move work forward. Collaborate, manage projects, and reach new productivity peaks."},
    {title: "Asana - Work Management", url: "https://asana.com", snippet: "Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business."},
    {title: "Slack - Team Communication", url: "https://slack.com", snippet: "Slack is where work flows. It's where the people you need, the information you share, and the tools you use come together to get things done."},
    {title: "Zoom - Video Conferencing", url: "https://zoom.us", snippet: "Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing."},
    {title: "Microsoft Teams - Collaboration", url: "https://www.microsoft.com/teams", snippet: "Make amazing things happen together at home, work, and school with Microsoft Teams."},
    
    // Travel & Maps
    {title: "Google Maps - Navigation", url: "https://www.google.com/maps", snippet: "Find local businesses, view maps and get driving directions in Google Maps."},
    {title: "Airbnb - Vacation Rentals", url: "https://www.airbnb.com", snippet: "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb."},
    {title: "Booking.com - Hotels", url: "https://www.booking.com", snippet: "Official site of Booking.com. Choose from over a million apartments, hotels, chalets, bed and breakfasts, hostels and more."},
    {title: "Expedia - Travel Booking", url: "https://www.expedia.com", snippet: "Book your next trip with Expedia. Save on cheap flights, hotels, vacation packages, and more. Earn airline miles and hotel points."},
    {title: "TripAdvisor - Travel Reviews", url: "https://www.tripadvisor.com", snippet: "Plan your next trip, read reviews and get travel advice from our community on where to stay and what to do."},
    {title: "Uber - Ride Sharing", url: "https://www.uber.com", snippet: "Uber is a platform where those who drive and deliver can connect with riders, eaters, and restaurants."},
    {title: "Lyft - Rideshare Service", url: "https://www.lyft.com", snippet: "Get a ride in minutes. Or become a driver and earn money on your schedule."},
    
    // Finance & Business
    {title: "PayPal - Online Payments", url: "https://www.paypal.com", snippet: "PayPal has remained at the forefront of the digital payment revolution for more than 20 years."},
    {title: "Venmo - Mobile Payments", url: "https://venmo.com", snippet: "Venmo is a digital wallet that makes money easier for everyone from students to small businesses."},
    {title: "Coinbase - Cryptocurrency", url: "https://www.coinbase.com", snippet: "Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency."},
    {title: "Bloomberg - Business News", url: "https://www.bloomberg.com", snippet: "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News."},
    {title: "CNBC - Business News", url: "https://www.cnbc.com", snippet: "Get stock market quotes, personal finance advice, company news and more. CNBC is the world leader in business news and real-time financial market coverage."},
    {title: "Yahoo Finance - Stock Market", url: "https://finance.yahoo.com", snippet: "At Yahoo Finance, you get free stock quotes, up-to-date news, portfolio management resources, international market data, social interaction and mortgage rates."},
    {title: "Robinhood - Investing", url: "https://robinhood.com", snippet: "Robinhood has commission-free investing, and tools to help shape your financial future. Sign up and get your first stock free."},
    
    // Health & Fitness
    {title: "WebMD - Health Information", url: "https://www.webmd.com", snippet: "Better information. Better health. WebMD provides valuable health information, tools for managing your health, and support to those who seek information."},
    {title: "Mayo Clinic - Medical Center", url: "https://www.mayoclinic.org", snippet: "Mayo Clinic offers expert, whole-person care to everyone who needs healing."},
    {title: "Healthline - Medical Information", url: "https://www.healthline.com", snippet: "Healthline Media, Inc. is an American website and provider of health information headquartered in San Francisco, California."},
    {title: "MyFitnessPal - Fitness App", url: "https://www.myfitnesspal.com", snippet: "MyFitnessPal is the leading app for tracking—and conquering—your nutrition and fitness goals."},
    {title: "Fitbit - Fitness Tracking", url: "https://www.fitbit.com", snippet: "Find your fit with Fitbit's family of fitness products that help you stay motivated and improve your health by tracking your activity, exercise, food, weight and sleep."},
    
    // Technology & Gadgets
    {title: "The Verge - Technology News", url: "https://www.theverge.com", snippet: "The Verge was founded in 2011 in partnership with Vox Media, and covers the intersection of technology, science, art, and culture."},
    {title: "TechCrunch - Startup News", url: "https://techcrunch.com", snippet: "TechCrunch reporting on the business of technology, startups, venture capital funding, and Silicon Valley."},
    {title: "CNET - Tech News", url: "https://www.cnet.com", snippet: "CNET is the world's leader in tech product reviews, news, prices, videos, forums, how-tos and more."},
    {title: "Wired - Technology Magazine", url: "https://www.wired.com", snippet: "Wired is where tomorrow is realized. It is the essential source of information and ideas that make sense of a world in constant transformation."},
    {title: "Engadget - Electronics", url: "https://www.engadget.com", snippet: "Engadget is the original home for technology news and reviews. We cover a wide range of consumer electronics and smart gadgets."},
    {title: "Tom's Hardware - PC Components", url: "https://www.tomshardware.com", snippet: "Tom's Hardware helps you buy the best hardware and build the best PC. Get the latest PC hardware reviews, tech news and more."},
    {title: "AnandTech - Hardware Reviews", url: "https://www.anandtech.com", snippet: "AnandTech is a leading source of computer hardware news and reviews since 1997."},
    
    // Science & Research
    {title: "NASA - Space Exploration", url: "https://www.nasa.gov", snippet: "NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery."},
    {title: "Nature - Science Journal", url: "https://www.nature.com", snippet: "Nature is a British weekly scientific journal founded and based in London. It is one of the most recognizable scientific journals in the world."},
    {title: "Science Magazine", url: "https://www.sciencemag.org", snippet: "Science publishes the very best in research across the sciences, with articles that consistently rank among the most cited in the world."},
    {title: "Scientific American", url: "https://www.scientificamerican.com", snippet: "Scientific American is the essential guide to the most awe-inspiring advances in science and technology."},
    {title: "arXiv - Research Papers", url: "https://arxiv.org", snippet: "arXiv is a free distribution service and an open-access archive for scholarly articles in the fields of physics, mathematics, computer science, and more."},
    
    // Food & Cooking
    {title: "AllRecipes - Cooking Recipes", url: "https://www.allrecipes.com", snippet: "Find and share everyday cooking inspiration on Allrecipes. Discover recipes, cooks, videos, and how-tos based on the food you love."},
    {title: "Food Network - Cooking Shows", url: "https://www.foodnetwork.com", snippet: "Food Network is an American basic cable channel owned by Television Food Network. It focuses on food-related programming."},
    {title: "Tasty - Recipe Videos", url: "https://tasty.co", snippet: "Tasty is the world's largest social food network, reaching more than 500 million people around the globe with its signature fun, easy, and delicious videos."},
    {title: "Epicurious - Food Recipes", url: "https://www.epicurious.com", snippet: "Find quick & easy recipes, browse menus, and discover the perfect restaurant recipes with Epicurious."},
    {title: "Serious Eats - Food Science", url: "https://www.seriouseats.com", snippet: "Serious Eats provides recipes you want to make, in-depth technique and cooking articles, and science-backed explanations."},
    
    // Sports & Fitness
    {title: "ESPN - Sports Network", url: "https://www.espn.com", snippet: "Visit ESPN to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more."},
    {title: "NFL - Football League", url: "https://www.nfl.com", snippet: "The official source for NFL news, schedules, stats, scores and more."},
    {title: "NBA - Basketball", url: "https://www.nba.com", snippet: "The official site of the National Basketball Association. Follow the action on NBA scores, schedules, stats, news, Team and Player news."},
    {title: "MLB - Baseball", url: "https://www.mlb.com", snippet: "The official website of Major League Baseball with the most up-to-date information on scores, schedules, stats, tickets, and team news."},
    {title: "FIFA - Soccer/Football", url: "https://www.fifa.com", snippet: "The official FIFA website with all the latest news and featured stories from world football's governing body."},
    {title: "Olympics - Olympic Games", url: "https://www.olympics.com", snippet: "Official website of the Olympic Games. Find more about the Olympic Movement, Games, Athletes, Sports and Olympic Results."},
    
    // Government & Organizations
    {title: "United Nations - UN", url: "https://www.un.org", snippet: "The United Nations is an international organization founded in 1945 committed to maintaining international peace and security."},
    {title: "World Health Organization", url: "https://www.who.int", snippet: "WHO's primary role is to direct international health within the United Nations' system and to lead partners in global health responses."},
    {title: "CIA - Central Intelligence", url: "https://www.cia.gov", snippet: "The Central Intelligence Agency collects, evaluates and disseminates vital information on economic, military, political, scientific and other matters."},
    {title: "FBI - Federal Bureau", url: "https://www.fbi.gov", snippet: "The FBI is the domestic intelligence and security service of the United States and its principal federal law enforcement agency."},
    {title: "IRS - Tax Service", url: "https://www.irs.gov", snippet: "The official website of the Internal Revenue Service. Get info on filing, paying, and planning your taxes."},
    
    // Miscellaneous Popular Sites
    {title: "Quora - Q&A Platform", url: "https://www.quora.com", snippet: "Quora is a place to gain and share knowledge. It's a platform to ask questions and connect with people who contribute unique insights."},
    {title: "Medium - Publishing Platform", url: "https://medium.com", snippet: "Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic."},
    {title: "Tumblr - Microblogging", url: "https://www.tumblr.com", snippet: "Tumblr is a place to express yourself, discover yourself, and bond over the stuff you love."},
    {title: "DeviantArt - Art Community", url: "https://www.deviantart.com", snippet: "DeviantArt is the world's largest online social community for artists and art enthusiasts."},
    {title: "Imgur - Image Sharing", url: "https://imgur.com", snippet: "Discover the magic of the internet at Imgur, a community powered entertainment destination."},
    {title: "Giphy - GIF Database", url: "https://giphy.com", snippet: "GIPHY is your top source for the best & newest GIFs & Animated Stickers online."},
    {title: "Archive.org - Internet Archive", url: "https://archive.org", snippet: "Internet Archive is a non-profit library of millions of free books, movies, software, music, websites, and more."},
    {title: "Weather.com - Weather Forecast", url: "https://weather.com", snippet: "The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage."},
    {title: "Craigslist - Classified Ads", url: "https://www.craigslist.org", snippet: "Craigslist provides local classifieds and forums for jobs, housing, for sale, services, local community, and events."},
    {title: "Indeed - Job Search", url: "https://www.indeed.com", snippet: "Indeed is the #1 job site in the world with over 250 million unique visitors every month."},
    {title: "Glassdoor - Job Reviews", url: "https://www.glassdoor.com", snippet: "Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more."},
    {title: "Zillow - Real Estate", url: "https://www.zillow.com", snippet: "Zillow is an online real estate database company founded in 2006. Browse real estate listings and property information."},
    {title: "Yelp - Local Reviews", url: "https://www.yelp.com", snippet: "Yelp connects people with great local businesses. Read reviews, check out photos, and browse listings."},
];
