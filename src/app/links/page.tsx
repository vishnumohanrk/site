import {
  CodeIcon,
  EnvelopeClosedIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

import { PageCenter } from '@/components/page-center';
import { SocialLink } from '@/components/social-link';

export default function Links() {
  return (
    <PageCenter>
      <h2 className="sr-only">Links</h2>
      <ul className="flex w-full flex-col flex-wrap items-center justify-center gap-6 sm:max-w-lg">
        <SocialLink
          name="LinkedIn"
          Icon={LinkedInLogoIcon}
          href="https://linkedin.com/in/vishnumohanrk"
          className="hover:bg-[#0A66C2]"
        />
        <SocialLink
          name="GitHub"
          Icon={GitHubLogoIcon}
          href="https://github.com/vishnumohanrk"
          className="hover:bg-[#333]"
        />
        <SocialLink
          name="Codewars"
          Icon={CodeIcon}
          href="https://www.codewars.com/users/vishnumohanrk"
          className="hover:bg-[#bb432c]"
        />
        <SocialLink
          name="Email"
          Icon={EnvelopeClosedIcon}
          href="mailto:mohanvish1999@gmail.com"
          className="hover:bg-teal-700"
        />
        <SocialLink
          name="Résumé"
          Icon={FileTextIcon}
          href="https://drive.google.com/file/d/14X5m75Dfckug2MjOvrMc6idDK3JBDms2/view"
          className="hover:bg-neutral-50 hover:text-neutral-900"
        />
      </ul>
    </PageCenter>
  );
}

export const metadata = {
  title: 'Links',
};
