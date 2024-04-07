// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')
    let button = $w('#button1');

    // Add event listener for the 'click' event
    button.onClick(() => {
        // Write your event handling code here
        console.log("Button clicked");
    });
    // Click 'Preview' to run your code
});
