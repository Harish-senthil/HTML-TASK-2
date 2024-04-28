function addAttendeeInputs() {
    const numAttendees = parseInt(document.getElementById('attendees').value);
    const container = document.getElementById('container');
    container.innerHTML = ''; 
  
    for (let i = 1; i < numAttendees; i++) {
      const div = document.createElement('div');
      div.innerHTML = `
        <label for="attendee-${i+1}-name">Attendee ${i+1} Name:</label>
        <input type="text" id="attendee-${i+1}-name" name="attendee-${i+1}-name" style="margin-bottom: 15px;" required>
      `;
      container.appendChild(div);
    }
  }
  