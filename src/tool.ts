class Tool {
    constructor() {
        // Nothing
    }

    B64Encode(source) {
        const result = new Buffer(source).toString('base64');
        return result
    }

    B64Decode(source) {
        const result = new Buffer(source, 'base64').toString();
        return result
    }
}

export { Tool }