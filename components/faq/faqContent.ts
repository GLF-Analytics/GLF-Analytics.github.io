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
      "Data analysis, growth initiative analysis, and planning models",
      "Cloud data warehouse with API connections and daily auto-updates",
      "Dashboards for tracking key KPIs across business functions", 
      "Create automated reports in BI tools and feed data to Google Sheets/Slides",
    ],
  },
  {
    id: 2,
    q: "What kind of companies do you work with?",
    a: [
      "We primarily work with small to medium-sized businesses that are in the process of scaling and require daily KPI tracking for decision-makers.",
    ],
  },

  {
    id: 3,
    q: "Why should we invest in a data warehouse solution + automated reporting?",
    a: [
      "Enhanced decision-making with daily KPI monitoring, A/B testing, and data segmentation",
      "Efficient operations through time-saving, cost-effective tools, and data preservation",
      "Easy data-sharing with important stakeholders, including investors", 
    ],
  },
  {
    id: 4,
    q: "What tools do you use?",
    a: [
      "We prefer Google Workspace for its collaborative and cost-efficient tools like Big Query, Google Data Studio, and Google Sheets, but can adapt to other existing data systems if necessary.",
    ],
  },
  {
    id: 5,
    q: "How do you charge?",
    a: [
      "We offer project-based, hourly, or retainer options to ensure you get what you need within your budget.",
    ],
  },
]; 

