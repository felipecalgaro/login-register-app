import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserPageProps } from "../types/user";

export function User({ user }: UserPageProps) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) { // if user reloads the page
      navigate('/')
      return
    }
  }, [])

  return (
    <div>
      <p>{user?.createdAt?.toString()}</p>
      <p>{user?.email}</p>
      <p>{user?.id}</p>
      <p>{user?.name}</p>
      <p>{user?.updatedAt?.toString()}</p>
    </div>
  )
}