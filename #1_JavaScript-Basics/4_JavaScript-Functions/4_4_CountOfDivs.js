function countDivs(html) {
    var string = String(html);
    var regEx =/(<div)/g;

    console.log(string.match(regEx).length);
}
countDivs('<!DOCTYPE html> <html> <head lang="en"> <meta charset="UTF-8"> <title>index</title> <script src="/yourScript.js" defer></script> </head> <body> <div id="outerDiv"> <div class="first"> <div><div>hello</div></div> </div> <div>hi<div></div></div> <div>I am a div</div> </div> </body> </html>');
