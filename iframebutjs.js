// Function to create buttons
function createButton(text, top, left, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.position = 'fixed';
    button.style.top = top;
    button.style.left = left;
    button.style.padding = '5px';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';
    button.style.zIndex = '9999';
    button.addEventListener('click', onClick);
    return button;
}

// Create close button
const closeButton = createButton('Close', '50px', '50px', handleClose);

// Create minimize button
const minimizeButton = createButton('Minimize', '50px', '100px', handleMinimize);

// Create maximize button
const maximizeButton = createButton('Maximize', '50px', '160px', handleMaximize);

// Function to create and append iframe with Bing URL
function createIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.bing.com'; // Set to Bing URL
    iframe.width = '400';
    iframe.height = '300';
    iframe.style.border = '1px solid black';
    iframe.style.position = 'fixed';
    iframe.style.top = '100px'; // Adjust the position as needed
    iframe.style.left = '50px';
    iframe.style.zIndex = '9998'; // Lower zIndex than buttons
    document.body.appendChild(iframe);
    return iframe;
}

// Create the iframe with Bing URL
const iframe = createIframe();

// Append elements to the body
document.body.appendChild(closeButton);
document.body.appendChild(minimizeButton);
document.body.appendChild(maximizeButton);

// Close button functionality
function handleClose() {
    document.querySelector('iframe').remove();
    closeButton.style.display = 'none';
    minimizeButton.style.display = 'none';
    maximizeButton.style.display = 'none';
}

// Minimize button functionality
function handleMinimize() {
    const iframe = document.querySelector('iframe');
    if (iframe.style.height === '30px') {
        iframe.style.height = '300px';
        minimizeButton.textContent = 'Minimize';
    } else {
        iframe.style.height = '30px';
        minimizeButton.textContent = 'Maximize';
    }
}

// Maximize button functionality
function handleMaximize() {
    const iframe = document.querySelector('iframe');
    if (iframe.style.width === '30px') {
        iframe.style.width = '400px';
        iframe.style.height = '300px';
        maximizeButton.textContent = 'Maximize';
    } else {
        iframe.style.width = '30px';
        iframe.style.height = '30px';
        maximizeButton.textContent = 'Restore';
    }
}
