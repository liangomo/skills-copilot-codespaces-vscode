function skillsMember() {
  return {
    name: "skills",
    description: "Skills member",
    type: "member",
    options: [
      {
        name: "skills",
        description: "Skills to add to the member",
        type: 3,
        required: true,
      },
    ],
  };
}