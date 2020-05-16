let message = '';
let student;

function print(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
}

while (true) {
  const query = prompt('Search for student');
  if (query.toLowerCase() === 'quit' || query === null) {
    break;
  }
  for (let i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name.toLowerCase() === query.toLowerCase()) {
      let message = ''
      message += '<h2>Student: ' + student.name + '</h2>';
      message += '<p>Track: ' + student.track + '</p>';
      message += '<p>Points: ' + student.points + '</p>';
      message += '<p>Achievements: ' + student.achievements + '</p>';
      print(message);
    }
  }
}

