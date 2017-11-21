var students = [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
];

for(var i = 0; i < students.length; i++){
    console.log(students[i].first_name+" "+students[i].last_name);
}

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}

for(var key in users){
    console.log(key);
    var usergroup = users[key];
    for(var i = 0; i < usergroup.length; i++){
        console.log((i + 1) + " - " + usergroup[i].first_name + " " + usergroup[i].last_name + " - "+(usergroup[i].first_name.length + usergroup[i].last_name.length));
    }
}

