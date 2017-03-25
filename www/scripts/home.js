ons.ready(function() {
    ons.notification.alert({ title: "Hola", message: "Tu primera aplicación" })
});
var showPopover = function(target) {
    document
        .getElementById('popover')
        .show(target);
};