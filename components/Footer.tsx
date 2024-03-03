import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-4">
      <div className="padding-container max-container flex w-full flex-col gap-8">
        <div className="flex flex-col gap-[10%] md:flex-row">

          <div className='flex flex-wrap space-x-40 md:flex-1 justify-center'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-10 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap  text-gray-30">
                      {link.label}:
                    </p>
                    <p className=" whitespace-nowrap  text-gray-30">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center text-center border-t border-gray-200" />
        <p className="font-light text-[14px] leading-[24px] text-center">
        Copyright © 2024 | built with React & Next.js, TypeScript, Tailwind CSS, Vercel hosting. <br />
        All Rights Reserved.</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-16 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer