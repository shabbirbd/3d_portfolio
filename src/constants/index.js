import {
  backend,
  creator,
  css,
  docker,
  enfanato,
  figma,
  git,
  glorify,
  html,
  javascript,
  meta,
  mobile,
  mobile3d,
  mongodb,
  nfthub,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripify,
  typescript,
  web
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Trip Finder",
      description:
        "Certainly! Trip Finder is a user-friendly trip booking website that allows travelers to search, compare, and book flights, hotels, and activities seamlessly. Trip Finder simplifies the travel experience.🌍✈️",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripify,
      live_site_link: "https://trip-finder-swart.vercel.app/",
      source_code_link: "https://github.com/shabbirbd/Trip-finder",
    },
    {
      name: "NFT Hub",
      description:
        "NFTHub is a dynamic NFT marketplace where creators, collectors, and enthusiasts converge. Discover unique digital assets, from art to virtual real estate, and securely trade them using blockchain technology. Explore, buy, and sell NFTs on NFTHub! 🌟🎨",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nfthub,
      live_site_link: "https://nft-hub-kohl.vercel.app/",
      source_code_link: "https://github.com/shabbirbd/NFThub",
    },
    {
      name: "Enfanato",
      description:
        "Enfanato is your go-to ecommerce platform for all things baby-related. From adorable clothing and essential gear to eco-friendly toys, they,ve got your little ones covered. Shop with ease and delight on Enfanato! 👶🛒",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: enfanato,
      live_site_link: "https://enfanato-baby.vercel.app/",
      source_code_link: "https://github.com/shabbirbd/Enfanato",
    },
    {
      name: "Glorify",
      description:
        "Glorify is an innovative AI-powered image generator platform. It empowers users to effortlessly create stunning visuals, from custom graphics to photo enhancements. Unleash your creativity with Glorify! 🎨✨",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: glorify,
      live_site_link: "https://glorify-liart.vercel.app/",
      source_code_link: "https://github.com/shabbirbd/Glorify",
    },
    {
      name: "3D Mobile",
      description:
        "This is an innovative platform that allows users to visualize and interact with 3D models of mobile devices. From smartphones to tablets, explore product designs, features, and dimensions in an immersive 3D environment. It is an exact copy of Apple iPhone 15 pro webpage 📱🔍✨",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mobile3d,
      live_site_link: "https://3d-mobile-review.vercel.app/",
      source_code_link: "https://github.com/shabbirbd/3d_mobile_review",
    },
  ];
  
  export { experiences, projects, services, technologies, testimonials };
