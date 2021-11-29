let terminate;
const parser = (searchItem, cutoffPoint = "2021-01-01") => {
  const platform = document.getElementById("edit-kand-platform");
  const server = document.getElementById("edit-current-project");
  const target = document.getElementById("iugo-cs-tool-user-tab-standard-form");
  const adminParser = new MutationObserver(mutate);
  const config = {
    subtree: true,
    attributeOldValue: true,
  };

  const observerDisconnect = () => {
    return adminParser.disconnect();
  };

  const foundItem = () => {
    observerDisconnect();
    return alert(`${searchItem} found`);
  };

  const pushTheButton = () => {
    return !target.innerHTML.includes(cutoffPoint)
      ? jQuery(
          `#iugo-cs-kand-${server.value === "kand-eu" ? "eu-" : ""}PROD-${
            platform.value === "android" ? "android" : "ios"
          }-news-top-next-btn`
        ).mousedown()
      : observerDisconnect();
  };

  const nextPage = () => {
    return target.innerHTML.toLowerCase().includes(searchItem.toLowerCase())
      ? foundItem()
      : pushTheButton();
  };

  function mutate(mutations) {
    return mutations.length > 150 && nextPage();
  }
  adminParser.observe(target, config);

  terminate = observerDisconnect;
};
