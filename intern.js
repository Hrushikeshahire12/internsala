const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const app = express();
const port = 1500; 
const Url = 'https://intent-kit-16.hasura.app/api/rest/blogs';
const ulr1 = '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6';

// fetch the data
app.get('/api/blog-stats', async (req, res) => {
  try {
   const headers = { 'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6', };
 const results = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs',{headers});
res.json(results.data);
  } catch (error) {
    console.log('error fetching the data:', error);
   }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// this code for get total number of blogs
axios.get(Url, {
  headers: {
    'x-hasura-admin-secret':ulr1
    
  }
})
.then(response => {
  // Assuming the response contains an array of blogs
  const blogs = response.data;


  const totalBlogs = _.size(blogs);

  console.log(`Total number of blogs: ${totalBlogs}`);
})

// blog with the longest title
axios.get(Url, {
  headers: {
    'x-hasura-admin-secret':ulr1
    
  }
})
.then((response) => {
  const blogs = response.data; // Assuming the response is an array of blogs
  const blogWithLongestTitle = _.maxBy(blogs, 'title.length');
  console.log('Blog with the longest title:', blogWithLongestTitle);
})
.catch((error) => {
  console.error('Error:', error);
});






















































































