// https://client.midas.develop.bigchange.com/jobschedule.aspx?jobid=160109788

import { LINK_BASE_URL } from "../constants";

/**
 * Maps IDs strings to Markdown links.
 */
export const mapIdsToMarkdownLink = (text: string): string => {
  return text
    .replace(/\[\[\[JobId:(\d+)\]\]\]/g, (_, id) => {
      return `[${id}](${LINK_BASE_URL}/jobschedule.aspx?jobid=${id}&tab=divInvoice)`;
    })
    .replace(/\[\[\[JobGroupId:(\d+)\]\]\]/g, (_, id) => {
      return `[${id}](${LINK_BASE_URL}/jobschedule.aspx?jobid=${id}&tab=divInvoice)`;
    });
};
