
// document.getElementById("email").addEventListener('click', function() {
//     var r = document.createRange();
//     r.selectNode(document.getElementById("email"));
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(r);
//     document.execCommand('copy');
//     window.getSelection().removeAllRanges();
// });
function CopyToClipboard(id)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}