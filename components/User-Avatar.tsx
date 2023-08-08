import { useUser } from '@clerk/nextjs'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {}

const UserAvatar = (props: Props) => {
    const { user } = useUser();
  return (
    <div>
        <Avatar clerkh-8 w-8>
          <AvatarImage src={user?.profileImageUrl} />
          <AvatarFallback>
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
    </div>
  )
}

export default UserAvatar