import {
  IoCodeSlashOutline,
  IoDocumentTextOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from 'react-icons/io5';

import { PageCenter } from '@/components/page-center';
import { SocialLink } from '@/components/social-link';

export default function Links() {
  return (
    <PageCenter>
      <h2 className="sr-only">Links</h2>
      <ul className="flex flex-wrap justify-center gap-6">
        <SocialLink
          name="LinkedIn"
          Icon={IoLogoLinkedin}
          href="https://linkedin.com/in/vishnumohanrk"
          className="hover:bg-[#0A66C2]"
        />
        <SocialLink
          name="GitHub"
          Icon={IoLogoGithub}
          href="https://github.com/vishnumohanrk"
          className="hover:bg-[#333]"
        />
        <SocialLink
          name="Codewars"
          Icon={IoCodeSlashOutline}
          href="https://www.codewars.com/users/vishnumohanrk"
          className="hover:bg-[#bb432c]"
        />
        <SocialLink
          name="Email"
          Icon={IoMailOutline}
          href="mailto:mohanvish1999@gmail.com"
          className="hover:bg-teal-700"
        />
        <SocialLink
          name="Resume"
          Icon={IoDocumentTextOutline}
          href="https://drive.google.com/file/d/14X5m75Dfckug2MjOvrMc6idDK3JBDms2/view"
          className="hover:bg-neutral-50 hover:text-neutral-950"
        />
      </ul>
    </PageCenter>
  );
}
