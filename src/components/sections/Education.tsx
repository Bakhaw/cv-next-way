import { RESUME_DATA } from "@/data/resume-data";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const Education = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Education</h2>
      {RESUME_DATA.education.map((education) => {
        return (
          <Card key={education.school}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 font-mono text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  {education.school}
                </h3>

                <div className="text-xs tabular-nums text-gray-500 sm:text-sm">
                  {education.start} - {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">{education.degree}</CardContent>
          </Card>
        );
      })}
    </Section>
  );
};
