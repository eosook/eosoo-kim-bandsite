class BandSiteApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    postComment(comment){
        console.log("hello");
    }

    async getComments(){
        const commentsList = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
        return commentsList.data;
    }

    getShows(){
        
    }
}

export default new BandSiteApi();
export {BandSiteApi};