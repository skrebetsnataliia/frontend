/**
 * @author Nataliia Skrebets 
 */
/**
 *function for form validation
 * @param  node
 * @param type
 * @param callback
 */
function addEvent(node, type, callback) {
    if (node.addEventListener) {
        console.log(typeof(node));
        node.addEventListener(
            type,
            function(e) {
                callback(e, e.target);
            },
            false
        );
    } else if (node.attachEvent) {
        node.attachEvent("on" + type, function(e) {
            callback(e, e.srcElement);
        });
    }
}