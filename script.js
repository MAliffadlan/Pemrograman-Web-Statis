document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var itemInput = document.getElementById('itemInput').value;
if(itemInput.trim()) {
var li = document.createElement('li');
li.textContent = itemInput.trim();
document.getElementById('itemsList').appendChild(li);
document.getElementById('itemInput').value = '';
}
});