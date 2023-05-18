const counterLoop = (t) => {
  setInterval(() => {
    t = t - 1;
    if (t > 0) {
      chrome.action.setBadgeText({ text: String(t) })
    }
  }, 1000)
}

const Refresher = () => {
  const pages = [
    'https://www.fiverr.com/devroma?up_rollout=true',
    'https://www.fiverr.com/users/devroma/seller_dashboard',
    'https://www.fiverr.com/users/devroma/manage_gigs',
    'https://www.fiverr.com/users/devroma/manage_orders?source=header_nav',
    'https://www.fiverr.com/earnings?source=header_nav'
  ]
  const min = 150
  const max = 260
  const minPage = 0
  const maxPage = 4
  const time = Math.floor(Math.random() * (max - min + 1) + min)
  const page = Math.floor(Math.random() * (maxPage - minPage + 1) + minPage)

  chrome.tabs.query({ currentWindow: true, index: 0 }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.update(tabs[0].id, { url: pages[page] })
    }
  });

  counterLoop(time);
  setTimeout(Refresher, time * 1000)
}

chrome.runtime.onStartup.addListener(() => {
  Refresher()
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: 'Live' });
  setTimeout(()=>{
    Refresher()
  }, 5000)
})
