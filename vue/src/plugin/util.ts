
export default {
    install(Vue, options) {
        // Vue.prototype.toStringTwo = (str) => (
        //     ('0000' + String(str)).slice(-2)
        // )
        Vue.prototype.pl = () => (
            console.log('i am a plugin')
        )
        Vue.prototype.locahost = 'http://localhost:10000/'
    }
}