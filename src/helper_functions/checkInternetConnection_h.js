// function to check internet connection 
import dns  from "dns"

function checkInternetConnection(callback) {
  dns.lookup('google.com', (err) => {
    if (err && err.code === 'ENOTFOUND') {
      callback(false);
    } else {
      callback(true);
    }
  });
}

export {
    checkInternetConnection
}