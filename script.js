// 1 h


function expo(a, b, callback) {
    // b არის ხარისხი
    if (b === 0) {
        return callback(1);
    }
    
    // a არის number 
    expo(a, b - 1, function(result) {
        callback(result * a);
    });
}


expo(3, 3, function(result) {
    console.log(result);  // 27
});





// 2 h


// URL, საიდანაც მოიტანს მონაცემებს
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch ფუნქციით მონაცემების წამოღება
fetch(apiUrl)
  .then(response => response.json()) // მონაცემების გადაიყვანს JSON-ად
  .then(data => displayPosts(data))  // მონაცემების გამოიტანს DOM-ში
  .catch(error => console.error('Error fetching data:', error));

// ფუნქცია, რომელიც მონაცემებს DOM-ში გამოიტანს
function displayPosts(posts) {
  const container = document.getElementById('postsContainer');

  // ვციკლავ პოსტებზე და ვქმნი HTML სტრუქტურას თითოეულისთვის
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    
    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;
    
    const postBody = document.createElement('p');
    postBody.textContent = post.body;
    

    postElement.appendChild(postTitle);
    postElement.appendChild(postBody);
    
    
    container.appendChild(postElement);
  });
}





// 3 h


function deepCopyAsync(input) {
    return new Promise((resolve, reject) => {
      if (typeof input !== 'object' || input === null) {
        // reject თუ არგუმენტი არ არის ობიექტი ან არის null
        reject('Input is not a valid object');
      } else {
        // გამოიყენეთ JSON.stringify და JSON.parse ღრმა კოპირებისთვის
        const copy = JSON.parse(JSON.stringify(input));
        // resolve კოპირებული ობიექტით
        resolve(copy);
      }
    });
  }
  

  const originalObject = { a: 1, b: { c: 2 } };
  
  deepCopyAsync(originalObject)
    .then(copy => {
      console.log('Original:', originalObject);
      console.log('Copy:', copy);
    })
    .catch(error => {
      console.error('Error:', error);
    });