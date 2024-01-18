import Image from "next/image";

import { RESUME_DATA } from "@/data/resume-data";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const WorkExperience = () => {
  return (
    <Section>
      <h2 className="space-y-2 text-xl font-bold">Éxperience</h2>
      <ul className="flex flex-col gap-y-6">
        {RESUME_DATA.work.map((work, index) => {
          return (
            <li key={`${work.company}-${index}`}>
              <Card className="space-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between gap-x-2 text-base">
                    <div className="inline-flex w-full items-start justify-start gap-2 font-semibold leading-none">
                      <div className="space-y-1">
                        <h4 className="font-mono leading-none">{work.title}</h4>
                        <div className="flex items-center gap-x-1">
                          <a
                            className="text-sm font-light hover:underline"
                            href={work.link}
                            target="_blank"
                          >
                            {work.company}
                          </a>
                        </div>
                      </div>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </div>
                    <div className="w-full text-right font-mono text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-2 text-xs">
                  <p>{work.description}</p>

                  <ul className="mb-2 ml-3 list-disc">
                    {work.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1">
                    {work.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
