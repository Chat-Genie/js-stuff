javascript:(function(){
    var editableElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, div, td, th, pre, blockquote, section, article, header, footer, nav, aside, main');
    editableElements.forEach(function(element) {
        element.contentEditable = true;
    });
    
    var stopEditingButton = document.createElement('button');
    stopEditingButton.innerHTML = 'Stop Editing';
    stopEditingButton.style.position = 'fixed';
    stopEditingButton.style.top = '10px';
    stopEditingButton.style.right = '10px';
    stopEditingButton.style.zIndex = '9999';
    stopEditingButton.addEventListener('click', function() {
        editableElements.forEach(function(element) {
            element.contentEditable = false;
        });
        this.parentNode.removeChild(this);
    });
    document.body.appendChild(stopEditingButton);
    
    alert("You can now edit the page content! Click on any text to start editing. Click 'Stop Editing' button to stop.");
})();
