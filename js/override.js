console.log("overriding/....");


function replaceInnerText(className, newText) {
    // Get all elements with the specified class
    const elements = document.getElementsByClassName(className);
  
    // Iterate over the elements and replace their inner text
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerText = newText;
    }
  }


  function changeHrefAfterDelay(className, newHref, delay, newTab) {
    // Get all elements with the specified class
    const elements = document.getElementsByClassName(className);
  
    // Iterate over the elements and change their href
    for (let i = 0; i < elements.length; i++) {
      // Set a delay before changing the href
      setTimeout(function() {
        elements[i].href = newHref;
  
        // If newTab is true, open the link in a new tab
        if (newTab) {
          elements[i].target = "_blank";
        }
      }, delay);
    }
  }
  


  setTimeout(function() {
    replaceInnerText("framer-text framer-styles-preset-18e66o5", "Peptin");
  }, 1000);
  
  setTimeout(function() {
    replaceInnerText("framer-text framer-styles-preset-1hrnm6p", "Join Peptin");
  }, 1000);
  

  changeHrefAfterDelay("framer-1mop0n framer-ppl9u9", "https://t.me/pepetinportal", 1000, true);

  changeHrefAfterDelay("framer-1a8ikev framer-ppl9u9", "https://x.com/peptincoin", 1000, true);

  changeHrefAfterDelay("framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md", "https://t.me/pepetinportal", 1000, true);
  
  
  changeHrefAfterDelay("framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md", "https://t.me/pepetinportal", 1000, true);

  changeHrefAfterDelay("framer-YOCIf framer-v2o4wn framer-v-v2o4wn framer-1gz4d3o", "https://uniswap.org/", 1000, true);

  
  window.addEventListener('resize', function() {
    // Your code to execute when the viewport changes
    setTimeout(function() {
        replaceInnerText("framer-text framer-styles-preset-18e66o5", "Peptin");
      }, 1000);
      
      setTimeout(function() {
        replaceInnerText("framer-text framer-styles-preset-1hrnm6p", "Join Peptin");
      }, 1000);
      
    
      changeHrefAfterDelay("framer-1mop0n framer-ppl9u9", "https://t.me/pepetinportal", 1000, true);
    
      changeHrefAfterDelay("framer-1a8ikev framer-ppl9u9", "https://x.com/peptincoin", 1000, true);
    
      changeHrefAfterDelay("framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md", "https://t.me/pepetinportal", 1000, true);
      
      
      changeHrefAfterDelay("framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md", "https://t.me/pepetinportal", 1000, true);
    
      changeHrefAfterDelay("framer-YOCIf framer-v2o4wn framer-v-v2o4wn framer-1gz4d3o", "https://uniswap.org/", 1000, true);
  });