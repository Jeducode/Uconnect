function easyHttp() {
    this.http = new XMLHttpRequest();
}

// Make HTTP get Request
easyHttp.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    // Since the this keyword pertains to the current function, we need to take care of the this in the function below

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send();
}


// Make HTTP Post Request

easyHttp.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-type', 'application/json')

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));





}

// Make HTTP Put Request

// Make HTTP Delte Request