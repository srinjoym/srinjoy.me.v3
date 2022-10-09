import * as React from 'react'

import { ExtendedRecordMap } from 'notion-types'

import { NotionPage } from '../../components/NotionPage'
import { rootNotionPageId } from '../../lib/config'
import notion from '../../lib/notion'
import Layout from '../../components/Layout'
import { getPageTitle } from 'notion-utils'

export const getStaticProps = async (context) => {
  const pageId = rootNotionPageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  let title = ""
  if (recordMap) {
    title = getPageTitle(recordMap)
  }

  return <Layout title={title}>
    <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
  </Layout>
}