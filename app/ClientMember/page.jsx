"use client";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

async function clientMember() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });
  // const session = await getServerSession(options);
  return (
    <div>
      <h1>Member client page</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
}

export default clientMember;
