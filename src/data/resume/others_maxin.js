/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: '青年编委：《浙江大学学报·理学版》',
    position: 'Ph.D.',
    summary: `Youth Editorial Board Member, Journal of Zhejiang University: Science 
    A`,
    highlights: [

    ],
  },
  {
    name: '青年编委：Nature Discover Robotics',
    position: 'Ph.D.',
    summary: `Youth Editorial Board Member, Nature Discover 
    Robotics`,
    highlights: [

    ],
  },
];

export default work;
