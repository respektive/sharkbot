const axios = require('axios')

async function Say(text) {
    try {
        const result = await axios.post('https://streamlabs.com/polly/speak', {
            voice: 'Justin',
            text: text,
        })
        return result.data.speak_url
    } catch {
        return null
    }
}

module.exports = {
    Say,
}