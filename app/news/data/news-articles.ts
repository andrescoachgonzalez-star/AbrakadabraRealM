export const newsCategories = [
  "All",
  "Art",
  "Artists",
  "Education",
  "Entertainment",
  "Events",
  "Innovation",
  "Fashion",
  "Music",
] as const

export type NewsCategory = (typeof newsCategories)[number]

export interface NewsArticle {
  id: number
  slug: string
  title: string
  date: string
  excerpt: string
  category: Exclude<NewsCategory, "All">
  image: string
  featured?: boolean
  author: string
  readTime: string
  tags: string[]
  content: string[]
  images: string[]
}

type NewsArticleSeed = Omit<NewsArticle, "content" | "images"> & {
  body: string[]
  images?: string[]
}

const articleSeeds: NewsArticleSeed[] = [
  {
    id: 1,
    slug: "una-noche-de-locura-blessd",
    title: "UNA NOCHE DE LOCURA: BLESSD",
    date: "June 27, 2025",
    excerpt:
      "El 25 de mayo de 2025, Blessd volvió a encender la escena urbana con el lanzamiento de Trinidad Bendita, su esperado quinto álbum de estudio...",
    category: "Entertainment",
    image: "/news/nochelocura.jpg",
    featured: true,
    author: "Abrakadabra Editorial",
    readTime: "4 min read",
    tags: ["Blessd", "Trinidad Bendita", "Joseph Ren", "Regueton"],
    body: [
      "El 25 de mayo de 2025, Blessd volvio a encender la escena urbana con el lanzamiento de Trinidad Bendita, su esperado quinto album de estudio. Mas que un simple disco, se trata de un tributo profundo y emocional a su barrio de origen, Trinidad, en la comuna de Antioquia, Medellin. Diez canciones intensas, cargadas de historia, vivencias y evolucion musical, lo posicionan una vez mas como una de las voces mas solidas del genero.",
      "Entre los temas que ya comienzan a sonar con fuerza, destaca \"Una noche de locura\", una colaboracion explosiva que une a Blessd con tres pesos pesados de la produccion: Tayson Kryss, Sebastian Ledher y Joseph Ren. Este ultimo, reconocido por su sensibilidad sonora y su habilidad para crear atmosferas hipnoticas, deja su huella en el tema con beats vibrantes, estructuras dinamicas y un ritmo que simplemente no da tregua.",
      "\"Una noche de locura\" es de esos tracks que no piden permiso para entrar en tu cabeza: una mezcla adictiva de fiesta, deseo y energia pura. La participacion de Joseph Ren le da al tema un filo especial, elevando la produccion a otro nivel y confirmando por que su nombre empieza a sonar con mas fuerza en los circulos del regueton y la musica urbana.",
      "Con esta colaboracion, tanto Blessd como Joseph Ren demuestran que el genero sigue evolucionando de la mano de artistas que apuestan por lo autentico, lo atrevido y lo que conecta de verdad con las calles y las emociones.",
    ],
    images: [
      "/news/nochelocura2.jpg",
      "/news/nochelocura3.jpg",
      "/news/nochelocura4.jpg",
      "/news/nochelocura5.jpg",
    ],
  },
  {
    id: 2,
    slug: "berlin-explores-the-cosmic-vision",
    title: "BERLIN EXPLORES THE COSMIC VISION",
    date: "March 29, 2025",
    excerpt:
      "Berlin has become the epicenter of avant-garde art with a unique exhibition dedicated to 'The Blue Rider,' a movement that redefined 20th-century painting...",
    category: "Art",
    image: "/news/cosmicvision.avif",
    featured: true,
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["Berlin", "The Blue Rider", "Kandinsky", "Franz Marc"],
    body: [
      "Berlin has become the epicenter of avant-garde art with a unique exhibition dedicated to 'The Blue Rider,' a movement that redefined 20th-century painting. Located in the heart of the German capital, this exhibition invites visitors to step into the creative minds of artists who defied traditional norms, forging a visual universe filled with color, emotion, and spirituality.",
      "'The Blue Rider' emerged in 1911 when a group of artists, led by Wassily Kandinsky and Franz Marc, challenged academic conventions and embraced a new form of artistic expression. Their goal was not only to innovate in painting techniques but also to infuse art with a deeper, more transcendent meaning. Inspired by music, nature, and spirituality, the members of this collective developed a unique visual language characterized by vibrant colors, abstract forms, and profound emotional sensitivity.",
      "At the Berlin exhibition, visitors can delve into this artistic cosmos through a carefully curated selection of masterpieces. Iconic paintings such as Improvisation 19 by Kandinsky and Blue Horses by Franz Marc showcase the boldness and genius of these pioneers. Additionally, the exhibition features sketches, letters, and previously unseen documents that reveal the evolution of their ideas and their impact on the development of German Expressionism.",
      "The exhibition offers an immersive and sensory experience. Through dynamic projections and interactive spaces, attendees can explore the atmosphere that inspired 'The Blue Rider' artists. Music, a fundamental element of their artistic vision, plays a crucial role in the exhibition, with compositions by Arnold Schonberg enhancing the immersive journey.",
      "Beyond its visual impact, 'The Blue Rider' left a legacy that transcended borders and generations. Its influence can be seen in later movements such as Abstract Expressionism and continues to serve as an essential reference for contemporary artists. This exhibition in Berlin not only pays tribute to their groundbreaking work but also invites visitors to reflect on the evolution of art and its power to convey universal emotions.",
      "For those passionate about art and the history of avant-garde movements, this is an unmissable opportunity to delve into the essence of 'The Blue Rider.' The exhibition will remain open until the end of the year, offering a window into a movement that redefined how we perceive both art and reality. Once again, Berlin solidifies its role as a cultural beacon, guiding those who seek inspiration in boundless creativity.",
      "Additionally, at Abrakadabra, you can explore art through exceptional artists such as Adriana. Acquiring a unique piece is not just about decoration, it is a tangible asset that can appreciate in value. Discover the work of Adriana Henao and enter a world where abstract and spiritual art is destined to transcend.",
    ],
    images: [
      "/news/cosmicvision2.avif",
      "/news/cosmicvision3.avif",
      "/news/cosmicvision4.avif",
      "/news/cosmicvision5.avif",
    ],
  },
  {
    id: 3,
    slug: "martin-garrix-becomes-the-first",
    title: "MARTIN GARRIX BECOMES THE FIRST",
    date: "March 25, 2025",
    excerpt:
      "Renowned DJ and producer Martin Garrix has reached a new milestone in his career by becoming the first artist to perform three consecutive nights at Los Angeles State Historic Park...",
    category: "Music",
    image: "/news/martingarrix.jpeg",
    featured: true,
    author: "Abrakadabra Editorial",
    readTime: "4 min read",
    tags: ["Martin Garrix", "Redmood", "MoodChill", "Electronic Music"],
    body: [
      "Renowned DJ and producer Martin Garrix has reached a new milestone in his career by becoming the first artist to perform three consecutive nights at Los Angeles State Historic Park. The concerts, scheduled for June 27, 28, and 29, will offer a unique outdoor experience.",
      "Initially, only two dates were planned, but due to high demand and a record-breaking 40,000 tickets sold, a third performance was added. Tickets for June 29 are now available, providing a final opportunity for fans who missed the first shows. This will be his first performance in Los Angeles since 2016, at a venue that has hosted major electronic music figures such as Dom Dolla, Zedd, and Afterlife.",
      "New Release: 'Angels for Each Other'",
      "While preparing for these historic concerts, Garrix continues to innovate with his music. On March 14, he released 'Angels for Each Other,' a collaboration with Indian singer Arijit Singh. This song marks a special moment in his career, as it is the first time the producer uses his own voice in one of his tracks and Singh's first English-language track.",
      "In addition to this success, Garrix has been named Best DJ of 2024 for the fifth time, equaling Armin van Buuren's record. In an interview with DJ Mag, he expressed his excitement at this recognition: 'It's incredible to be on the same list as my idols. I really admire Armin and Tiesto. I thought after reaching number one for the first time it could only go downhill, but to still be at the top is something very special.'",
      "At just 28 years old, Martin Garrix continues to establish himself as one of the most influential figures in electronic/house music. Since his global success with Animals, his creativity and passion have kept him at the top of the industry. With a packed schedule of performances and new music on the way, Abrakadabra Realm presents Redmood, MoodChill, its new record label, under the direction of renowned artist and model Paula Suarez. This innovative project focuses on R&B and soul, offering a unique, fresh, and sophisticated approach that seeks to stand out on the global scene.",
      "With an ambiguous vision, Redmood aims to elevate these genres to another level within the electronic world, providing high-quality productions and collaborations with talented international artists. Thanks to the leadership of Paula Suarez and a passionate team, the label promises to connect with audiences around the world, consolidating its position as a benchmark in the music industry.",
      "If you love R&B, soul, and musical innovation, Redmood is the label that will set the trend. Follow their upcoming releases and be part of this new sonic era!",
    ],
    images: [
      "/news/martingarrix2.webp",
      "/news/martingarrix3.webp",
      "/news/martingarrix4.webp",
      "/news/martingarrix5.webp",
    ],
  },
  {
    id: 4,
    slug: "the-mystery-of-the-biggest",
    title: "THE MYSTERY OF THE BIGGEST",
    date: "March 22, 2025",
    excerpt:
      "This March 18th marks the 35th anniversary of one of the greatest art heists in modern history...",
    category: "Art",
    image: "/news/themystery.png",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["Isabella Stewart Gardner", "Art Heist", "Boston", "Vermeer"],
    body: [
      "This March 18th marks the 35th anniversary of one of the art world's greatest mysteries: the theft of 13 valuable works from the Isabella Stewart Gardner Museum in Boston. Estimated at between $200 million and over $1 billion, this crime remains unsolved, and the stolen pieces remain missing.",
      "In the early hours of March 18, 1990, two men disguised as police officers managed to enter the museum, overpowered the security guards, and, after more than an hour inside, fled with 13 works of art. Among them were priceless pieces, such as Johannes Vermeer's The Concert and Christ in the Storm on the Sea of Galilee, Rembrandt's only marine painting. Since then, no arrests have been made, nor have any of the works been recovered, despite numerous theories about their whereabouts, which point to places such as Philadelphia, Ireland, and Corsica.",
      "Determining the true value of these pieces is complicated. Gardner, the visionary collector and founder of the museum, stipulated in her will that no work could be sold or removed. In honor of this wish, the museum keeps the empty frames on display, awaiting their return.",
      "Estimates of the works' value have evolved over the years. In 2000, the FBI set the figure at $500 million, although experts such as Otto Naumann, a former Sotheby's executive, have suggested that today they could exceed $1 billion. Vermeer's Concerto alone could be worth as much as Leonardo da Vinci's Salvator Mundi, which sold in 2017 for more than $450 million. Another challenge is the condition the pieces might be in, if they are ever recovered. Several were cut from their frames with razor blades, suggesting they may have suffered significant damage.",
      "To commemorate the anniversary, the museum has unveiled a sound installation in the Dutch Room, where six of the works were stolen. Created by sound artist Skooby Laposky, the experience transports visitors to the scene of Christ in the Storm on the Sea of Galilee through the sounds of waves, birds, and storms.",
    ],
    images: [
      "/news/themystery2.webp",
      "/news/themystery3.webp",
      "/news/themystery4.png",
      "/news/themystery5.png",
    ],
  },
  {
    id: 5,
    slug: "sunset-gathering-and-redmood-fusing",
    title: "SUNSET GATHERING AND REDMOOD: FUSING",
    date: "November 3, 2024",
    excerpt:
      "Sunset Gathering in session. A night where music and visual art merged into an unforgettable experience...",
    category: "Events",
    image: "/news/Gathering.avif",
    author: "Abrakadabra Editorial",
    readTime: "3 min read",
    tags: ["Sunset Gathering", "Redmood", "Paula Suarez", "Afro House"],
    body: [
      "Sunset Gathering in session Sunset Gathering not only resonates strongly on the dance floors, but also reaches the most recognized charts globally.",
      "Sunset Gathering has established itself as one of the leading events in global Afro House, taking audiences on a musical journey that celebrates African roots and their fusion with Latin America. With an innovative approach, this event has encouraged DJs and producers to explore new sounds that connect diverse cultures, expanding the electronic scene and giving visibility to Afro House on international stages.",
      "In parallel with this revolution in electronic music, Abrakadabra Realm presents its new label, Redmood, under the direction of artist and model Paula Suarez. With a proposal focused on R&B and soul, Redmood seeks to stand out on the global scene, offering a fresh and sophisticated approach to genres that resonate for their depth and emotion. Paula Suarez leads this ambitious project that, through collaborations and a committed team, aims to connect with audiences around the world, taking R&B and soul to another level within the electronic realm.",
    ],
  },
  {
    id: 6,
    slug: "paula-suarez-tells-how-she",
    title: "PAULA SUAREZ TELLS HOW SHE",
    date: "October 20, 2024",
    excerpt:
      "Paula Suarez is not just an artist; she is a true visionary who has redefined the boundaries of creativity...",
    category: "Artists",
    image: "/news/PaulaSuarez.webp",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["Paula Suarez", "AbrakadabraRealm", "Leadership", "Creative Vision"],
    body: [
      "Paula Suarez is not just an artist; she is a true creative force that is transforming the world with her talent and vision. As one of the most influential women of her generation, she has managed to conquer fashion, acting and music, but her impact does not end there. Paula is co-founder and an essential part of AbrakadabraRealm, a company that is redefining art, fashion and music as a unique and transcendental experience. With her unmistakable style and disruptive approach, she has turned AbrakadabraRealm into an innovative platform where the visual, the sonic and the emotional merge.",
      "Paula has left her mark on every aspect of the company, ensuring that every project and every piece created reflects her passion, her talent and her unrivalled sense of style. It's not just about clothes, music or art; AbrakadabraRealm is a movement led by Paula, which seeks to empower people through creativity, authenticity and self-expression. Her ability to deeply connect with people, both on stage and behind the camera, has made her an iconic figure and the heart of this artistic revolution.",
      "Under her leadership, AbrakadabraRealm has transcended the boundaries of convention. Every fashion collection, every piece of music, and every piece of art the company releases into the world bears her hallmark of excellence. Paula doesn't just create products, she creates unforgettable experiences that inspire those who come into contact with them. Her energy, dedication, and vision have positioned AbrakadabraRealm as one of the most influential and powerful brands of its time, breaking barriers and leading the way to the future of art and creativity.",
      "Paula's magnetic presence shines not only on the runway or stage, but also in her role as a business leader. She is the mastermind behind every bold idea that propels the company to new heights, always pushing the boundaries of what is possible. Paula Suarez is much more than a co-founder; she is the spark that ignites everything AbrakadabraRealm stands for. Her vision is not only big, it is revolutionary, and her impact will continue to resonate for generations.",
      "With Paula at the helm, AbrakadabraRealm is not just a company, it is a legacy that is changing the way the world perceives art, fashion and music. She is the true essence behind this extraordinary project, a visionary whose mission is to create a universe where art and creativity have no limits. Paula Suarez is here to stay, and her name will remain marked as a legend that redefined the future.",
      "Instagram: https://www.instagram.com/paulasuarezg?igsh=MWNwdGNwNmQ0Yjhtbw==",
    ],
  },
  {
    id: 7,
    slug: "darkness-music-release",
    title: "DARKNESS MUSIC RELEASE",
    date: "October 14, 2024",
    excerpt:
      "Musical Release: 8batzz Impacts the Scene with his darkest and most experimental production yet...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["8batzz", "Release", "Experimental"],
    body: [
      "With this release, 8batzz leans into a darker palette and proves how tension can become a creative signature. The production does not rely on excess; instead, it builds pressure through atmosphere, restraint, and a carefully sculpted emotional weight.",
      "The experimental edge feels purposeful rather than decorative. Every sonic choice expands the mood of the track, creating a listening experience that is immersive and uneasy in the best possible sense. It is music that invites you to stay inside the shadows rather than escape them.",
      "For the scene, projects like this matter because they resist formula. They remind audiences that risk still has a place in contemporary electronic production and that identity is often sharpened when artists trust the most uncompromising version of their sound.",
    ],
  },
  {
    id: 8,
    slug: "black-coffee-makes-history-at",
    title: "BLACK COFFEE MAKES HISTORY AT",
    date: "October 12, 2024",
    excerpt:
      "Black Coffee breaking barriers. South African DJ makes history at one of the world's biggest festivals...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["Black Coffee", "Festival", "Global Impact"],
    body: [
      "Black Coffee's rise has always represented more than personal success. Each new milestone reinforces the global reach of African electronic music and expands the conversation around whose sounds shape the biggest stages in the world.",
      "At major festivals, representation matters because it shifts what audiences expect and what future artists imagine is possible. This appearance was significant not only for the performance itself, but for the cultural door it keeps opening.",
      "Moments like this rewrite the geography of influence in dance music. They show that the center of gravity is no longer fixed and that the future of the scene belongs to artists who carry local identity into global spaces without dilution.",
    ],
  },
  {
    id: 9,
    slug: "the-main-stage-of-the",
    title: "THE MAIN STAGE OF THE",
    date: "October 12, 2024",
    excerpt:
      "AFRO NATION FESTIVAL. An unprecedented celebration of African music and culture that united thousands...",
    category: "Events",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["Afro Nation", "Festival", "Culture"],
    body: [
      "The main stage of Afro Nation is built as a statement as much as a platform. It captures a wide spectrum of sound, movement, and cultural identity, giving scale to artists whose influence is both local and global at once.",
      "What makes the festival distinctive is the way it centers community instead of spectacle alone. The production is immense, but the emotional core remains rooted in connection, pride, and celebration of African creativity in all its forms.",
      "As festivals continue to compete for attention, Afro Nation stands apart by feeling culturally grounded. It is not simply a large event; it is a space where music becomes a shared language of belonging.",
    ],
  },
  {
    id: 10,
    slug: "drinking-water-for-disadvantaged-communities",
    title: "DRINKING WATER FOR DISADVANTAGED COMMUNITIES",
    date: "October 11, 2024",
    excerpt:
      "Pablo Urbano, Co-founder of Auara, leads an initiative bringing clean drinking water to communities in need...",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "6 min read",
    tags: ["Water Access", "Social Innovation", "Impact"],
    body: [
      "Innovation becomes truly meaningful when it improves daily life at the most essential level. Access to clean water is not an abstract ideal; it is a condition for health, dignity, and long-term opportunity. That is what gives this initiative its force.",
      "Projects like this are especially powerful because they connect business models with measurable human outcomes. Instead of treating social impact as a secondary layer, the mission is built into the structure of the work itself.",
      "In a world crowded with promises of disruption, efforts centered on water access remind us that the most transformative innovation is often the one that solves fundamental problems with clarity and persistence.",
    ],
  },
  {
    id: 11,
    slug: "ciudades-inteligentes-y-la-datocracia",
    title: "CIUDADES INTELIGENTES Y LA DATOCRACIA",
    date: "October 11, 2024",
    excerpt:
      "EL NUEVO TRACK DE ABRAKADABRA: A deep dive into smart cities and how data is reshaping urban life...",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "7 min read",
    tags: ["Smart Cities", "Data", "Urban Future"],
    body: [
      "Smart cities are often discussed through efficiency, but the deeper issue is governance. When data becomes the central infrastructure of urban life, questions of access, privacy, and power become just as important as convenience or speed.",
      "The term datocracy captures that tension. It points to a future where information can guide better public decisions, but can also concentrate influence in ways that remain invisible to the people most affected by it.",
      "Any meaningful conversation about urban innovation has to include ethics alongside technology. Otherwise, the promise of smarter cities risks becoming a system that is optimized, but not necessarily humane.",
    ],
  },
  {
    id: 12,
    slug: "good-memories-transforma-el-dolor",
    title: "GOOD MEMORIES TRANSFORMA EL DOLOR",
    date: "October 10, 2024",
    excerpt:
      "EL NUEVO TRACK DE ABRAKADABRA: A powerful new release that transforms pain into sonic beauty...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["Abrakadabra", "Release", "Emotion"],
    body: [
      "The strongest releases are often the ones that are unafraid of emotional contradiction. Good Memories leans into that space, translating pain into something melodic, expansive, and unexpectedly luminous without erasing the weight of the original feeling.",
      "This is what gives the track resonance. Rather than treating emotion as a marketing concept, it turns vulnerability into structure. The arrangement, pacing, and atmosphere all work together to make the listener feel movement from fracture toward release.",
      "It is the kind of song that stays with you because it understands that beauty does not cancel suffering. It reframes it, gives it shape, and lets it breathe in a new form.",
    ],
  },
  {
    id: 13,
    slug: "revive-la-magia-del-disco",
    title: "REVIVE LA MAGIA DEL DISCO",
    date: "October 10, 2024",
    excerpt:
      "Revoluciona el Disco: Un Nuevo Track con Groove that brings the golden era of disco into 2024...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "4 min read",
    tags: ["Disco", "Groove", "New Track"],
    body: [
      "Reviving disco in the present requires more than borrowing familiar sounds. It means understanding the genre's physicality, elegance, and communal energy, then translating those qualities into a language that still feels alive now.",
      "This track succeeds because it respects disco's emotional DNA while modernizing its edges. The groove is clean, the rhythm section feels intentional, and the production avoids nostalgia for its own sake.",
      "That balance is what makes retro-informed music exciting again. It becomes less about imitation and more about recovering an atmosphere people still want to inhabit.",
    ],
  },
  {
    id: 14,
    slug: "un-arte-que-conecta",
    title: "UN ARTE QUE CONECTA",
    date: "October 5, 2024",
    excerpt:
      "Adriana Henao Presenta Su Arte Abstracto that bridges the gap between emotion and visual expression...",
    category: "Art",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "6 min read",
    tags: ["Adriana Henao", "Abstract Art", "Emotion"],
    body: [
      "Adriana Henao's work resonates because it does not ask viewers to decode a fixed narrative. Instead, it creates a space where emotion can be encountered directly through rhythm, texture, and chromatic movement.",
      "That openness is not a lack of structure. It is a different type of precision, one that trusts abstraction as a way of reaching experiences that language often limits. The paintings feel intuitive, but they are carefully built around sensation and energetic flow.",
      "In that sense, the work connects because it gives audiences permission to feel before they explain. It turns abstraction into an instrument of closeness rather than distance.",
    ],
  },
  {
    id: 15,
    slug: "8batzz-un-nuevo-camino",
    title: "8BATZZ: UN NUEVO CAMINO",
    date: "October 4, 2024",
    excerpt:
      "El Viaje De Autodescubrimiento De 8batzz. A new artistic path that challenges conventions...",
    category: "Artists",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["8batzz", "Artist Journey", "Identity"],
    body: [
      "Every artist eventually reaches a point where growth means risking clarity for discovery. In 8batzz's case, that shift appears as a conscious move toward self-definition, with fewer compromises and a stronger appetite for building an unmistakable signature.",
      "The journey of self-discovery described here is not abstract. It shows up in sound choices, aesthetics, and the courage to leave behind formulas that once felt safe. That process can be uncomfortable, but it is often where the most vital work begins.",
      "A new path matters because it changes the terms of possibility. Once an artist starts creating from conviction instead of expectation, the work becomes more focused, and the audience begins to meet something more honest.",
    ],
  },
  {
    id: 16,
    slug: "el-nuevo-comienzo-de-rizzo",
    title: "EL NUEVO COMIENZO DE RIZZO",
    date: "October 2, 2024",
    excerpt:
      "Rizzo Lanza Su Nuevo EP Por El Sello De Abrakadabra, marking a fresh start in the electronic scene...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "4 min read",
    tags: ["Rizzo", "EP", "Label Release"],
    body: [
      "A new EP can function as both introduction and declaration. For Rizzo, this release feels like a reset with purpose, establishing a sound world that is cleaner in identity and more ambitious in emotional range.",
      "Launching through the Abrakadabra label also gives the project context. It situates the music within a broader creative ecosystem, one that values atmosphere, authorship, and a distinct visual as well as sonic narrative.",
      "Fresh starts are compelling when they sound earned. This one does, and that is what gives the release momentum moving forward.",
    ],
  },
  {
    id: 17,
    slug: "blasfemia-lanza-su-nuevo-album",
    title: "BLASFEMIA LANZA SU NUEVO ALBUM",
    date: "October 1, 2024",
    excerpt:
      'Blasfemia Lanza su Nuevo Album "Mi Otro Yo": A genre-bending exploration of identity and sound...',
    category: "Music",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "6 min read",
    tags: ["Blasfemia", "Album", "Identity"],
    body: [
      "An album centered on identity has the opportunity to be both intimate and theatrical. Mi Otro Yo moves in that direction, using contrast and stylistic shifts to reflect the instability and richness of the self.",
      "Its genre-bending approach matters because it allows the project to feel internally conflicted in a productive way. Instead of smoothing out those contradictions, the music lets them coexist, which gives the album both tension and personality.",
      "That makes the release more than a collection of tracks. It becomes an exploration of character, fragmentation, and the many masks that sound can carry.",
    ],
  },
  {
    id: 18,
    slug: "sandra-henao-la-vision-detras",
    title: "SANDRA HENAO: LA VISION DETRAS",
    date: "October 1, 2024",
    excerpt:
      "Sandra Henao: Abrakadabra Realm, the visionary entrepreneur behind the brand that's changing everything...",
    category: "Artists",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "6 min read",
    tags: ["Sandra Henao", "Vision", "Leadership"],
    body: [
      "Behind every coherent creative platform there is usually a worldview strong enough to hold many disciplines together. Sandra Henao's role appears precisely there: not only as an entrepreneur, but as the person shaping the emotional and philosophical architecture of the brand.",
      "What makes that vision compelling is its refusal to separate commerce from meaning. Fashion, art, music, and opportunity are treated as connected forms of expression rather than isolated departments, which gives the project a more distinctive identity.",
      "Leadership becomes transformative when it creates frameworks others can inhabit. That is what this story points toward: a vision large enough to expand individual careers while still feeling personal and directed.",
    ],
  },
  {
    id: 19,
    slug: "la-academia-gratuita-de-abrakadabra",
    title: "LA ACADEMIA GRATUITA DE ABRAKADABRA",
    date: "September 21, 2024",
    excerpt:
      "Abrakadabra Realm lanza su Academia Gratuita, offering free education in music production and arts...",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "6 min read",
    tags: ["Free Education", "Academy", "Creative Learning"],
    body: [
      "Free education changes the entry point for talent. When access stops depending on cost, more people can experiment, train, and imagine themselves inside fields that once felt closed off or financially distant.",
      "The launch of a free academy is significant because it reframes value. Instead of guarding knowledge behind exclusivity, it treats learning as a form of cultural expansion capable of empowering new producers, artists, and collaborators.",
      "If sustained with quality and intention, initiatives like this can have a long afterlife. They do not only teach techniques; they reshape who gets to participate in the creative future.",
    ],
  },
  {
    id: 20,
    slug: "abrakadabra-realm-lanza-su-sello",
    title: "ABRAKADABRA REALM LANZA SU SELLO",
    date: "September 12, 2024",
    excerpt:
      "Abrakadabra Realm Lanza su Sello Discografico, a new record label dedicated to emerging talent...",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    author: "Abrakadabra Editorial",
    readTime: "5 min read",
    tags: ["Record Label", "Emerging Talent", "Industry"],
    body: [
      "Launching a record label is not only a business decision; it is a curatorial one. It defines what kind of talent deserves support, what sound worlds deserve space, and how a platform chooses to shape its cultural footprint.",
      "A label focused on emerging talent can be especially important when scenes are saturated by repetition. It creates room for voices that are still forming, but already carry originality and momentum.",
      "What matters next is consistency: the ability to turn a promising launch into an ecosystem of releases, guidance, and long-term artistic development. That is where a label begins to matter historically, not just symbolically.",
    ],
  },
]

export const newsArticles: NewsArticle[] = articleSeeds.map((article) => ({
  ...article,
  content: article.body,
  images: article.images ?? [],
}))

export function getAllNewsArticles() {
  return newsArticles
}

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug)
}

export function getRelatedNewsArticles(currentSlug: string, limit = 3) {
  const currentArticle = getNewsArticle(currentSlug)

  if (!currentArticle) {
    return newsArticles.slice(0, limit)
  }

  return newsArticles
    .filter((article) => article.slug !== currentSlug)
    .sort((a, b) => {
      const aScore = Number(a.category === currentArticle.category) + Number(a.featured)
      const bScore = Number(b.category === currentArticle.category) + Number(b.featured)
      return bScore - aScore
    })
    .slice(0, limit)
}
