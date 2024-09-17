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
    setTimeout(function () {
      elements[i].href = newHref;

      // If newTab is true, open the link in a new tab
      if (newTab) {
        elements[i].target = "_blank";
      }
    }, delay);
  }
}

function addInlineCSS(className, css) {
  // Get all elements with the specified class
  const elements = document.getElementsByClassName(className);

  // Iterate over the elements and add the inline CSS
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.cssText = css;
  }
}

setTimeout(function () {
  replaceInnerText("framer-text framer-styles-preset-18e66o5", "Peptin");
}, 1000);

setTimeout(function () {
  replaceInnerText("framer-text framer-styles-preset-1hrnm6p", "Join Peptin");
}, 1000);
setTimeout(function () {
  addInlineCSS(
    "framer-1dbm505",
    "color: white; font-size: 20px; ----framer-font-family: 'Kremlin Regular','Kremlin Regular Placeholder', sans-serif;padding:auto;margin-bottom:10px"
  );
}, 1000);
setTimeout(function () {
  replaceInnerText(
    "framer-1dbm505",
    "CA: 0x0914aAdE2988E97109463EA4Ea39E659F495D3f1"
  );
}, 1000);

changeHrefAfterDelay(
  "framer-1mop0n framer-ppl9u9",
  "https://t.me/pepetinportal",
  1000,
  true
);

changeHrefAfterDelay(
  "framer-1a8ikev framer-ppl9u9",
  "https://x.com/peptincoin",
  1000,
  true
);

setTimeout(function () {
  addInlineCSS(
    "framer-45SjU framer-mecxp framer-1ptx523 framer-v-1sperfe framer-6tpy3",
    "z-index:100;"
  );
}, 1000);

changeHrefAfterDelay(
  "framer-45SjU framer-mecxp framer-1ptx523 framer-v-1sperfe framer-6tpy3",
  "https://www.dextools.io/app/en/ether/pair-explorer/0x74d5ca613b923688cd45680ec57c994bc9a8de0e?t=17265967",
  1000,
  true
);

changeHrefAfterDelay(
  "framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md",
  "https://t.me/pepetinportal",
  1000,
  true
);

changeHrefAfterDelay(
  "framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md",
  "https://t.me/pepetinportal",
  1000,
  true
);

changeHrefAfterDelay(
  "framer-YOCIf framer-v2o4wn framer-v-v2o4wn framer-1gz4d3o",
  "https://app.uniswap.org/explore/tokens/ethereum/0x0914aade2988e97109463ea4ea39e659f495d3f1",
  1000,
  true
);
window.addEventListener('resize', function () {
  location.reload();
});

window.addEventListener("resize", function () {
  // Your code to execute when the viewport changes
  setTimeout(function () {
    replaceInnerText("framer-text framer-styles-preset-18e66o5", "Peptin");
  }, 1000);

  setTimeout(function () {
    replaceInnerText("framer-text framer-styles-preset-1hrnm6p", "Join Peptin");
  }, 1000);

  
  setTimeout(function () {
    replaceInnerText(
      "framer-1dbm505",
      "CA: 0x0914aAdE2988E97109463EA4Ea39E659F495D3f1"
    );
  }, 1000);

  setTimeout(function () {
    addInlineCSS(
      "framer-1dbm505",
      "color: white; font-size: 20px; ----framer-font-family: 'Kremlin Regular','Kremlin Regular Placeholder', sans-serif;padding:auto;margin-bottom:10px"
    );
  }, 1000);

  changeHrefAfterDelay(
    "framer-1mop0n framer-ppl9u9",
    "https://t.me/pepetinportal",
    1000,
    true
  );

  changeHrefAfterDelay(
    "framer-1a8ikev framer-ppl9u9",
    "https://x.com/peptincoin",
    1000,
    true
  );

  setTimeout(function () {
    addInlineCSS(
      "framer-45SjU framer-mecxp framer-1ptx523 framer-v-1sperfe framer-6tpy3",
      "z-index:100;"
    );
  }, 1000);

  changeHrefAfterDelay(
    "framer-45SjU framer-mecxp framer-1ptx523 framer-v-1sperfe framer-6tpy3",
    "https://www.dextools.io/app/en/ether/pair-explorer/0x74d5ca613b923688cd45680ec57c994bc9a8de0e?t=17265967",
    1000,
    true
  );

  changeHrefAfterDelay(
    "framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md",
    "https://t.me/pepetinportal",
    1000,
    true
  );

  changeHrefAfterDelay(
    "framer-48rYj framer-zshsy framer-ob84kb framer-v-ob84kb framer-6ac9md",
    "https://t.me/pepetinportal",
    1000,
    true
  );

  changeHrefAfterDelay(
    "framer-YOCIf framer-v2o4wn framer-v-v2o4wn framer-1gz4d3o",
    "https://app.uniswap.org/explore/tokens/ethereum/0x0914aade2988e97109463ea4ea39e659f495d3f1",
    1000,
    true
  );
});
