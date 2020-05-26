
import reporter from '../Utilities/Report'
export default class Page
 {
  open (path) {
    browser.url(path)
    process.env.USE_QA==='true'?reporter.addEnvironment('QA Environment','http://bankmaya.buildmaya.com:8082/'):reporter.addEnvironment('DEMO Environment','http://demo.maya.ai:8082/')
  }
}
