export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "./img/home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "./img/user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "./img/user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "./img/product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "./img/order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "./img/post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "./img/element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "./img/note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "./img/form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "./img/calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "./img/setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "./img/backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "./img/chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "./img/log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "John Doe",
    email: "john_doe@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "lilly Doe",
    email: "lilly_doe@gmail.com",
    amount: "6.668",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "lara dutta",
    email: "laradutta@gmail.com",
    amount: "23.68",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "Taylor",
    email: "tay0987@gmail.com",
    amount: "562.1",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww",
    name: "Ash",
    email: "ash_9876@gmail.com",
    amount: "8512",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1610088441520-4352457e7095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Deep King",
    email: "deepKing111@gmail.com",
    amount: "8766",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Sahil A Doe",
    email: "sahil007@gmail.com",
    amount: "77.89",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "./img/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "./img/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "./img/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "./img/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};
