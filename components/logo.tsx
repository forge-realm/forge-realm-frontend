"use client"

import Link from "next/link"
import { raleway } from "@/app/layout"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className={`${raleway.className} font-bold uppercase text-2xl flex items-center gap-1`}>
      <Image className="block" width={35} height={35} src="/icon.png" alt="Forge realm logo" />
      <span className="md:block hidden">
        <span className="text-pink-bg">
          forge</span> realm
      </span>
    </Link>
  )
}