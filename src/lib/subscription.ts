import { auth } from "@clerk/nextjs/server"
import { db } from "./db"
import { userSubscriptions } from "./db/schema"
import { eq } from "drizzle-orm"
import { Days_One } from "next/font/google"

export const checkSubscription =  async() => {

    const DAY_IN_MS = 1000 * 60 * 60 * 24 
    
      const {userId} = auth()
      
      if (!userId) {
        return false
      }

      const _userSubscriptions = await db.select().from(userSubscriptions).where(eq(userSubscriptions.userId , userId))

      if (!_userSubscriptions) {
        return false
      }

      const userSubscription  =  _userSubscriptions[0]

      const isValid = userSubscription?.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now() 

      return !!isValid
}