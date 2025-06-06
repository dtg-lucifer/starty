export type StartupAuthor = {
  _id: string;
  name: string;
  image: string;
  bio: string;
  email: string;
  username: string;
};

export type StartupData = {
  _id: string;
  image: string;
  author: StartupAuthor;
  title: string;
  description: string;
  slug: {
    _type: string;
    current: string;
  };
  pitch: string;
  view: number | null;
};

export const mockStartupData: StartupData[] = [
  {
    _id: "1",
    image:
      "https://placehold.jp/30/dd6699/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "kqdhjasf-adsafhasbfajfha-assda34223h",
      name: "John Doe",
      image: "https://avatar.iran.liara.run/public",
      bio: "Software developer with passion for startups",
      email: "john.doe@example.com",
      username: "johndoe",
    },
    title: "My First Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: {
      _type: "slug",
      current: "my-first-startup",
    },
    pitch:
      "# My First Startup\nThis is an innovative solution for modern problems",
    view: 11,
  },
  {
    _id: "2",
    image:
      "https://placehold.jp/30/3366cc/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "grt43hj5-kl56jh3b2n-98gbh4",
      name: "Sarah Johnson",
      image: "https://avatar.iran.liara.run/public/42",
      bio:
        "Full-stack developer passionate about creating elegant solutions to complex problems.",
      email: "sarah.johnson@example.com",
      username: "sarahj",
    },
    title: "BlockPay - Blockchain Payment Solutions",
    description:
      "Full-stack developer passionate about creating elegant solutions to complex problems.",
    slug: {
      _type: "slug",
      current: "blockpay-blockchain-payment-solutions",
    },
    pitch:
      "# BlockPay\nRevolutionizing the payment industry with blockchain technology",
    view: 243,
  },
  {
    _id: "3",
    image:
      "https://placehold.jp/30/66cc33/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "plm765-jhg654frt-9876df",
      name: "Michael Chen",
      image: "https://avatar.iran.liara.run/public/15",
      bio:
        "Serial entrepreneur with experience in AI and machine learning applications.",
      email: "michael.chen@example.com",
      username: "mchen",
    },
    title: "NeuralMind - AI-powered Decision Making",
    description:
      "Serial entrepreneur with experience in AI and machine learning applications.",
    slug: {
      _type: "slug",
      current: "neuralmind-ai-powered-decision-making",
    },
    pitch:
      "# NeuralMind\nHarnessing the power of AI for smarter decision making",
    view: 89,
  },
  {
    _id: "4",
    image:
      "https://placehold.jp/30/ff9900/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "vbn432-poi876tyu-kjh654",
      name: "Emma Rodriguez",
      image: "https://avatar.iran.liara.run/public/28",
      bio:
        "Environmental engineer focused on sustainable technology solutions.",
      email: "emma.rodriguez@example.com",
      username: "emmar",
    },
    title: "EcoSolutions - Renewable Energy for Everyone",
    description:
      "Environmental engineer focused on sustainable technology solutions.",
    slug: {
      _type: "slug",
      current: "ecosolutions-renewable-energy-for-everyone",
    },
    pitch: "# EcoSolutions\nMaking renewable energy accessible to all",
    view: 156,
  },
  {
    _id: "5",
    image:
      "https://placehold.jp/30/cc3366/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "mnb987-qaz321-yhn765",
      name: "David Kim",
      image: "https://avatar.iran.liara.run/public/33",
      bio:
        "Experienced healthcare professional with a passion for medical technology.",
      email: "david.kim@example.com",
      username: "davidk",
    },
    title: "MediConnect - Digital Health Platform",
    description:
      "Experienced healthcare professional with a passion for medical technology.",
    slug: {
      _type: "slug",
      current: "mediconnect-digital-health-platform",
    },
    pitch:
      "# MediConnect\nConnecting patients with healthcare providers seamlessly",
    view: 412,
  },
  {
    _id: "6",
    image:
      "https://placehold.jp/30/339999/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "jkl098-fgh765-tyu432",
      name: "Priya Patel",
      image: "https://avatar.iran.liara.run/public/19",
      bio:
        "IoT specialist with background in embedded systems and network security.",
      email: "priya.patel@example.com",
      username: "priyap",
    },
    title: "SmartHome Hub - Connect Your Life",
    description:
      "IoT specialist with background in embedded systems and network security.",
    slug: {
      _type: "slug",
      current: "smarthome-hub-connect-your-life",
    },
    pitch: "# SmartHome Hub\nThe central hub for all your smart devices",
    view: 78,
  },
  {
    _id: "7",
    image:
      "https://placehold.jp/30/9933cc/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "uio765-qwe321-rty987",
      name: "Alex Thompson",
      image: "https://avatar.iran.liara.run/public/51",
      bio:
        "Former Google engineer with focus on augmented reality applications.",
      email: "alex.thompson@example.com",
      username: "alext",
    },
    title: "RealityShift - AR Workspace Solutions",
    description:
      "Former Google engineer with focus on augmented reality applications.",
    slug: {
      _type: "slug",
      current: "realityshift-ar-workspace-solutions",
    },
    pitch: "# RealityShift\nTransforming workspaces with augmented reality",
    view: 203,
  },
  {
    _id: "8",
    image:
      "https://placehold.jp/30/cc6633/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "bnm456-vfr678-plm234",
      name: "Olivia Wilson",
      image: "https://avatar.iran.liara.run/public/38",
      bio:
        "Food scientist and entrepreneur exploring sustainable food technology.",
      email: "olivia.wilson@example.com",
      username: "oliviaw",
    },
    title: "NutriGrow - Vertical Farming Systems",
    description:
      "Food scientist and entrepreneur exploring sustainable food technology.",
    slug: {
      _type: "slug",
      current: "nutrigrow-vertical-farming-systems",
    },
    pitch:
      "# NutriGrow\nInnovating agriculture with vertical farming solutions",
    view: 167,
  },
];

export const useData = async () => {
  const data = await new Promise<StartupData[]>((resolve) => {
    setTimeout(() => {
      resolve(mockStartupData);
    }, 1000);
  });
  return data;
};
