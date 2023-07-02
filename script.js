
  document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
  });
  
  function generatePassword() {
    var password = '';
    var length = document.getElementById('length').value;
    var difficulty = document.querySelector('input[name="difficulty"]:checked').value;
  
    var characters = '';
    if (difficulty === 'easy') {
      characters = 'abcdefghijklmnopqrstuvwxyz';
    } else if (difficulty === 'medium') {
      characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    } else if (difficulty === 'hard') {
      characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    }
  
    if (length > 15) {
      alert('Password length cannot exceed 15 characters!');
      return;
    }
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    document.getElementById('password').value = password;
  }