const githubPRSampleData = [
  {
    author: {
      login: "username1",
    },
    headRefName: "branch-name-1",
    isDraft: true,
    number: 456,
    state: "OPEN",
    title: "First PR title",
  },
  {
    author: {
      login: "username2",
    },
    headRefName: "branch-name-2",
    isDraft: false,
    number: 123,
    state: "OPEN",
    title: "Second PR title",
  },
];

const expectedPRItems = [
  {
    description: "username2",
    detail: "",
    label: "123 Second PR title",
    number: 123,
  },
  {
    description: "username1",
    detail: "DRAFT",
    label: "456 First PR title",
    number: 456,
  },
];

export { githubPRSampleData, expectedPRItems };
