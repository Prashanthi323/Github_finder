class Github{
    constructor(){
        this.client_id = 'd064d1eab64b12f985ad';
        this.client_secret = 'e3ca7b025b3c13e25efa3ba2e39a0f19ea683fbd';
    }

    async getUser(user){
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}?client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return{
            profile};
    }
}