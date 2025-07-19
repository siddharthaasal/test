import { Badge, type BadgeProps } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export type AnnouncementProps = BadgeProps & {
  themed?: boolean;
};

export const Announcement = ({
  variant = 'outline',
  themed = false,
  className,
  ...props
}: AnnouncementProps) => (
  <Badge
    variant={variant}
    className={cn(
      'group max-w-full gap-2 rounded-full px-4 py-1 font-medium font-open-sans shadow-sm transition-all',
      'hover:shadow-md',
      'bg-privue-100/50 text-privue-900 border border-privue-400',
      themed && 'announcement-themed border-privue-800/5',
      className
    )}
    {...props}
  />
);

export type AnnouncementTagProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTag = ({
  className,
  ...props
}: AnnouncementTagProps) => (
  <div
    className={cn(
      '-ml-2.5 shrink-0 truncate rounded-full bg-privue-600/20 px-2.5 py-1 text-xs font-semibold font-open-sans',
      'group-[.announcement-themed]:bg-background/60',
      className
    )}
    {...props}
  />
);

export type AnnouncementTitleProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTitle = ({
  className,
  ...props
}: AnnouncementTitleProps) => (
  <div
    className={cn('flex items-center gap-1 truncate py-1 font-medium font-open-sans', className)}
    {...props}
  />
);
