const generateInitialData = () => {
  return [
    {
      id: 1,
      title: "Morning Reflections",
      body: "Today started off with a beautiful sunrise. I spent some time meditating and setting my intentions for the day.",
      votes: 10,
      created_at: new Date("2024-07-11T08:00:00Z"),
    },
    {
      id: 2,
      title: "Work Progress",
      body: "Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience. Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience. Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.Made significant progress on the new feature for our app. The team is really coming together and the collaboration is amazing.",
      votes: 8,
      created_at: new Date("2024-07-11T12:00:00Z"),
    },
    {
      id: 3,
      title: "Lunch Break",
      body: "Had a delicious salad for lunch. Took a short walk to clear my mind and get some fresh air. Feeling recharged and ready to tackle the afternoon tasks.",
      votes: 5,
      created_at: new Date("2024-07-11T13:00:00Z"),
    },
    {
      id: 4,
      title: "Afternoon Thoughts",
      body: "Encountered a challenging bug, but managed to solve it after some brainstorming with a colleague. It was a great learning experience.",
      votes: 7,
      created_at: new Date("2024-07-11T15:00:00Z"),
    },
    {
      id: 5,
      title: "Evening Reflections",
      body: "Wrapping up the day with a sense of accomplishment. Looking forward to some relaxation time and reflecting on today's achievements.",
      votes: 12,
      created_at: new Date("2024-07-11T18:00:00Z"),
    },
    {
      id: 6,
      title: "Morning Jog",
      body: "Went for a refreshing jog in the park. The weather was perfect, and it felt great to start the day with some exercise.",
      votes: 15,
      created_at: new Date("2024-07-12T07:30:00Z"),
    },
    {
      id: 7,
      title: "Team Meeting",
      body: "Had a productive team meeting. We discussed the upcoming sprint and aligned on our priorities. Excited for what's ahead.",
      votes: 6,
      created_at: new Date("2024-07-12T10:00:00Z"),
    },
    {
      id: 8,
      title: "Code Review",
      body: "Completed a thorough code review for a colleague's pull request. It's great to see the quality of our codebase improving.",
      votes: 9,
      created_at: new Date("2024-07-12T11:30:00Z"),
    },
    {
      id: 9,
      title: "Lunch with Friends",
      body: "Had lunch with some friends from the tech community. It was a nice break and an opportunity to share ideas and experiences.",
      votes: 11,
      created_at: new Date("2024-07-12T13:00:00Z"),
    },
    {
      id: 10,
      title: "Afternoon Coding",
      body: "Focused on implementing a new feature. It's challenging but rewarding to see it come together. Can't wait to test it out.",
      votes: 14,
      created_at: new Date("2024-07-12T14:30:00Z"),
    },
    {
      id: 11,
      title: "Client Call",
      body: "Had a call with a client to discuss their requirements. Their feedback was valuable and will help us improve the product.",
      votes: 4,
      created_at: new Date("2024-07-12T16:00:00Z"),
    },
    {
      id: 12,
      title: "Evening Walk",
      body: "Took an evening walk to unwind. The sunset was beautiful, and it was a perfect way to clear my mind after a busy day.",
      votes: 13,
      created_at: new Date("2024-07-12T19:00:00Z"),
    },
    {
      id: 13,
      title: "Morning Coffee",
      body: "Enjoyed a cup of coffee while planning my tasks for the day. It's nice to have a quiet moment before the workday begins.",
      votes: 10,
      created_at: new Date("2024-07-13T08:30:00Z"),
    },
    {
      id: 14,
      title: "Pair Programming",
      body: "Spent the morning pair programming with a colleague. We managed to solve a tricky issue together. Collaboration at its best!",
      votes: 12,
      created_at: new Date("2024-07-13T10:30:00Z"),
    },
    {
      id: 15,
      title: "Lunch Experiment",
      body: "Tried a new recipe for lunch. It turned out great, and I feel energized for the rest of the day. Cooking can be so therapeutic.",
      votes: 9,
      created_at: new Date("2024-07-13T12:30:00Z"),
    },
    {
      id: 16,
      title: "Project Planning",
      body: "Had a project planning session in the afternoon. It's exciting to map out the next steps and see our vision taking shape.",
      votes: 7,
      created_at: new Date("2024-07-13T14:00:00Z"),
    },
    {
      id: 17,
      title: "Bug Fixes",
      body: "Spent some time fixing bugs reported by users. It's satisfying to improve the user experience and see the positive feedback.",
      votes: 8,
      created_at: new Date("2024-07-13T16:00:00Z"),
    },
    {
      id: 18,
      title: "Evening Yoga",
      body: "Did a yoga session in the evening to relax and stretch. It's a great way to unwind and prepare for a restful night.",
      votes: 14,
      created_at: new Date("2024-07-13T18:30:00Z"),
    },
    {
      id: 19,
      title: "Morning Routine",
      body: "Started the day with my usual morning routine. A good breakfast and some light reading helped me get into the right mindset.",
      votes: 11,
      created_at: new Date("2024-07-14T07:30:00Z"),
    },
    {
      id: 20,
      title: "Development Progress",
      body: "Made excellent progress on a new feature. The implementation is going smoothly, and I'm excited to see it in action soon.",
      votes: 15,
      created_at: new Date("2024-07-14T09:30:00Z"),
    },
  ];
};
export default generateInitialData;
