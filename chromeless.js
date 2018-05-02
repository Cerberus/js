const chromeless = new Chromeless({ remote: true })

const screenshot = await chromeless
  .goto('https://www.graph.cool')
  .scrollTo(0, 2000)
  .screenshot()

console.log(screenshot)

await chromeless.end()
