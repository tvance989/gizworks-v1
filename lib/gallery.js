//.this is probably where we'll get the gallery-okayed projects from the db

var things = [
    {'name':'thing 1'},
    {'name':'thing 2'},
    {'name':'thing bar'},
    {'name':'thing foo'},
];

var output = '';
for(var i in things) {
    output += things[i].name;
    output += ' ';
}

exports.getProjects = function(){
    return output;
};
