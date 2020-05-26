import allureReporter from '@wdio/allure-reporter'

class Report 
{

    addLabel(name,value)
    {
        allureReporter.addLabel(name,value)
    }
    addFeature(name)
    {
        allureReporter.addFeature(name)
    }
    addStory(name)
    {
        allureReporter.addStory(name)
    }
    addSeverity(name)
    {
        allureReporter.addSeverity(name)
    }
    addIssue(name)
    {
        allureReporter.addIssue(name)
    }
    addTestId(name)
    {
        allureReporter.addTestId(name)
    }
    addEnvironment(name,value)
    {
        allureReporter.addEnvironment(name,value)
    }
    addArgument(name,value)
    {
        allureReporter.addArgument(name,value)
    }
    addDescription(name,value)
    {
        allureReporter.addDescription(name,value)
    }
    addStep(title,status)
    {
        allureReporter.addStep(title,[status])
    }
    startStep(title)
    {
        allureReporter.startStep(title)
    }
    endStep(status)
    {
        allureReporter.endStep(status)
    }


}
export default new Report()