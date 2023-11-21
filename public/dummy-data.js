export const DUMMY_TASKS = [
  {
    _id: "632a3d7e9f8b7c123a4b5c6d",
    title: "Finish Landing Page",
    description: "Complete the design and coding of the landing page.",
    tags: ["design", "coding"],
    projectId: "632a3c5e8f8c9b987f441c3a",
    projectName: "Web Development",
    board: "Frontend",
    priority: "P1",
    dueDate: "2023-11-30T00:00:00Z",
    time: "17:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a3d7e9f8b7c123a4b5c6e",
    title: "Implement API Endpoint",
    description: "Develop the REST API endpoint for user authentication.",
    tags: ["backend", "api"],
    projectId: "632a3c5e8f8c9b987f441c3a",
    projectName: "Web Development",
    board: "Backend",
    priority: "P2",
    dueDate: "2023-12-05T00:00:00Z",
    time: "15:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a3d7e9f8b7c123a4b5c6f",
    title: "Morning Jog",
    description: "Go for a 30-minute jog in the park.",
    tags: ["exercise", "health"],
    projectId: "632a3c5e8f8c9b987f441c3b",
    projectName: "Web Development",
    board: "Fitness",
    priority: "P3",
    dueDate: "2023-11-25T00:00:00Z",
    time: "06:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a4e7e9f8b7c123a4b5d7d",
    title: "Update Personal Blog",
    description: "Write and publish a new post on the personal blog.",
    tags: ["writing", "hobby"],
    priority: "P2",
    dueDate: "2023-12-10T00:00:00Z",
    time: "20:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a4e7e9f8b7c123a4b5d7e",
    title: "Read 'Atomic Habits'",
    description: "Read the next two chapters of 'Atomic Habits'.",
    tags: ["reading", "personal development"],
    priority: "P3",
    dueDate: "2023-11-28T00:00:00Z",
    time: "21:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a4e7e9f8b7c123a4b5d7f",
    title: "Organize Desk",
    description: "Clean and organize the work desk for better productivity.",
    tags: ["organizing", "productivity"],
    priority: "P1",
    dueDate: "2023-11-22T00:00:00Z",
    time: "10:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a5f8e9f8b7c123a4b5e01",
    title: "Prepare for Marathon",
    description: "Plan training schedule for the upcoming marathon.",
    tags: ["fitness", "event"],
    priority: "P1",
    dueDate: "2024-01-15T00:00:00Z",
    time: "07:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a5f8e9f8b7c123a4b5e02",
    title: "Grocery Shopping",
    description: "Buy groceries for the week, focusing on healthy options.",
    tags: ["chores", "health"],
    priority: "P2",
    dueDate: "2023-11-27T00:00:00Z",
    time: "16:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a5f8e9f8b7c123a4b5e03",
    title: "Book Dentist Appointment",
    description: "Schedule a routine check-up appointment with the dentist.",
    tags: ["health", "errand"],
    priority: "P3",
    dueDate: "2023-12-03T00:00:00Z",
    time: "11:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a5f8e9f8b7c123a4b5e04",
    title: "Learn Spanish",
    description: "Complete the first module of the Spanish language course.",
    tags: ["education", "language"],
    priority: "P2",
    dueDate: "2023-12-20T00:00:00Z",
    time: "19:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
  {
    _id: "632a5f8e9f8b7c123a4b5e05",
    title: "Plan Family Trip",
    description: "Organize the itinerary for the family trip in December.",
    tags: ["travel", "family"],
    priority: "P1",
    dueDate: "2023-12-10T00:00:00Z",
    time: "20:00",
    userId: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    completed: false,
  },
];

export const DUMMY_USERS = [
  {
    _id: "632a3b2e4f441c6a5a6b7c88",
    username: "johndoe123",
    email: "johndoe@example.com",
    password: "hashed_password_example",
    encryptedKey: "encrypted_key_example",
    fullName: "John Doe",
    themes: ["dark"],
    projects: [
      {
        projectId: "632a3c5e8f8c9b987f441c3a",
        name: "Web Development",
        boards: ["Frontend", "Backend"],
      },
      {
        projectId: "632a3c5e8f8c9b987f441c3b",
        name: "Personal Goals",
        boards: ["Fitness", "Learning"],
      },
    ],
    tags: [
      "design",
      "coding",
      "backend",
      "api",
      "exercise",
      "health",
      "writing",
      "hobby",
      "reading",
      "personal development",
      "organizing",
      "productivity",
      "fitness",
      "event",
      "chores",
      "errand",
      "education",
      "language",
      "travel",
      "family",
    ],
  },
];