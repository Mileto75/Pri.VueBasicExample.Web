let app = new Vue({
    el: "#coindesk",
    data: {
        pageTitle: "Coindesk App",
        data: null,
        error: null,
        loaded: false,
        hasError: false,
        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    },
    created: async function () {
        //await fetch(this.url)
        //    .then(response => response.json())
        //    .then(data => {this.data = data.bpi });
        await axios.get(this.url)
            .then(response => this.data = response.data.bpi)
            .catch(error => { this.error = error; this.hasError = true })
            .finally(() => { this.loaded=true});
    }
});