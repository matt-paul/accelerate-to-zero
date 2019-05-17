// import { Handler } from "aws-lambda"
const puppeteer = require("puppeteer")

// type Scrape = () => Promise<string>

// const scrape: Scrape = async () => {
//   // code
//   return "test"
// }

const scrape = async () => {
  const url =
    "https://bcorporation.uk/directory?country=United%20Kingdom&page=0"
  const PAUSE_FOR_PAGE_LOAD = 1000

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  await page.click(".node-company > div:nth-child(1) > a:nth-child(1)")
  await page.waitFor(PAUSE_FOR_PAGE_LOAD)
  const result = await page.evaluate(() => {
    const title = document.querySelector("h1")
    const environmentalImpact = document.querySelector(
      "#impact-accordion > .card:nth-child(3) > .card-header > a > .circle > div"
    ).innerHTML

    return {
      title: title && title.innerText,
      environmentalImpact: environmentalImpact
    }
  })

  browser.close()

  return result || "no res"
}

export const handler = async () => {
  // scrape().then(value => {
  //   console.log(value)
  // })
}

scrape().then(value => {
  console.log(value)
})
