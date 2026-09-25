"use client";

import { useId, useState } from "react";
import { GitHubIcon } from "@/components/SocialIcons";
import { VideoWalkthroughDialog } from "@/components/VideoWalkthroughDialog";
import {
  chipLayoutClass,
  liveChipClass,
  repoChipClass,
  videoChipClass,
} from "@/components/statusChipStyles";
import { getProjectStatus } from "@/content/projectStatus";
import type { Project } from "@/content/types";

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" aria-hidden fill="currentColor">
      <path d="M5 3.2v9.6L13 8 5 3.2z" />
    </svg>
  );
}

export function ProjectStatusChip({ project }: { project: Project }) {
  const status = getProjectStatus(project);
  const [videoOpen, setVideoOpen] = useState(false);
  const dialogId = useId();

  if (!status) return null;

  if (status.kind === "video") {
    return (
      <>
        <button
          type="button"
          className={`${chipLayoutClass} ${videoChipClass}`}
          aria-haspopup="dialog"
          aria-expanded={videoOpen}
          aria-controls={videoOpen ? dialogId : undefined}
          onClick={() => setVideoOpen(true)}
        >
          <PlayIcon />
          Video
        </button>
        {videoOpen ? (
          <VideoWalkthroughDialog
            id={dialogId}
            src={status.href}
            onClose={() => setVideoOpen(false)}
          />
        ) : null}
      </>
    );
  }

  const isLive = status.kind === "live";

  return (
    <a
      href={status.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${chipLayoutClass} ${isLive ? liveChipClass : repoChipClass}`}
    >
      {isLive ? (
        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      ) : (
        <GitHubIcon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
      )}
      {isLive ? "Live" : "Repo only"}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
