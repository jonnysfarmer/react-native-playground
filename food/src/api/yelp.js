import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 5RzerkcmUcyK1bCzuxyVM-b5w6xeeYKia1De_Z2r2pAY0nfi5PAA2x-XZeWEb3-WrbMBrKhkZ7AknLWAjJOLf2gR2QIYc8MZcE4AbXTOOrvqN1-HSEBK6-yvD56lXnYx'
  }
})