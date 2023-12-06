//1. for the given JSON literate over all loops(for,for in,for of,for each)



let personaldetails = [
  {
    "Name": "S.T.VICKNESWARI",
    "Qualifiaction": ["10th", "12th", "B.E-CSE"],
    "Age": "30",
    "Gender": "Female",
    "Dateof birth": "08-03-1993",
    "Address": "Kaniyakumari"
  },
  {
    "Name": "viswa",
    "Age": "33",
  }];
// console.log(personaldetails);

// for  loop:

for (let i = 0; i < personaldetails.length; i++) {
  console.log(personaldetails[i].Name, personaldetails[i].Age)
}
// using forin loop
for (let key in personaldetails) {
  console.log(personaldetails[key]);
}

//using for of loop:

for (let k of personaldetails) {
  console.log(k.Name, k.Age)
}

// create own resume data in JSON format

let myResume = {

  "Name": "S.T.VICKNESWARI",
  "contact": {
    "Qualifiaction": ["10th", "12th", "B.E-CSE"],
    "Age": "30",
    "Gender": "Female",
    "Date of birth": "08-03-1993",
    "Address": "Kaniyakumari",
    "email": "vickneswari@gmail.com",
    "phone": "12345678",
    "town": "Nagercoil",
    "pincode": "6290305",

  },

  "education": [
    {
      "degree": "B.E",
    }

  ],

  "skills": [
    "",
    "coding details like drop -down menus,fonts,colors"
  ],

  "language": [
    "javascript",
  ]
};
console.log(JSON.stringify(myResume, null));

































// 2.create your own resume data in json format.


