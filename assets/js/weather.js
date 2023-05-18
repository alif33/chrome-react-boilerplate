chrome.storage.local.get(function(d){
  let date = new Date()
  if(d.date !== date.getDate()){    
    const API_KEY = '9f0e93e4ede6381236864d3090571516'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`    
    $.get(API_URL, function(w){
        d.request = w
        d.date = date.getDate()
        chrome.storage.local.set(d)
        window.location.reload()
    })
  }
});

chrome.storage.local.get(function(wea){
    console.log(wea)
})




