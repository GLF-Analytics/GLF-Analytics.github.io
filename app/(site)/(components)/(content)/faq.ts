export type QnA = {
  id: number
  q: string,
  a: string[],
}

export const faq: QnA[] = [
  {
    id: 1,
    q: "What kinds of data projects can you help with?",
    a: [
      "Build a data warehouse in the cloud, which includes setting up API connections to all your data sources and transforming the data into simple and easy to use tables auto-updating daily",
      "Create a set of dashboards to track main KPIs across business functions (AOV, CAC, retention, LTV, ROI, + more). Reports can be created in various business intelligence tools as well as automated data feeds to Google Sheets + Google Slides",
      "Analyze your data, provide analysis on growth initiatives, + create models to drive planning"
    ],
  },
  {
    id: 2,
    q: "What kind of companies do you work with?",
    a: [
      "Small to medium sized businesses that are scaling their operations. As companies are growing, it becomes important to ensure KPIs are tracked daily for decision makers.",
    ],
  },
  {
    id: 3,
    q: "What tools do you use?",
    a: [
      "I like to work in the Google Workspace, which includes Big Query to store the data and Google Data Studio / Google Sheets to visualize the reports. The nice thing about operating in Google is that all the tools are collaborative among teams + are cost efficient. If a data system already exists, I can operate in different environments as well.",
    ],
  },
  {
    id: 4,
    q: "Why should we invest in a data warehouse solution + automated reporting?",
    a: [
      "A well-built and automated data system provides the foundation for a company to scale. When you automate your data and track KPIs daily via dashboards, there are several benefits, including:",
    ],
  },
  {
    id: 5,
    q: "How do you charge?",
    a: [
      "We can work on a project basis, hourly, or on retainer. We are flexible to work with you to make sure you are receiving everything you need within your budget.",
    ],
  },
]; 

