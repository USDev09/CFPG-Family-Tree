const timelineData = [
  {
    id: 1,
    year: 1995,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Some event happened"
  },
  {
    id: 2,
    year: 2012,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Alex graduates high school"
  },
  {
    id: 3,
    year: 2017,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Simone and Chris marry"
  },
  {
    id: 4,
    year: 2018,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Jae graduates from WashU"
  },
  {
    id: 5,
    year: 2020,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Helen F. Rogers turns 100 years old"
  }
];

const memberData = {
  firstName: "John",
  middleName: "French",
  lastName: "Doe",
  preferredName: null,
  birth: "April 23, 1934",
  death: "October 9, 1982",
  birthplace: "Chicago, IL",
  residence: "Charlotte, NC",
  parents: ["Vladimir Doe", "Genevieve Doe"],
  children: null,
  spouse: "Jane Doe",
};

const faqData = [
  {
    id: 1,
    question: "I noticed a piece of information is incorrect about a family member. How can I correct it?",
    answer: "Once you are logged in, you can edit most information on a family member. If there's information that you can't edit yourself, email the administrator."
  },
  {
    id: 2,
    question: "I need to delete a timeline event. How can I do this?",
    answer: "This requires admin approval. Send an email and list the reason for deletion."
  },
  {
    id: 3,
    question: "I want to add a family member on here, but their parents or children aren't yet added. How can I still add them?",
    answer: "When you add a family member, you have the option to say how they are related to someone. When you do that, their parents will be saved even if their pages haven't been created yet."
  },
  {
    id: 4,
    question: "My page has already been added, but I want to register an account. How will it link my account information to the correct page?",
    answer: "When registering, you can select which page is yours, and it will automatically link your information to your page. Cool huh?"
  }
];

const memberBioPlaceholder = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim enim. Et leo duis ut diam quam nulla porttitor massa id. Sed risus pretium quam vulputate dignissim suspendisse in est. Scelerisque purus semper eget duis at. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Purus in mollis nunc sed id semper risus in. Nulla facilisi etiam dignissim diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Elementum curabitur vitae nunc sed velit dignissim sodales. Enim diam vulputate ut pharetra. Odio ut sem nulla pharetra diam sit amet nisl. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.",
  "Risus quis varius quam quisque id diam vel. Risus sed vulputate odio ut enim blandit volutpat maecenas. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim eu turpis egestas pretium aenean pharetra magna. Egestas sed sed risus pretium quam vulputate dignissim. Euismod in pellentesque massa placerat duis ultricies. Penatibus et magnis dis parturient. Semper quis lectus nulla at volutpat. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Donec et odio pellentesque diam volutpat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non pulvinar neque laoreet suspendisse interdum consectetur. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
  "Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra. Tincidunt id aliquet risus feugiat in ante metus. Mattis pellentesque id nibh tortor id aliquet lectus. Donec ac odio tempor orci dapibus ultrices in iaculis. Donec enim diam vulputate ut pharetra sit amet. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Facilisi nullam vehicula ipsum a arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim tortor at auctor urna nunc id cursus metus aliquam. Dui nunc mattis enim ut tellus elementum sagittis. Feugiat nisl pretium fusce id velit.",
  // "Fourth line"
]

export {
  timelineData,
  memberData,
  faqData,
  memberBioPlaceholder
};