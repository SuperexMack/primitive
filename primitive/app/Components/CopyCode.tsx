"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
export default function () {
  const firstCode = `
import { handleWebhook, MyMXWebhookError, MYMX_CONFIRMED_HEADER } from 'mymx';

export async function POST(req: Request) {
  const body = await req.text();

  try {
    const event = handleWebhook({
      body,
      headers: Object.fromEntries(req.headers),
      secret: process.env.WEBHOOK_SECRET!,
    });

    // Access email data
    console.log('From:', event.email.headers.from);
    console.log('Subject:', event.email.headers.subject);
    console.log('Body:', event.email.parsed.body_text);

    // Confirm processing (enables content discard if configured)
    return new Response(null, {
      status: 200,
      headers: { [MYMX_CONFIRMED_HEADER]: 'true' },
    });
  } catch (err) {
    if (err instanceof MyMXWebhookError) {
      return new Response(null, { status: 400 });
    }
    throw err;
  }
}
    `;

  const secondCode = `
{
"id": "evt_a1b2c3d4e5f6a7b8c9d0e1f2",
"event": "email.received",
"version": "2025-12-14",
"delivery": {
  "endpoint_id": "ep_abc123def456",
  "attempt": 1,
  "attempted_at": "2025-12-18T12:00:00.000Z"
  },
"email": {
  "id": "em_e1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c",
  "received_at": "2025-12-18T12:00:00.000Z",
  "smtp": {
    "helo": "mail.example.com",
    "mail_from": "sender@example.com",
    "rcpt_to": [
        "recipient@yourdomain.com"
      ]
    },
  "headers": {
    "message_id": "<1234567890@example.com>",
    "subject": "Hello from primitive",
    "from": "Sender Name <sender@example.com>",
    "to": "recipient@yourdomain.com",
    "date": "Wed, 18 Dec 2025 12:00:00 +0000"
    },
  "content": {
    "raw": {
      "included": true,
      "encoding": "base64",
      "max_inline_bytes": 262144,
      "size_bytes": 1024,
      "sha256": "a1b2c3d4...",
      "data": "RnJvbTogc2VuZGVyQGV4YW1wbGUuY29t..."
      },
    "download": {
      "url": "https://api.primitive.dev/v1/downloads/raw/token",
      "expires_at": "2025-12-19T12:00:00.000Z"
      }
    },
  "parsed": {
    "status": "complete",
    "error": null,
    "body_text": "Hello! This is a test email from primitive.",
    "body_html": "<p>Hello! This is a test email from primitive.</p>",
    "attachments": [
        {
        "filename": "document.pdf",
        "content_type": "application/pdf",
        "size_bytes": 24576,
        "sha256": "b2c3d4e5f6...",
        "part_index": 0,
        "tar_path": "0_document.pdf"
        }
      ],
    "attachments_download_url": "https://api.primitive.dev/v1/downloads/attachments/token"
    },
  "analysis": {
    "spamassassin": {
      "score": 2
      }
    }
  }
}
    `;

  let [select, setSelect] = useState(true);
  let [value, SetValue] = useState(firstCode);

  const codeFunction = () => {
    setSelect(true);
    SetValue(firstCode);
  };

  const theWebhookJSON = () => {
    setSelect(false);
    SetValue(secondCode);
  };

  const textCopied = async (texttoCopy: string) => {
    try {
      await navigator.clipboard.writeText(texttoCopy);
      toast.success("Id copied !!");
    } catch {
      toast.error("Unable to copy the id !!");
      console.log("Unable to copy text");
    }
  };

  return (
    <>
      <div className="w-full mt-[9rem] flex flex-col items-center justify-center">
        <div className="w-auto rounded-2xl border-2 border-white h-auto p-3 flex items-center justify-center space-x-6">
          {select ? (
            <>
              <div className="bg-emerald-900/60 border border-emerald-500/50 rounded-lg px-4 py-2 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                <button
                  className="text-emerald-300 font-mono text-sm font-medium"
                  onClick={codeFunction}
                >
                  THE CODE
                </button>
              </div>

              <div className="px-4 py-2">
                <button
                  className="text-white/50 font-mono text-sm font-medium hover:text-white/80 transition-all duration-200"
                  onClick={theWebhookJSON}
                >
                  THE WEBHOOK JSON
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="px-4 py-2">
                <button
                  className="text-white/50 font-mono text-sm font-medium hover:text-white/80 transition-all duration-200"
                  onClick={codeFunction}
                >
                  THE CODE
                </button>
              </div>

              <div className="bg-emerald-900/60 border border-emerald-500/50 rounded-lg px-4 py-2 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                <button
                  className="text-emerald-300 font-mono text-sm font-medium"
                  onClick={theWebhookJSON}
                >
                  THE WEBHOOK JSON
                </button>
              </div>
            </>
          )}
        </div>

        <div className="w-[70%] h-auto">
          <div className="relative z-50 w-[100px] left-[90%] top-[80px]">
            <button
              onClick={() => textCopied(firstCode)}
              className={select ? `border-2 border-white p-2` : "hidden"}
            >
              Copy
            </button>
          </div>

          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {value}
          </SyntaxHighlighter>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}
