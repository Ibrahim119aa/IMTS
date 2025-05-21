
import axios from "axios";
export const SaveImage = async (formData, message, apiUrl, apiName) => {


    let b = await axios.post(`${apiUrl}${apiName}`, formData,
        {
            headers: {

                'Content-Type': 'multipart/form-data',
            },



        }

    );



}
export const apiUrl = "http://imts.ac.in/backend/";



