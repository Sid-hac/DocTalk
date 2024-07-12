"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import axios from "axios"
import { Loader } from "lucide-react"


type Props = {
    isPro : boolean
}

const SubscribeButton = ({isPro}: Props) => {

    const [loading , setLoading] = useState(false)

    const handleSubscription = async () => {

        try {
          setLoading(true)
    
          const response = await axios.get("/api/stripe")
          // redirect(response.data.url)
          window.location.href = response.data.url
    
        } catch (error) {
    
        } finally {
          setLoading(false)
        }
      }

  return (
    <Button disabled={loading} onClick={handleSubscription} className="h-8 font-bold " variant="secondary" >
        {loading && <Loader className="w-4 h-4 mr-1 animate-spin" />}
        {isPro ? "manage subscription" : "DocTalk Pro"}
    </Button>
  )
}

export default SubscribeButton