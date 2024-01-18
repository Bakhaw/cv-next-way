import { Metadata } from "next";

import { RESUME_DATA } from "@/data/resume-data";

import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  Education,
  Personal,
  Summary,
  WorkExperience,
} from "@/components/sections";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <section className="mx-auto w-full max-w-3xl space-y-8 print:space-y-6">
        <Personal />
        <Summary />
        <WorkExperience />
        <Education />
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Portfolio",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
