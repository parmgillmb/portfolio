"use client";

// Embeds a drawing PDF in the browser with a download / open-in-new-tab action.
export function PdfViewer({ file, title }: { file: string; title: string }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-2 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </svg>
          Drawing sheet
        </div>
        <div className="flex items-center gap-2">
          <a href={file} target="_blank" rel="noopener noreferrer" className="btn-outline px-3 py-1.5 text-xs">
            Open in new tab
          </a>
          <a href={file} download className="btn-primary px-3 py-1.5 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
      <object data={`${file}#view=FitH`} type="application/pdf" title={title} className="h-[78vh] w-full bg-white">
        <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
          <p className="text-sm text-muted">Your browser cannot display the PDF inline.</p>
          <a href={file} download className="btn-primary">Download the drawing</a>
        </div>
      </object>
    </div>
  );
}
