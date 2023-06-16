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
          color="#0A66C2"
        />
        <SocialLink
          name="GitHub"
          Icon={GitHubLogoIcon}
          href="https://github.com/vishnumohanrk"
          color="#333"
        />
        <SocialLink
          name="Codewars"
          Icon={CodeIcon}
          href="https://www.codewars.com/users/vishnumohanrk"
          color="#bb432c"
        />
        <SocialLink
          name="Email"
          Icon={EnvelopeClosedIcon}
          href="mailto:mohanvish1999@gmail.com"
          color="#0f766e"
        />
        <SocialLink
          name="Résumé"
          Icon={FileTextIcon}
          href="https://drive.google.com/file/d/14X5m75Dfckug2MjOvrMc6idDK3JBDms2/view"
          color="#7e22ce"
        />
      </ul>
    </PageCenter>
  );
}

export const metadata = {
  title: 'Links',
};
