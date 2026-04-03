import { SubscriptionEntitlementQuery } from '@/convex/query.config'
import { combinedSlug } from '@/lib/utils'
import { redirect } from 'next/navigation'
import React from 'react'
import Navbar from '@/components/navbar'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  // TODO: Re-enable for production
  // const { profileName, entitlement } = await SubscriptionEntitlementQuery()
  // if (!entitlement._valueJSON) {
  //   redirect(`/billing/${combinedSlug(profileName!)}`)
  // }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
    </div>
  )
}

export default Layout