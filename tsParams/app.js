function active(name, environment, timestamp) {
    if (environment === void 0) { environment = "development"; }
    var message;
    if (timestamp) {
        message = name + " active for " + environment + " in " + timestamp;
    }
    else {
        message = name + " active for " + environment;
    }
    console.log(message);
}
active('sales', 'production');
active('sales', 'production', new Date().toDateString());
