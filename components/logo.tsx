"use client"

import Link from "next/link"
import { raleway } from "@/lib/fonts"
import Image from "next/image"

export default function Logo(props: { className?: string }) {
  return (
    <Link href="/" className={`font-bold uppercase text-2xl flex items-center gap-1 font-raleway`}>
      <Image className="block" width={35} height={35} src="/icon.png" alt="Forge realm logo" />
      <span className={`${props.className ? props.className : 'text-xl'}`}>
        <span className="font-bold text-pink-bg">forge</span> realm
      </span>
    </Link>
  )
}