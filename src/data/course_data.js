const courses = [
  {
    key: "r20csesem4",
    Regulations: "R20",
    Branch: "CSE",
    Semester: "sem 4",
    data: {
      courses: [
        "cs221",
        "cs222",
        "cs223",
        "cs224",
        "cs225",
        "cs261",
        "cs262",
        "cs263",
        "CSSL2"
      ],
      credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
    },
  },
  {
    key: "r20itsem4",
    Regulations: "R20",
    Branch: "IT",
    Semester: "sem 4",
    data: {
      courses: [
        "it221",
        "it222",
        "it223",
        "it224",
        "it225",
        "it261",
        "it262",
        "it263",
        "itSL2"
      ],
      credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
    },
  },
  {
    key: "r20csesem5",
    Regulations: "R20",
    Branch: "CSE",
    Semester: "sem 5",
    data: {
      courses: [
        "cs311",
        "cs312",
        "cs313",
        "cs314",
        "cs315",
        "cs351",
        "cs352",
        "cs353",
        "CSSL3"
      ],
      credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
    },
  },
  {
    key: "r20csesem1",
    Regulations: "R20",
    Branch: "CSE",
    Semester: "sem 1",
    data: {
      courses: [
        "cs111",
        "cs112",
        "cs113",
        "cs114",
        "cs151",
        "cs152",
        "cs153",
        "cs154"
      ],
      credits: [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
    },
  },
  {
    key: "r20csesem3",
    Regulations: "R20",
    Branch: "CSE",
    Semester: "sem 3",
    data: {
      courses: [
        "cs211",
        "cs212",
        "cs213",
        "cs214",
        "cs215",
        "cs251",
        "cs252",
        "cs253",
        "CSSL1"
      ],
      credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
    },
  },
  {
    key: "r20ecesem1",
    Regulations: "R20",
    Branch: "ECE",
    Semester: "sem 1",
    data: {
      courses: [
        "ec111",
        "ec112",
        "ec113",
        "ec114",
        "ec151",
        "ec152",
        "ec153",
        "ec154"
      ],
      credits: [3, 3, 3, 3, 1.5, 1, 3, 2],
    },
  },
  {
    key: "r20ecesem3",
    Regulations: "R20",
    Branch: "ECE",
    Semester: "sem 3",
    data: {
      courses: [
        "ec211",
        "ec212",
        "ec213",
        "ec214",
        "ec215",
        "ec251",
        "ec252",
        "ec253",
        "ecsl1"
      ],
      credits: [3, 4, 3, 3, 3, 1, 1.5, 1, 2],
    },
  },
  {
    key: "r20ecesem5",
    Regulations: "R20",
    Branch: "ECE",
    Semester: "sem 5",
    data: {
      courses: [
        "ec311",
        "ec312",
        "ec313",
        "ec314",
        "ec315",
        "ec351",
        "ec352",
        "ec353",
        "ecsl3"
      ],
      credits: [3, 3, 3, 3, 3, 1.5, 2, 1.5, 2],
    },
  },
  
{
  key: "r20itsem5",
  Regulations: "R20",
  Branch: "IT",
  Semester: "sem 5",
  data: {
    courses: [
      "it311",
      "it312",
      "it313",
      "it314",
      "it315",
      "it351",
      "it352",
      "it353",
      "itSL3"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
  }
},
{
  key: "r20itsem1",
  Regulations: "R20",
  Branch: "IT",
  Semester: "sem 1",
  data: {
    courses: [
      "it111",
      "it112",
      "it113",
      "it114",
      "it151",
      "it152",
      "it153",
      "it154"
    ],
    credits: [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
  }
},
{
  key: "r20itsem3",
  Regulations: "R20",
  Branch: "IT",
  Semester: "sem 3",
  data: {
    courses: [
      "it211",
      "it212",
      "it213",
      "it214",
      "it215",
      "it251",
      "it252",
      "it253",
      "itSL1"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
  }
},
{
  key: "r20eeesem5",
  Regulations: "R20",
  Branch: "EEE",
  Semester: "sem 5",
  data: {
    courses: [
      "ee311",
      "ee312",
      "ee313",
      "ee314",
      "ee315",
      "ee351",
      "ee352",
      "ee353",
      "eesl3"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
  },
},
{
  key: "r20eeesem3",
  Regulations: "R20",
  Branch: "EEE",
  Semester: "sem 3",
  data: {
    courses: [
      "ee211",
      "ee212",
      "ee213",
      "ee214",
      "ee215",
      "ee251",
      "ee252",
      "ee253",
      "eeSL1"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
  },
},
{
  key: "r20eeesem1",
  Regulations: "R20",
  Branch: "EEE",
  Semester: "sem 1",
  data: {
    courses: [
      "ee111",
      "ee112",
      "ee113",
      "ee114",
      "ee151",
      "ee152",
      "ee153"
    ],
    credits: [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
  },
},
{
  key: "r20mesem5",
  Regulations: "R20",
  Branch: "ME",
  Semester: "sem 5",
  data: {
    courses: [
      "me311",
      "me312",
      "me313",
      "me314",
      "me315",
      "me351",
      "me352",
      "me353",
      "meSL3"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
  },
},
{
  key: "r20mesem3",
  Regulations: "R20",
  Branch: "ME",
  Semester: "sem 3",
  data: {
    courses: [
      "me211",
      "me212",
      "me213",
      "me214",
      "me215",
      "me251",
      "me252",
      "me253",
      "meSL1"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
  },
},
{
  key: "r20mesem1",
  Regulations: "R20",
  Branch: "ME",
  Semester: "sem 1",
  data: {
    courses: [
      "me111",
      "me112",
      "me113",
      "me114",
      "me151",
      "me152",
      "me153",
      "me154"
    ],
    credits: [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
  },
},
{
  key: "r20cbsem5",
  Regulations: "R20",
  Branch: "CB",
  Semester: "sem 5",
  data: {
    courses: [
      "cb311",
      "cb312",
      "cb313",
      "cb314",
      "cb315",
      "cb351",
      "cb352",
      "cb353",
      "cbSL3"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 2, 1.5, 2],
  },
},
{
  key: "r20cbsem3",
  Regulations: "R20",
  Branch: "CB",
  Semester: "sem 3",
  data: {
    courses: [
      "cb211",
      "cb212",
      "cb213",
      "cb214",
      "cb215",
      "cb251",
      "cb252",
      "cb253",
      "cbSL1"
    ],
    credits: [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
  },
},
{
  key: "r20cbsem1",
  Regulations: "R20",
  Branch: "CB",
  Semester: "sem 1",
  data: {
    courses: [
      "cb111",
      "cb112",
      "cb113",
      "cb114",
      "cb115",
      "cb151",
      "cb152",
      "cb153",
      "cb154"
    ],
    credits: [3, 3, 3, 3, 3, 1, 1, 1, 1.5],
  },
},
];



export default courses