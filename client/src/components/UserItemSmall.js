function UserItemSmall() {
  const users = [
    {
      id: 2,
      firstName: "Moa",
      lastName: "Andersson",
      email: "h21moaan@du.se",
      password: "12345",
      createdAt: "2023-03-16T14:06:58.000Z",
      updatedAt: "2023-03-16T14:06:58.000Z",
    },
  ];
  return <div>{`${users[0].firstName} ${users[0].lastName}`}</div>;
}

export default UserItemSmall;
