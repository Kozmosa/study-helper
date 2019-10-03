const Utils = {
    Network: {
        Get: (url, callback) => {
            fetch(url).then((response) => {
                return response.json()
            }).then((res) => {
                console.log(res)
                callback(res)
                return 0
            })
        }
    },
    Crypto: {
        Base64: {
            Encode: (source) => {
                return window.btoa(source)
            },
            Decode: (source) => {
                return window.atob(source)
            }
        }
    }
}

window.Utils = Utils