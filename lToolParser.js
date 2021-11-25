//Make function async, to wait for the button to refresh
//Optional and not desirable - include jQuery script load
//Check if you can manually select the page - huge if possible
//Need to wait until page loads, button is not gray to click next. Could do it with the jQuery .ready(), or (preferably) with JS
//Recursion might not be that efficient - it might pile up and slow down to a crawl. Need to test
//create a for loop to test async, .ready() - need to get the continuous click down first
// const parsingFunction = () => {
//   const nextPage = () => {
//     jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
//   };

//   nextPage();
//   content = document.getElementsByTagName("html")[0].innerHTML;
// };
const parsingFunction = (string) => {
  let content = document.getElementsByTagName("html")[0].innerHTML;
  const nextPage = async () => {
    await jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();

    setTimeout(() => {
      jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
    }, 3000);
    jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
  };
  // return !content.includes(string) ? `${string} found!` : nextPage() ;
  if (content.includes(string)) {
    return `${string} found!`;
  } else {
    return nextPage();
  }
};
//////////////////////////////////
jQuery(".data-endpoint-container-" + maintab, context);
//////////////////////////////////
const observerParser = (string) => {
  new MutationObserver((mutations) => {
    const nextPage = (string) => {
      let content = document.getElementsByTagName("html")[0].innerHTML;
      return content.includes(string)
        ? `${string} found`
        : jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
    };
    return mutations.length > 100 && nextPage();
  });
};

observerParser.observe(
  document.getElementById("iugo-cs-tool-user-tab-standard-form"),
  {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  }
);
//////////////////////////////////WORKING!
let terminate;
const parser = (searchItem) => {
  const target = document.getElementById("iugo-cs-tool-user-tab-standard-form");
  const adminParser = new MutationObserver(mutate);
  const config = {
    subtree: true,
    attributeOldValue: true,
  };
  function mutate(mutations) {
    const nextPage = () => {
      return target.innerHTML.includes(searchItem)
        ? alert(`${searchItem} found`)
        : jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
    };
    return mutations.length > 150 && nextPage();
  }
  adminParser.observe(target, config);

  const observerDisconnect = () => {
    return adminParser.disconnect();
  };
  terminate = observerDisconnect;
};
// const parser = () => {
//   const target = document.getElementById("iugo-cs-tool-user-tab-standard-form");
//   const adminParser = new MutationObserver(mutate);
//   let searchItem;
//   const config = {
//     subtree: true,
//     attributeOldValue: true,
//   };
//   function mutate(mutations) {
//     const nextPage = () => {
//       return target.innerHTML.includes(searchItem)
//         ? console.log(`${searchItem} found`)
//         : jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
//     };
//     return mutations.length > 150 && nextPage();
//   }
//   adminParser.observe(target, config, (searchItem = "2021-11-19"));
// };
//////////
// var config = {
//   childList: true,
//   attributes: true,
//   characterData: true,
//   subtree: true,
// };
// setTimeout(function () {
//   target.className = "some class";
// }, 2000);
//////////////////////////////////
//WORKING!
var mutationObserver = new MutationObserver((mutations) => {
  const nextPage = () => {
    jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
  };
  return mutations.length > 150 && nextPage();
});

mutationObserver.observe(
  document.getElementById("iugo-cs-tool-user-tab-standard-form"),
  {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  }
);
//WORKING!
//////////////////////////////////
const parsingFunction = (string) => {
  let content = document.getElementsByTagName("html")[0].innerHTML;
  const nextPage = () => {
    jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
  };
  nextPage();
  return content.includes(string)
    ? `${string} found!`
    : parsingFunction(string);
};
//   while (!content.includes(string)) {
//     nextPage();
//     content = document.getElementsByTagName("html")[0].innerHTML;
//   }
//   return `${string} found!`;
// };
//////////////////////////////////
const parsingFunction = (string) => {
  let content = document.getElementsByTagName("html")[0].innerHTML;

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
    }, 3000);
  }

  setTimeout(() => {}, 3000);
  // jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown()
  //update content
  //update button

  return `${string} found!`;
};
//////////////////////////////////
// function() {
//     $(this).trigger('formUpdated');
//   }
//////////////////////////////////
jQuery("#iugo-cs-kand-PROD-android-news-top-next-btn").mousedown();
