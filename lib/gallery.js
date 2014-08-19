//.this is probably where we'll get the gallery-okayed projects from the db

var projects = [
    {'name':'thing 1',
    'url':'http://google.com',
    'color':'red'},
    {'name':'thing 2',
    'url':'http://facebook.com',
    'color':'green'},
    {'name':'thing bar',
    'url':'http://apple.com',
    'color':'blue'},
    {'name':'thing foo',
    'url':'http://about.com',
    'color':'purple'},
];

exports.getProjects = function(){
    return projects;
};
