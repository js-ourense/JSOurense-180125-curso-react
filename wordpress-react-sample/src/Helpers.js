import axios from 'axios'

const baseURL = 'http://91.116.164.183:8092/wp-json/wp/v2/'

const helpers = {

  getPosts: (page) => {
    let getPage = page || 1
    return axios.get(baseURL + 'posts?page='+getPage)
  },

  getPost: (slug) => {
    return axios.get(baseURL + 'posts?slug='+slug)
  }

}

export default helpers