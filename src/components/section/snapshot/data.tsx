export type Snapshot = {
  id: string;
  raisedFrom: {
    avatar: string;
    name: string;
  };
  projectName: string;
  startDate: string;
  status: "reviewed" | "pending";
};

export const sampleSnapshots: Snapshot[] = [
  {
    id: "1",
    raisedFrom: {
      avatar: "/avatars/avatar1.png",
      name: "John Doe",
    },
    projectName: "Project Alpha",
    startDate: "2024-07-01",
    status: "reviewed",
  },
  {
    id: "2",
    raisedFrom: {
      avatar: "/avatars/avatar2.png",
      name: "Jane Smith",
    },
    projectName: "Project Beta",
    startDate: "2024-07-15",
    status: "pending",
  },
  {
    id: "3",
    raisedFrom: {
      avatar: "/avatars/avatar3.png",
      name: "Bob Johnson",
    },
    projectName: "Project Gamma",
    startDate: "2024-06-20",
    status: "reviewed",
  },
  {
    id: "4",
    raisedFrom: {
      avatar: "/avatars/avatar4.png",
      name: "Alice Brown",
    },
    projectName: "Project Delta",
    startDate: "2024-07-10",
    status: "pending",
  },
  {
    id: "5",
    raisedFrom: {
      avatar: "/avatars/avatar5.png",
      name: "Charlie Wilson",
    },
    projectName: "Project Epsilon",
    startDate: "2024-06-25",
    status: "reviewed",
  },
  {
    id: "6",
    raisedFrom: {
      avatar: "/avatars/avatar6.png",
      name: "Eva Martinez",
    },
    projectName: "Project Zeta",
    startDate: "2024-07-05",
    status: "pending",
  },
  {
    id: "7",
    raisedFrom: {
      avatar: "/avatars/avatar7.png",
      name: "David Lee",
    },
    projectName: "Project Eta",
    startDate: "2024-06-30",
    status: "reviewed",
  },
  {
    id: "8",
    raisedFrom: {
      avatar: "/avatars/avatar8.png",
      name: "Grace Taylor",
    },
    projectName: "Project Theta",
    startDate: "2024-07-20",
    status: "pending",
  },
];
