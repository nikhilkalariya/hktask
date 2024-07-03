
import axios from 'axios';
import { Postresponse } from '../interface/postresponse';
const Post_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Postresponse> => {
  try {
    const response = await axios.get<Postresponse>(Post_API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching post ');
  }
};