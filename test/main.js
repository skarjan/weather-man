let log = () => {
  return console.log("Done")
}

let delayedFunc = setTimeout(()=>{
log()
}, 2000);

delayedFunc().then(result => {
  console.log(result)
})
