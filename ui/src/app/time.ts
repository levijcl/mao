import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')

export function getTimeAgo(dateTime: Date): string {
  return timeAgo.format(dateTime).toString()
}
