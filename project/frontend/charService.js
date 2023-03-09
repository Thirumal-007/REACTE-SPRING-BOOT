import axios from 'axios'

const chars= "http://localhost:2021/"

class characterservice{

    saveCust(ANIME){
        return axios.post(chars + "add", ANIME);
    }
    getCust(){
        return axios.get(chars + "show");
    }
}

export default new characterservice();