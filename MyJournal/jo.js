
function addEntry() {
    const entryContent = document.querySelector('.journal-input').value;
    if (entryContent.trim() === "") return; // Don't add if the content is empty

    const entryDate = new Date().toLocaleDateString(); // Get current date
    const newEntry = document.createElement('div');
    newEntry.classList.add('journal-entry');
    
    // Set up the journal entry structure
    newEntry.innerHTML = `
        <div class="entry-header">
            <span class="entry-date">${entryDate}</span>
            <button class="delete-btn" onclick="deleteEntry(this)"><i class="fas fa-trash-alt"></i></button>
        </div>
        <p class="entry-content">${entryContent}</p>
        <button class="share-btn" onclick="sharePost(this)">Share as Post</button>
    `;

    // Append the new entry to the entries container
    document.getElementById('entries-container').appendChild(newEntry);

    // Clear the input field
    document.querySelector('.journal-input').value = "";
}

// Function to delete a journal entry
function deleteEntry(button) {
    const entry = button.closest('.journal-entry');
    entry.remove();
}


 try {
    const response = await fetch('https://webdiary-backend-8.onrender.com/api/journal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        content: entryContent,
        date: entryDate
      }),
      credentials: 'include'
    });
// Function to simulate sharing the journal entry as a post
function sharePost(button) {
    const entry = button.closest('.journal-entry');
    const entryContent = entry.querySelector('.entry-content').textContent;
    const entryDate = entry.querySelector('.entry-date').textContent;

    alert(`Sharing post...\n\nDate: ${entryDate}\nContent: ${entryContent}`);
}
