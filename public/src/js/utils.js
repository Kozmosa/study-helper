class Utils {
    constructor(){
        this.Network = {
            Get: (url, callback) => {
                fetch(url).then((response) => {
                    return response.json()
                }).then((res) => {
                    callback(res)
                    return 0
                })
            }
        }
    }
}

export {Utils}