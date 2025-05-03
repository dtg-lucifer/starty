export type StartupAuthor = {
  _id: string;
  name: string;
  avatar: string;
};

export type StartupData = {
  _createdAt: string;
  _id: string;
  views: number;
  image: string;
  author: StartupAuthor;
  category: string;
  title: string;
  desctiption: string;
};

export const mockStartupData: StartupData[] = [
  {
    _createdAt: "2023-10-01T12:00:00Z",
    _id: "1",
    views: 11,
    image:
      "https://placehold.jp/30/dd6699/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "kqdhjasf-adsafhasbfajfha-assda34223h",
      name: "John Doe",
      avatar: "https://avatar.iran.liara.run/public",
    },
    category: "Robotics",
    title: "My First Startup",
    desctiption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    _createdAt: "2023-10-15T09:30:00Z",
    _id: "2",
    views: 243,
    image:
      "https://placehold.jp/30/3366cc/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "grt43hj5-kl56jh3b2n-98gbh4",
      name: "Sarah Johnson",
      avatar: "https://avatar.iran.liara.run/public/42",
    },
    category: "Fintech",
    title: "BlockPay - Blockchain Payment Solutions",
    desctiption:
      "Full-stack developer passionate about creating elegant solutions to complex problems.",
  },
  {
    _createdAt: "2023-11-03T14:45:00Z",
    _id: "3",
    views: 89,
    image:
      "https://placehold.jp/30/66cc33/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "plm765-jhg654frt-9876df",
      name: "Michael Chen",
      avatar: "https://avatar.iran.liara.run/public/15",
    },
    category: "AI",
    title: "NeuralMind - AI-powered Decision Making",
    desctiption:
      "Serial entrepreneur with experience in AI and machine learning applications.",
  },
  {
    _createdAt: "2023-09-22T11:15:00Z",
    _id: "4",
    views: 156,
    image:
      "https://placehold.jp/30/ff9900/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "vbn432-poi876tyu-kjh654",
      name: "Emma Rodriguez",
      avatar: "https://avatar.iran.liara.run/public/28",
    },
    category: "CleanTech",
    title: "EcoSolutions - Renewable Energy for Everyone",
    desctiption:
      "Environmental engineer focused on sustainable technology solutions.",
  },
  {
    _createdAt: "2023-12-05T16:20:00Z",
    _id: "5",
    views: 412,
    image:
      "https://placehold.jp/30/cc3366/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "mnb987-qaz321-yhn765",
      name: "David Kim",
      avatar: "https://avatar.iran.liara.run/public/33",
    },
    category: "HealthTech",
    title: "MediConnect - Digital Health Platform",
    desctiption:
      "Experienced healthcare professional with a passion for medical technology.",
  },
  {
    _createdAt: "2023-08-17T10:40:00Z",
    _id: "6",
    views: 78,
    image:
      "https://placehold.jp/30/339999/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "jkl098-fgh765-tyu432",
      name: "Priya Patel",
      avatar: "https://avatar.iran.liara.run/public/19",
    },
    category: "IoT",
    title: "SmartHome Hub - Connect Your Life",
    desctiption:
      "IoT specialist with background in embedded systems and network security.",
  },
  {
    _createdAt: "2023-11-28T13:55:00Z",
    _id: "7",
    views: 203,
    image:
      "https://placehold.jp/30/9933cc/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "uio765-qwe321-rty987",
      name: "Alex Thompson",
      avatar: "https://avatar.iran.liara.run/public/51",
    },
    category: "AR/VR",
    title: "RealityShift - AR Workspace Solutions",
    desctiption:
      "Former Google engineer with focus on augmented reality applications.",
  },
  {
    _createdAt: "2023-10-09T08:25:00Z",
    _id: "8",
    views: 167,
    image:
      "https://placehold.jp/30/cc6633/ffffff/300x150.png?text=placeholder+image",
    author: {
      _id: "bnm456-vfr678-plm234",
      name: "Olivia Wilson",
      avatar: "https://avatar.iran.liara.run/public/38",
    },
    category: "FoodTech",
    title: "NutriGrow - Vertical Farming Systems",
    desctiption:
      "Food scientist and entrepreneur exploring sustainable food technology.",
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
