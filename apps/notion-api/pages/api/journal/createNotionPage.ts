import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'
import { formatISO } from 'date-fns'
import { notionClient } from 'lib/notion-client'
import { myNotionIds } from 'consts'

export const createNotionPage = (children: NonNullable<CreatePageParameters['children']>) => {
  return notionClient.pages.create({
    parent: { database_id: myNotionIds.db.journal, type: 'database_id' },
    icon: { type: 'emoji', emoji: '⁉' },
    properties: {
      Name: {
        title: [
          {
            type: 'mention',
            mention: { date: { start: formatISO(new Date(), { representation: 'date' }) } },
          },
        ],
      },
    },
    children,
  })
}
