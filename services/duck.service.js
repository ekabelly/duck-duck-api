const axios = require('axios');
const { getDuckBaseUrl } = require('../constants/urls.json');
const { UNKNOWN_ERROR } = require('../constants/error-codes.json');

const relatedTopicsToFlatArr = relatedTopicsArr => {
    return relatedTopicsArr.reduce((accum, result) => {
        if(result.Topics && Array.isArray(result.Topics)) {
            return [
                ...accum,
                ...relatedTopicsToFlatArr(result.Topics)
            ];
        }
        return [
            ...accum,
            {
                title: result.Text,
                url: result.FirstURL
            }
        ];
    }, []);
}

const getDuckData = async q => (await axios.get(getDuckBaseUrl, {
    params: {
        q,
        format: 'json'
    }
})).data


module.exports.getDuckRequest = async q => {
    const res = await getDuckData(q)
    // if for sme reason there are no RelatedTopics, let client know something went wrong
    if (res.RelatedTopics) {
        return relatedTopicsToFlatArr(res.RelatedTopics);
    } else {
        throw {
            name: UNKNOWN_ERROR
        };
    }
}