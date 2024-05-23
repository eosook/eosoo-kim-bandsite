class BandSiteApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async postComment(comment){
        await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
    }

    async getComments(){
        const commentsList = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
        let comments = commentsList.data;
        comments.sort(({timestamp: a}, {timestamp: b}) => b - a);
        return comments;
    }

    async getShows(){
        const showsList = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
        return showsList.data;
    }
}

export {BandSiteApi};